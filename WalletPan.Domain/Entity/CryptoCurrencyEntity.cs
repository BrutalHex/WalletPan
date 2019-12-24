using System;
using System.Collections.Generic;
using System.Text;
using WalletPan.Framework.Data.Entity;

namespace WalletPan.Domain.Entity
{
    public class CryptoCurrencyEntity: BaseEntity<int>
    {
        public string Title { get; set; }
        public string  Icon { get; set; }

        public virtual ICollection<CryptoCurrencyServerEntity> CryptoCurrencyServerEntities { get; set; }
    }
}
