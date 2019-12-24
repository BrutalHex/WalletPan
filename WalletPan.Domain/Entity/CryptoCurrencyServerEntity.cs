using System;
using System.Collections.Generic;
using System.Text;
using WalletPan.Framework.Data.Entity;

namespace WalletPan.Domain.Entity
{
    public class CryptoCurrencyServerEntity : BaseEntity<int>
    {
        public string Title { get; set; }
        public string Address { get; set; }


        public virtual CryptoCurrencyEntity CryptoCurrencyEntity { get; set; }
    }
}
