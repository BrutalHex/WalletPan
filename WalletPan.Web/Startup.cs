using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using WalletPan.Data;

using Microsoft.AspNetCore.SpaServices.Extensions;
using WalletPan.Service;
using WalletPan.ServiceContract;
using WalletPan.Repository;
using WalletPan.RepositoryContract;
using WalletPan.Framework.Data.Abstraction;
using WalletPan.Web.Configs;
using WalletPan.Framework.Service;
using System.Reflection;
using Askmethat.Aspnet.JsonLocalizer.Extensions;
using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace WalletPan.Web
{
    public class Startup
    {
     

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public IConfiguration Configuration { get; }
        public ILifetimeScope AutofacContainer { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            CultureInfo[] supportedCultures = new[]
                {
                        new CultureInfo("en-US")
                };

            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("http://localhost:5000",
                                        "http://localhost:3000").AllowAnyHeader()
                                .AllowAnyMethod();
                });
            });

            services.AddJsonLocalization(options =>
            {
                options.ResourcesPath = "Resource";
                options.UseBaseName = true;
                options.CacheDuration = TimeSpan.FromSeconds(15);
                options.SupportedCultureInfos = supportedCultures.ToHashSet();
            });

            services.Configure<RequestLocalizationOptions>(options =>
            {

                options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;
            });

            services.AddAutoMapper(typeof(Startup));
            services.AddControllers();

       

            //services.AddDbContext<WalletPanDataBaseContext>
            //   (options => options.UseSqlServer(Configuration.GetConnectionString("WalletPanDataBaseContext"), x => x.MigrationsAssembly("WalletPan.Data")));

        }
        public void ConfigureContainer(ContainerBuilder builder)
        {

    

            AppDomain currentDomain = AppDomain.CurrentDomain;
            Assembly[] assems = currentDomain.GetAssemblies();

           
            builder.RegisterModule(new AutoMapperModule(assems));

            builder.Register(c =>
            {
                var opt = new DbContextOptionsBuilder<WalletPanDataBaseContext>();
                opt.UseSqlServer(Configuration.GetConnectionString("WalletPanDataBaseContext"), x => x.MigrationsAssembly("WalletPan.Data"));
                return new WalletPanDataBaseContext(opt.Options);
            }).As<DbContext>().InstancePerLifetimeScope();





            builder.RegisterModule(new WalletPan.Framework.DI.AutofacModule());
            builder.RegisterModule(new WalletPan.Repository.AutofacModule());
            builder.RegisterModule(new WalletPan.Service.AutofacModule());

          

        

            //builder.RegisterAssemblyTypes(WalletPan.Repo)
            //.Where(t => t.Name.EndsWith("Repository"))
            //.AsImplementedInterfaces();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env )
        {
            this.AutofacContainer = app.ApplicationServices.GetAutofacRoot();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
               
            }
            //app.UseSpa(a => a.UseProxyToSpaDevelopmentServer("http://localhost:3000"));
            app.UseHttpsRedirection();

            app.UseRouting();

            //  app.UseAuthorization();
            app.UseRequestLocalization();
            app.UseCors("default");
            app.UseCors(MyAllowSpecificOrigins);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
               
               
            });
           
           




             


        }

        //public void ConfigureDevelopmentServices(IServiceCollection services)
        //{
        //    // Add things to the service collection that are only for the
        //    // development environment.
        //    this does not call, becarefull  ConfigureServices(IServiceCollection services)
        //}


    }
}
