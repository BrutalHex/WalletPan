using Autofac;
using WalletPan.RepositoryContract;

namespace WalletPan.Repository
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
 
            builder.RegisterType<CryptoCurrencyRepository>().As<ICryptoCurrencyRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CryptoCurrencyServerRepository>().As<ICryptoCurrencyServerRepository>()
                .InstancePerLifetimeScope();

        }
    }
}
