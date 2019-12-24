
using Microsoft.EntityFrameworkCore;
using WalletPan.Domain.Entity;
using WalletPan.Framework.Data;
using WalletPan.RepositoryContract;

namespace WalletPan.Repository
{
    public class CryptoCurrencyRepository : GenericRepository<CryptoCurrencyEntity>, ICryptoCurrencyRepository
    {
        public CryptoCurrencyRepository(DbContext context) : base(context)
        {
        }
    }
}
