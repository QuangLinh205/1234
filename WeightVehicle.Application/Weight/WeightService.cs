using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WeightVehicle.Application.ViewModel;
using WeightVehicle.Data.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WeightVehicle.Application.Request;
using WeightVehicle.Data.Entity;

namespace WeightVehicle.Application.Weight
{
    public class WeightService : IWeightService
    {
        private WeightDBContext _weightDbContext;

        public WeightService(WeightDBContext weightDbContext)
        {
            _weightDbContext = weightDbContext;
        }

        public async Task<int> Create(CreateWeightRequest request)
        {
            var weights = new WeightVehicle.Data.Entity.Weight()
            {
                deliveryCode = request.deliveryCode,
                moocCode = request.moocCode,
                sealCount = request.sealCount,
                sealDes = request.sealDes,
                lotNumber = request.lotNumber
            };
            _weightDbContext.Weights.Add(weights);
            return await _weightDbContext.SaveChangesAsync();
        }

        public async Task<int> Delete(int Id)
        {
            var query = await _weightDbContext.Weights.FindAsync(Id);
            _weightDbContext.Weights.Remove(query);

            return await _weightDbContext.SaveChangesAsync();
        }

        public async Task<List<WeightViewModel>> GetById(int id)
        {
            var query = from p in _weightDbContext.Weights
                        where p.id == id
                        select new { p };
            var data = await query.Select(x => new WeightViewModel()
            {
                id = x.p.id,
                deliveryCode = x.p.deliveryCode,
                moocCode = x.p.moocCode,
                sealCount = x.p.sealCount,
                sealDes = x.p.sealDes,
                lotNumber = x.p.lotNumber
            }).ToListAsync();
            return data;
        }

        public async Task<List<WeightViewModel>> Getvalue()
        {
            var query = from p in _weightDbContext.Weights
                        select new { p };
            var data = await query.Select(x => new WeightViewModel()
            {
                id = x.p.id,
                deliveryCode = x.p.deliveryCode,
                moocCode = x.p.moocCode,
                sealCount = x.p.sealCount,
                sealDes = x.p.sealDes,
                lotNumber = x.p.lotNumber
            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(UpdateWeightRequest request)
        {
            var weight = await _weightDbContext.Weights.FindAsync(request.id);

            weight.deliveryCode = request.deliveryCode;
            weight.lotNumber = request.lotNumber;
            weight.moocCode = request.moocCode;
            weight.sealCount = request.sealCount;
            weight.sealDes = request.sealDes;
            await _weightDbContext.SaveChangesAsync();
            return weight.id;
        }
    }
}