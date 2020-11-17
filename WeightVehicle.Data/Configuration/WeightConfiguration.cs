using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using WeightVehicle.Data.Entity;

namespace WeightVehicle.Data.Configuration
{
    internal class WeightConfiguration : IEntityTypeConfiguration<Weight>
    {
        public void Configure(EntityTypeBuilder<Weight> builder)
        {
            builder.ToTable("Weights");
            builder.HasKey(x => x.id);
            builder.Property(x => x.lotNumber).IsRequired();
        }
    }
}