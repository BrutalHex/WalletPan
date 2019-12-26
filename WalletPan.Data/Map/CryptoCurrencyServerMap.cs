using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletPan.Domain.Entity;
using WalletPan.Framework.Data;

namespace WalletPan.Data.Map
{
    public class CryptoCurrencyServerMap: BaseMap<CryptoCurrencyServerEntity>
    {
        public CryptoCurrencyServerMap():base("CryptoCurrencyServer")
        {

        }
        public override void Configure(EntityTypeBuilder<CryptoCurrencyServerEntity> builder)
        {
            builder.ToTable(TableName, "dbo");

            builder.HasKey(o => o.Key);

            builder.Property(t => t.Key).HasColumnName(FormatFieldName("Key"));

            builder.Property(t => t.Title).HasColumnName(FormatFieldName("Title"));
            builder.Property(t => t.Address).HasColumnName(FormatFieldName("Address"));

            builder.Property(a => a.CryptoCurrencyKey).HasColumnName($"CryptoCurrency_Key");
            builder.HasOne(a => a.CryptoCurrencyEntity).WithMany(a => a.CryptoCurrencyServerEntities).HasForeignKey(a => a.CryptoCurrencyKey);



        }
    }
}
