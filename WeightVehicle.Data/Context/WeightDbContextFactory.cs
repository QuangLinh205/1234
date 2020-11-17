using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace WeightVehicle.Data.Context
{
    internal class WeightDbContextFactory : IDesignTimeDbContextFactory<WeightDBContext>
    {
        public WeightDBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("WeightDbContext");

            var optionBuiler = new DbContextOptionsBuilder<WeightDBContext>();
            optionBuiler.UseSqlServer(connectionString);
            return new WeightDBContext(optionBuiler.Options);
        }
    }
}