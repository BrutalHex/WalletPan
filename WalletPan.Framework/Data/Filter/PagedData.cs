using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Framework.Data.Filter
{
 
    public class PagedData<T>
    {
        public int Count { get; set; }
        public IList<T> DataSource { get; set; }
    }
}
