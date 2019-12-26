using AutoMapper;
using LinqKit;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WalletPan.Framework.Data.Abstraction;
using WalletPan.Framework.Data.Filter;
using WalletPan.Framework.Dto;

namespace WalletPan.Framework.Service
{
    public class BaseService
    {
        public BaseService(IMapper mapper, IUnitOfWork unit, IStringLocalizer localizer)
        {
            Mapper = mapper;
            UnitOfWork = unit;
            Localizer = localizer;
        }


        protected IStringLocalizer Localizer { get; set; }
        public IUnitOfWork UnitOfWork { get; set; }
        public IMapper Mapper { get; set; }

        protected virtual ValiditionMessage ValidateModel<T>(T modelToValidate)
        {
            if (modelToValidate == null)
                return new ValiditionMessage { Success = false, Message = { Localizer["Messages.EmptyInformationRecieved"] } };

            var context = new System.ComponentModel.DataAnnotations.ValidationContext(modelToValidate, serviceProvider: null, items: null);
            var validationResults = new List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(modelToValidate, context, validationResults, true);
            List<string> errors = new List<string>();
            if (!isValid)
            {
                errors = validationResults.Select(a => a.ErrorMessage).ToList();
            }

            return new ValiditionMessage { Success = isValid, Message = errors };
        }


        protected async Task<ValiditionMessage> SaveChanges<T>(T model, string message = null)
        {
            var result = await UnitOfWork.SaveChangesAsync();
            if (result == 0)
            {
                return new ValiditionMessage { Success = true };
            }
            else
            {
                return new ValiditionMessage
                {
                    Success = false,
                    Message = new List<string> {
                  string.IsNullOrEmpty(message) ?   string.Format(Localizer["Messages.SuccessEntityInsert"],
                    Localizer[(model.GetType().Name)]) : message }
                };
            }
        }
        protected ValiditionMessage NotFoundEntity(string entityName)
        {
            return new ValiditionMessage { Success = false, Message = new System.Collections.Generic.List<string> { string.Format(Localizer["Messages.EntityNotFound"], entityName) } };
        }

        protected async Task<PagedData<DestModel>> CreateFilterableAndSortableQuery<TEntity, DestModel>(IQueryable<TEntity> query, QueryInfo searchRequestInfo, bool hasCustomSort = false) where TEntity : class
        {
            if (searchRequestInfo == null)
            {
                searchRequestInfo = new QueryInfo();
            }

            var pagedData = new PagedData<DestModel>();

            pagedData.Count = await query.CountAsync();

            Expression<Func<TEntity, bool>> searchExpression = null;
            if (searchRequestInfo.Filter != null && searchRequestInfo.Filter.Filters != null && searchRequestInfo.Filter.Filters.Length > 0)
            {
                searchExpression = CreateSearchExpression<TEntity>(searchRequestInfo.Filter);
                query = query.AsExpandable().Where(searchExpression);
            }

            if (!hasCustomSort)
            {
                if (searchRequestInfo.Sort != null && searchRequestInfo.Sort.Length >0)
                {
                    query = CreateOrderedQuery(query, searchRequestInfo.Sort);
                }
            }

            if (searchRequestInfo.PageSize > 0)
            {
                query = query.Skip(searchRequestInfo.Skip).Take(searchRequestInfo.PageSize);
            }
            var result = await query.ToListAsync();
            pagedData.DataSource = result.Select(a => Mapper.Map<DestModel>(a)).ToList();
            return pagedData;
        }

        private Expression<Func<TEntity, bool>> CreateSearchExpression<TEntity>(FilterInfo filterInfo) where TEntity : class
        {
            QueryObject<TEntity> queryObject = new QueryObject<TEntity>();
            Expression<Func<TEntity, bool>> searchExpr = CreateSearchExpressionByFilterInfo<TEntity>(filterInfo);
            if (searchExpr != null)
                queryObject.And(searchExpr);

            return queryObject.Query();

        }

        private Expression<Func<TEntity, bool>> CreateSearchExpressionByFilterInfo<TEntity>(FilterInfo filterInfo) where TEntity : class
        {
            Expression<Func<TEntity, bool>> searchExpr = filterInfo.Translate<TEntity>();
            return searchExpr;
        }
        private IOrderedQueryable<TEntity> CreateOrderedQuery<TEntity>(IQueryable<TEntity> query, SortInfo[] sortInfoArray)
        {
            bool firstIteration = true;
            IOrderedQueryable<TEntity> orderedQuery = null;

            var props = typeof(TEntity).GetProperties();

            foreach (SortInfo sortInfo in sortInfoArray)
            {
                ParameterExpression param = Expression.Parameter(typeof(TEntity), "entity");
                var propName = sortInfo.Field;

                var propInfo = props.Where(a => a.Name.Equals(propName, StringComparison.Ordinal)).FirstOrDefault();

                Expression left = Expression.Property(param, propInfo);

                if (firstIteration)
                {

                    if (sortInfo.Dir.ToLower() == "asc")
                    {
                        if (left.Type == typeof(bool))
                            orderedQuery = query.OrderBy(Expression.Lambda<Func<TEntity, bool>>(left, param));
                        if (left.Type == typeof(string))
                            orderedQuery = query.OrderBy(Expression.Lambda<Func<TEntity, string>>(left, param));
                        if (left.Type == typeof(Int32))
                            orderedQuery = query.OrderBy(Expression.Lambda<Func<TEntity, Int32>>(left, param));
                    }
                    else
                    {
                        if (left.Type == typeof(bool))
                            orderedQuery = query.OrderByDescending(Expression.Lambda<Func<TEntity, bool>>(left, param));
                        if (left.Type == typeof(string))
                            orderedQuery = query.OrderByDescending(Expression.Lambda<Func<TEntity, string>>(left, param));
                        if (left.Type == typeof(Int32))
                            orderedQuery = query.OrderByDescending(Expression.Lambda<Func<TEntity, Int32>>(left, param));
                    }

                    firstIteration = false;
                }
                else
                {
                    if (sortInfo.Dir.ToLower() == "asc")
                    {
                        orderedQuery = orderedQuery.ThenBy(Expression.Lambda<Func<TEntity, bool>>(left, param));
                    }
                    else
                    {
                        orderedQuery = orderedQuery.ThenByDescending(Expression.Lambda<Func<TEntity, bool>>(left, param));
                    }
                }
            }

            return orderedQuery;
        }

    }
}
