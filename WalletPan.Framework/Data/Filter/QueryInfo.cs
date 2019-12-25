using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Framework.Data.Filter
{
    public class QueryInfo
    {
        public int Take { get; set; }
        public int Skip { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public SortInfo[] Sort { get; set; }
        public FilterInfo Filter { get; set; }
    }
}
