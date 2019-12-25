using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
 
using System.Data.Common;
 
using System.Threading;
using System.Threading.Tasks;
 

namespace WalletPan.Framework.Data.Abstraction
{

    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
        protected DbTransaction Transaction;
        protected Dictionary<string, dynamic> Repositories;

        public int? CommandTimeout { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }


        private readonly IServiceProvider _serviceProvider;

        public UnitOfWork(DbContext context, IServiceProvider serviceProvider )
        {
            _context = context;
            Repositories = new Dictionary<string, dynamic>();
            _serviceProvider = serviceProvider;
        }


        public virtual int SaveChanges() => _context.SaveChanges();

        public Task<int> SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }

        public virtual Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            return _context.SaveChangesAsync(cancellationToken);
        }

        public virtual IGenericRepository<TEntity> GetRepository<TEntity>(   ) where TEntity : class
        {

            if (Repositories == null)
            {
                Repositories = new Dictionary<string, dynamic>();
            }

            var type = typeof(TEntity).Name;

            if (Repositories.ContainsKey(type))
            {
                return (IGenericRepository<TEntity>)Repositories[type];
            }
           var newRepository = (IGenericRepository<TEntity>)_serviceProvider.GetService(typeof(IGenericRepository<TEntity>));

            Repositories.Add(type, newRepository);

            return newRepository;
        }

        public virtual int ExecuteSqlCommand(string sql, params object[] parameters)
        {
            return _context.Database.ExecuteSqlCommand(sql, parameters);
        }

        public virtual async Task<int> ExecuteSqlCommandAsync(string sql, params object[] parameters)
        {
            return await _context.Database.ExecuteSqlCommandAsync(sql, parameters);
        }

        public virtual async Task<int> ExecuteSqlCommandAsync(string sql, CancellationToken cancellationToken, params object[] parameters)
        {
            return await _context.Database.ExecuteSqlCommandAsync(sql, cancellationToken, parameters);
        }
        
     
        public virtual bool Commit()
        {
            Transaction.Commit();
            return true;
        }

        public virtual void Rollback()
        {
            Transaction.Rollback();
        }


    }
}
