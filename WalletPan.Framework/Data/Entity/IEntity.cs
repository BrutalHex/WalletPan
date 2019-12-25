using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Framework.Data.Entity
{
    public interface IEntity<T>
    {
        public T Key { get; set; }
}
}
