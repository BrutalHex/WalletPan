using System;
using System.Collections.Generic;
using System.Text;
using WalletPan.Domain.Entity;
using WalletPan.Dto;
using WalletPan.ServiceContract.Base;

namespace WalletPan.ServiceContract
{
    
    public interface ICryptoCurrencyServerService : ICrudServiceInt<CryptoCurrencyServerEntity, GetCryptoCurrencyServer, NewCryptoCurrencyServer, EditCryptoCurrencyServer>
    {
    }
}
