using AutoMapper;
using Microsoft.Extensions.Localization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WalletPan.Dto;
using WalletPan.Framework.Data.Abstraction;
using WalletPan.Framework.Data.Entity;
using WalletPan.Framework.Data.Filter;
using WalletPan.Framework.Dto;
using WalletPan.Framework.Service;
using WalletPan.ServiceContract.Base;

namespace WalletPan.Service
{
   
    public abstract class CrudService<ITEntity, GetDto, nNewDto, EditDto, key> : BaseService, ICrudService<ITEntity, GetDto, nNewDto, EditDto, key> where ITEntity : BaseEntity<key>
where GetDto : class
where nNewDto : INewDto
where EditDto : IEditDto<key>
    {
        private readonly IGenericRepository<ITEntity, key> _repository;

        key _defaultKeyValue;

      

        public CrudService(IGenericRepository<ITEntity, key> repository, key defaultKeyValue, IMapper mapper, IUnitOfWork unit, IStringLocalizer localizer):base(mapper, unit, localizer)
        {
            _repository = repository;
            _defaultKeyValue = defaultKeyValue;
        }

        /// <summary>
        /// دریافت اطلاعات برای گرید
        /// </summary>
        /// <param name="searchRequestInfo"></param>
        /// <returns></returns>
        public async Task<PagedData<GetDto>> GetAll(QueryInfo searchRequestInfo)
        {


            var query =   _repository.GetAll();
            return await CreateFilterableAndSortableQuery<ITEntity, GetDto>(query, searchRequestInfo);
        }



        /// <summary>
        /// دریافت همه رکوردها
        /// </summary>
        /// <returns></returns>
        public async Task<IList<GetDto>> GetAll()
        {
            var result = _repository.GetAll();
            return await Task.Run(() => result.ToList().Select(a => Mapper.Map<GetDto>(a)).ToList());
        }

        protected abstract ValiditionMessage ValidateModel(INewDto newDto, key key);


        public async Task<ValiditionMessage> Add(nNewDto receivedItem)
        {
            var validationRes = ValidateModel(receivedItem, _defaultKeyValue);


            if (validationRes.Success)
            {
                var newItem = Mapper.Map<ITEntity>(receivedItem);
                await _repository.AddAsync(newItem);
                var result = await SaveChanges(newItem);
                result.Entity = Mapper.Map<GetDto>(newItem);

                return result;
            }
            else
                return validationRes;
        }

        public async Task<ValiditionMessage> Update(EditDto receivedItem)
        {
            var validationRes = ValidateModel(receivedItem, receivedItem.Key);

            if (validationRes.Success)
            {
                var entity = GetEntity(receivedItem.Key);
                if (entity == null)
                    return NotFoundEntity(Localizer[typeof(ITEntity).Name]);

                Mapper.Map(receivedItem, entity);
                await _repository.UpdateAsync(entity, entity.Key);
                var result = await SaveChanges(entity);
                result.Entity = Mapper.Map<GetDto>((object)entity);

                return result;
            }
            else
                return validationRes;
        }

        public ITEntity GetEntity(key targetKey)
        {
            var result = _repository.Get(targetKey);

          //  var result = _repository.FindAll(a => a.Key == targetKey).FirstOrDefault();
            return result;
        }

        public GetDto GetById(key key)
        {
            var CryptoCurrency = GetEntity(key);
            var res = Mapper.Map<GetDto>(CryptoCurrency);
            return res;
        }

        public async Task<ValiditionMessage> Delete(key key)
        {
            var result = new ValiditionMessage()
            {
                ResultData = 0,
                Success = true
            };

            var item = GetEntity(key);
            if (item != null)
            {
                await _repository.DeleteAsync(item);
                result = await SaveChanges(item);
            }
            else
            {
                result = NotFoundEntity(Localizer[typeof(ITEntity).Name]);
            }
            return result;
        }
    }
}
