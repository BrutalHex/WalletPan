using AutoMapper;
using WalletPan.Domain.Entity;

namespace WalletPan.Dto
{
    public class DtoProfile : Profile
    {
        public DtoProfile()
        {
            CreateMap<NewCryptoCurrency, CryptoCurrencyEntity>();
            CreateMap<EditCryptoCurrency, CryptoCurrencyEntity>();
            CreateMap<GetCryptoCurrency, CryptoCurrencyEntity>().ReverseMap();
        }
    }


}
