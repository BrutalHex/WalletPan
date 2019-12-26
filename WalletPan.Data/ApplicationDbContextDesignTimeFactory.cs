using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Data
{
    public class WalletPanDataBaseContextDesignTimeFactory : IDesignTimeDbContextFactory<WalletPanDataBaseContext>
    {
        public WalletPanDataBaseContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<WalletPanDataBaseContext>();
            optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=WalletApp;user id=sa;password=zelda@123456;MultipleActiveResultSets=True;");

            return new WalletPanDataBaseContext(optionsBuilder.Options);
        }
    }
}
