 
using WalletPan.Framework.Dto;

namespace WalletPan.Dto
{

    public class BaseCryptoCurrency 
    {
        public string Title { get; set; }
        public string Icon { get; set; }
    }

    public class NewCryptoCurrency: BaseCryptoCurrency, INewDto
    {

    }

    public class EditCryptoCurrency: NewCryptoCurrency, IEditDto<int>
    {
        public int Key { get; set; }
    }


    public class GetCryptoCurrency: EditCryptoCurrency
    {
    }
}
