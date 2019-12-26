using Autofac;
using Autofac.Core;
using System;
using System.Collections.Generic;
using System.Text;
using WalletPan.Framework.Data.Abstraction;

namespace WalletPan.Framework.DI
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
         
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerLifetimeScope();
        }
    }
}
