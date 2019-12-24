using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Framework.Data
{
    public abstract class BaseMap<T>: IEntityTypeConfiguration<T> where T : class
    {
        public string TableName { get; set; }

        public BaseMap(string tableName) => TableName = tableName;

        public abstract void Configure(EntityTypeBuilder<T> builder);


        public string FormatFieldName(string fieldName)
        {
            return $"{TableName}_{fieldName}";
        }
    }
}
