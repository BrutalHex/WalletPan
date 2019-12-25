 
namespace WalletPan.Framework.Data.Entity
{
    public class BaseEntity<T>: IEntity<T>
    {
        public T Key { get; set; }
    }
}
