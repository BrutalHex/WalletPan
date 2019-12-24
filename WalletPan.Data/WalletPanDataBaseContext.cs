using Microsoft.EntityFrameworkCore;
using WalletPan.Framework.Data;


namespace WalletPan.Data
{
   public  class WalletPanDataBaseContext : DbContext
    {
 
        public WalletPanDataBaseContext(DbContextOptions<WalletPanDataBaseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.AddEntityConfigurationsFromAssembly(GetType().Assembly);
        }


    }
}
