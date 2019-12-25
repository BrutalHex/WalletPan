using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace WalletPan.Framework.Data.Filter
{
    public static class FilterInfoTranslator
    {
        public static Expression<Func<TEntity, bool>> Translate<TEntity>(this FilterInfo filterInfo) where TEntity : class
        {
            QueryObject<TEntity> queryObject = new QueryObject<TEntity>();

            ParameterExpression param = Expression.Parameter(typeof(TEntity), "entity");



            foreach (FilterData filterData in filterInfo.Filters)
            {
                string propertyName = filterData.Field;

                var prop = typeof(TEntity).GetProperties().Where(a => a.Name.Equals(propertyName, StringComparison.Ordinal)).FirstOrDefault();
                if (prop.PropertyType == typeof(DateTime))
                {
                    string[] str = { "contains", "doesnotcontain", "endswith", "startswith" };
                    if (str.Contains(filterData.Operator))
                        filterData.Operator = "eq";

                }

                Expression body = CreateBodyExpression(param, propertyName, filterData.Operator, filterData.Value);

                if (body != null)
                {
                    Expression<Func<TEntity, bool>> lambda = Expression.Lambda<Func<TEntity, bool>>(body, param);

                    if (filterInfo.Logic.ToLower() == "and")
                        queryObject.And(lambda);
                    else
                        queryObject.Or(lambda);
                }
            }

            return queryObject.Query();
        }

        private static Expression CreateBodyExpression(ParameterExpression param, string propertyName, string operation, string valueStr)
        {
            Expression body = null;
            Expression left = Expression.Property(param, propertyName);

            object value = ConvertValue(left.Type, valueStr);

            Expression right = left.Type.IsEnum ? Expression.Constant(Enum.ToObject(left.Type, value)) : Expression.Constant(value, left.Type);

            switch (operation.ToLower())
            {
                case "eq":
                    body = Expression.Equal(left, right);
                    break;
                case "neq":
                    body = Expression.NotEqual(left, right);
                    break;
                case "less":
                    body = Expression.LessThan(left, right);
                    break;
                case "gt":
                    body = Expression.GreaterThan(left, right);
                    break;
                case "gte":
                    body = Expression.GreaterThanOrEqual(left, right);
                    break;
                case "lt":
                    body = Expression.LessThan(left, right);
                    break;
                case "lte":
                    body = Expression.LessThanOrEqual(left, right);
                    break;
                case "contains":
                    body = Expression.Call(left, "Contains", null, right);
                    break;
                case "doesnotcontain":
                    body = Expression.Not(Expression.Call(left, "Contains", null, right));
                    break;
                case "endswith":
                    body = Expression.Call(left, "EndsWith", null, right);
                    break;
                case "startswith":
                    body = Expression.Call(left, "StartsWith", null, right);
                    break;
                default:

                    break;
            }

            return body;
        }
        private static object ConvertValue(Type type, string value)
        {
            object result;
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(System.Nullable<>))
            {
                Type underlyingType = Nullable.GetUnderlyingType(type);
                if (underlyingType.IsEnum)
                {
                    string enumStr = value;

                    int intValue = 0;
                    if (Int32.TryParse(value, out intValue))
                        enumStr = Enum.GetName(underlyingType, intValue);


                    object enumValue = Enum.Parse(underlyingType, enumStr);
                    result = Convert.ChangeType(enumValue, underlyingType, CultureInfo.InvariantCulture);

                }
                else if (underlyingType == typeof(DateTime))
                    result = Convert.ToDateTime(value);
                else
                    result = string.IsNullOrWhiteSpace(value) ? null : Convert.ChangeType(value, underlyingType, CultureInfo.InvariantCulture);
            }
            else if (type.IsEnum)
            {
                int intValue = 0;
                if (Int32.TryParse(value, out intValue))
                {
                    result = intValue;
                }
                else
                {
                    result = Enum.Parse(type, value as string);
                }
            }
            else if (type == typeof(DateTime))
                result = Convert.ToDateTime(value);
            else
            {
                result = string.IsNullOrWhiteSpace(value) ? null : Convert.ChangeType(value, type, CultureInfo.InvariantCulture);
            }

            return result;
        }
    }
}
