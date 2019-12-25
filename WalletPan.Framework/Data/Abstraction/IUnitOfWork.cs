 
using System.Threading;
using System.Threading.Tasks;

namespace WalletPan.Framework.Data.Abstraction
{
    public interface IUnitOfWork
    {

        IGenericRepository<TEntity> GetRepository<TEntity>() where TEntity : class;

        int SaveChanges();
        int ExecuteSqlCommand(string sql, params object[] parameters);
        Task<int> SaveChangesAsync();
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

        Task<int> ExecuteSqlCommandAsync(string sql, params object[] parameters);
        Task<int> ExecuteSqlCommandAsync(string sql, CancellationToken cancellationToken, params object[] parameters);

       
        int? CommandTimeout { get; set; }
    
        bool Commit();
        void Rollback();
    }
}
