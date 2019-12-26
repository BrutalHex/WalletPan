using WalletPan.Framework.Dto;

namespace WalletPan.Dto
{
    public class BaseCryptoCurrencyServer
    {
        public string Title { get; set; }
        public string Address { get; set; }

        public int CryptoCurrencyKey { get; set; }
    }

    public class NewCryptoCurrencyServer : BaseCryptoCurrencyServer, INewDto
    {

    }

    public class EditCryptoCurrencyServer : NewCryptoCurrencyServer, IEditDto<int>
    {
        public int Key { get; set; }
    }


    public class GetCryptoCurrencyServer : EditCryptoCurrencyServer
    {
    }
}
