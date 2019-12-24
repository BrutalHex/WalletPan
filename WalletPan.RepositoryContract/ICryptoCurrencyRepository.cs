 
using WalletPan.Domain.Entity;
using WalletPan.Framework.Data.Abstraction;

namespace WalletPan.RepositoryContract
{
    public interface ICryptoCurrencyRepository: IGenericRepository<CryptoCurrencyEntity>
    {
    }
}
