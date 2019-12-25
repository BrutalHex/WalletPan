using System;
using System.Collections.Generic;
using System.Text;
using WalletPan.Framework.Data.Abstraction;
using WalletPan.Framework.Data.Entity;
using WalletPan.Framework.Dto;
using WalletPan.ServiceContract.Base;

namespace WalletPan.Service.Base
{
    public abstract class CrudServiceInt<ITEntity,GetDto,nNewDto,EditDto>:CrudService<ITEntity, GetDto, nNewDto, EditDto,int>, ICrudServiceInt<ITEntity, GetDto, nNewDto, EditDto>
         where ITEntity : BaseEntity<int>
        where GetDto : class
           where nNewDto : INewDto
           where EditDto : IEditDto<int>
    {
       
        public CrudServiceInt(IGenericRepository<ITEntity, int> repository):base(repository,0)
        {

        }
    }
}
