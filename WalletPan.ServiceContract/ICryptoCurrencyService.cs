using WalletPan.Domain.Entity;
using WalletPan.Dto;
using WalletPan.ServiceContract.Base;

namespace WalletPan.ServiceContract
{
    public interface ICryptoCurrencyService : ICrudServiceInt<CryptoCurrencyEntity, GetCryptoCurrency, NewCryptoCurrency, EditCryptoCurrency>
    {
    }
}
