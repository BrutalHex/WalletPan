using AutoMapper;
using Microsoft.Extensions.Localization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WalletPan.Domain.Entity;
using WalletPan.Dto;
using WalletPan.Framework.Data.Abstraction;
using WalletPan.Framework.Data.Filter;
using WalletPan.Framework.Dto;
using WalletPan.Framework.Service;
using WalletPan.RepositoryContract;
using WalletPan.Service.Base;
using WalletPan.ServiceContract;

namespace WalletPan.Service
{


    public class CryptoCurrencyService : CrudServiceInt<CryptoCurrencyEntity, GetCryptoCurrency, NewCryptoCurrency, EditCryptoCurrency>, ICryptoCurrencyService
    {

        private readonly ICryptoCurrencyRepository _repository;
     

        public CryptoCurrencyService(ICryptoCurrencyRepository repository,  IMapper mapper,IUnitOfWork unit, IStringLocalizer localizer ) :   base(repository, mapper, unit, localizer)
        {

            
            _repository = repository;
            
       }

        protected override ValiditionMessage ValidateModel(INewDto newDto, int key)
        {
            var item = (NewCryptoCurrency)newDto;

                var res = base.ValidateModel(item);
                if (!res.Success)
                    return res;

                var existedData = _repository.GetAll().FirstOrDefault(a => (a.Title == item.Title) && a.Key != key);
                if (existedData != null)
                {
                    res.Success = false;

                    res.Message.Add(string.Format(Localizer["Messages.RepeatedRecord"], Localizer["Entity.Title"], Localizer["CryptoCurrencyEntity"]));
                }

                return res;         
        }
    }



    //public class CryptoCurrencyService:BaseService
    //{
    //    private readonly ICryptoCurrencyRepository _repository;
    //    public CryptoCurrencyService(ICryptoCurrencyRepository repository)
    //    {
    //        _repository = repository;
    //    }

    //    /// <summary>
    //    /// دریافت اطلاعات برای گرید
    //    /// </summary>
    //    /// <param name="searchRequestInfo"></param>
    //    /// <returns></returns>
    //    public async Task<List<GetCryptoCurrency>> GetAll(QueryInfo searchRequestInfo)
    //    {


    //        var query = await _repository.GetAllAsyn();
    //        return await CreateFilterableAndSortableQuery<CryptoCurrencyEntity, GetCryptoCurrency>(query, searchRequestInfo);
    //    }



    //    /// <summary>
    //    /// دریافت همه رکوردها
    //    /// </summary>
    //    /// <returns></returns>
    //    public async Task<IList<GetCryptoCurrency>> GetAllCryptoCurrency()
    //    {
    //        var result = _repository.GetAll();
    //        return await Task.Run(() => result.ToList().Select(a => Mapper.Map<GetCryptoCurrency>(a)).ToList());
    //    }

    //    protected ValiditionMessage ValidateModel(NewCryptoCurrency newCryptoCurrency, int key)
    //    {
    //        var res = base.ValidateModel(newCryptoCurrency);
    //        if (!res.Success)
    //            return res;




    //        var existedData = _repository.GetAll().FirstOrDefault(a => (a.Title == newCryptoCurrency.Title ) && a.Key != key);
    //        if (existedData != null)
    //        {
    //            res.Success = false;

    //            res.Message.Add(string.Format(Resources.Messages.RepeatedRecord, $"{Resources.Entity.Title} , {Resources.Entity.TitlePersian}", Resources.Entity.CryptoCurrencyEntity));
    //        }


    //        return res;
    //    }

    //    public async Task<ValiditionMessage> Add(NewCryptoCurrency newCryptoCurrency)
    //    {
    //        var validationRes = ValidateModel(newCryptoCurrency, 0);


    //        if (validationRes.Success)
    //        {
    //            var CryptoCurrencyEntity = Mapper.Map<CryptoCurrencyEntity>(newCryptoCurrency);
    //            await _repository.AddAsync(CryptoCurrencyEntity);
    //            var result = await SaveChanges(CryptoCurrencyEntity);
    //            result.Entity = Mapper.Map<GetCryptoCurrency>(CryptoCurrencyEntity);

    //            return result;
    //        }
    //        else
    //            return validationRes;
    //    }

    //    public async Task<ValiditionMessage> Update(EditCryptoCurrency mCryptoCurrency)
    //    {
    //        var validationRes = ValidateModel(mCryptoCurrency, mCryptoCurrency.Key);

    //        if (validationRes.Success)
    //        {
    //            var CryptoCurrency = GetCryptoCurrency(mCryptoCurrency.Key);
    //            if (CryptoCurrency == null)
    //                return NotFoundEntity(Zagrostours.Resources.Entity.CryptoCurrencyEntity);

    //            Mapper.Map(mCryptoCurrency, CryptoCurrency);
    //            await _repository.UpdateAsync(CryptoCurrency, CryptoCurrency.Key);
    //            var result = await SaveChanges(CryptoCurrency);
    //            result.Entity = Mapper.Map<GetCryptoCurrency>(CryptoCurrency);

    //            return result;
    //        }
    //        else
    //            return validationRes;
    //    }

    //    public CryptoCurrencyEntity GetCryptoCurrency(int key)
    //    {
    //        var CryptoCurrency = _repository.FindAll(a => a.Key == key).FirstOrDefault();
    //        return CryptoCurrency;
    //    }

    //    public GetCryptoCurrency GetCryptoCurrencyById(int key)
    //    {
    //        var CryptoCurrency = GetCryptoCurrency(key);
    //        var res = Mapper.Map<GetCryptoCurrency>(CryptoCurrency);
    //        return res;
    //    }

    //    public async Task<ValiditionMessage> Delete(int key)
    //    {

    //        var result = new ValiditionMessage()
    //        {
    //            ResultData = 0,
    //            Success = true
    //        };

    //        var item =  GetCryptoCurrency(key);
    //        if (item != null)
    //        {
    //                await _repository.DeleteAsync(item);
    //            result = await SaveChanges(item);

    //        }
    //        else
    //        {
    //            result = NotFoundEntity(Zagrostours.Resources.Entity.CryptoCurrencyEntity);
    //        }



    //        return result;
    //    }




    //}





}
