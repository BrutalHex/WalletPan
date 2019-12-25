using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletPan.Domain.Entity;
using WalletPan.Framework.Data;

namespace WalletPan.Data.Map
{
    public class CryptoCurrencyMap: BaseMap<CryptoCurrencyEntity>
    {
        public CryptoCurrencyMap():base("CurrencyType")
        {

        }
        public override void Configure(EntityTypeBuilder<CryptoCurrencyEntity> builder)
        {


            builder.ToTable(TableName, "dbo") ;

            builder.HasKey(o => o.Key);

            builder.Property(t => t.Key).HasColumnName(FormatFieldName("Key"));

            builder.Property(t => t.Title).HasColumnName(FormatFieldName( "Title"));
            builder.Property(t => t.Icon).HasColumnName(FormatFieldName( "Icon"));

        }

    }
}
