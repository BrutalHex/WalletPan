using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Framework.Dto
{
   public interface IEditDto<T> : INewDto
    {
        public T Key { get; set; }
    }
}
