using Autofac;
using Autofac.Core;
using WalletPan.ServiceContract;

namespace WalletPan.Service
{
    public class AutofacModule : Module, IModule
    {
        protected override void Load(ContainerBuilder builder)
        {
            
            builder.RegisterType<CryptoCurrencyService>().As<ICryptoCurrencyService>() 
                .InstancePerLifetimeScope();

            builder.RegisterType<CryptoCurrencyServerService>().As<ICryptoCurrencyServerService>()
               .InstancePerLifetimeScope();

        }
    }
}
