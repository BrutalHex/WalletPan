using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WalletPan.Framework.Data.Entity;
using WalletPan.Framework.Data.Filter;
using WalletPan.Framework.Dto;

namespace WalletPan.ServiceContract.Base
{
    public interface ICrudService<ITEntity, GetDto, nNewDto, EditDto, key>
         where ITEntity : BaseEntity<key>
         where GetDto : class
         where nNewDto : INewDto
         where EditDto : IEditDto<key>
    {
        Task<ValiditionMessage> Add(nNewDto receivedItem);
        Task<ValiditionMessage> Delete(key key);
        Task<List<GetDto>> GetAll(QueryInfo searchRequestInfo);
        Task<IList<GetDto>> GetAll();
        GetDto GetById(key key);
        ITEntity GetEntity(object targetKey);
        Task<ValiditionMessage> Update(EditDto receivedItem);
    }

}
