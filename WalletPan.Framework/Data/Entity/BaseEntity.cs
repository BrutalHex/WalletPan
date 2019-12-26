
using System.ComponentModel.DataAnnotations.Schema;

namespace WalletPan.Framework.Data.Entity
{
    public class BaseEntity<T>: IEntity<T>
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T Key { get; set; }
    }
}
