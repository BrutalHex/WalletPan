using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using WalletPan.Domain.Entity;
using WalletPan.Framework.Data;
using WalletPan.RepositoryContract;

namespace WalletPan.Repository
{
    public class CryptoCurrencyServerRepository : GenericRepository<CryptoCurrencyServerEntity,int>, ICryptoCurrencyServerRepository
    {
        public CryptoCurrencyServerRepository(DbContext context) : base(context)
        {
        }

    }
}
