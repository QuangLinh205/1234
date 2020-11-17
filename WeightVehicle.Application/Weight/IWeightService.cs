using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WeightVehicle.Application.Request;
using WeightVehicle.Application.ViewModel;

namespace WeightVehicle.Application.Weight
{
    public interface IWeightService
    {
        Task<List<WeightViewModel>> Getvalue();

        Task<List<WeightViewModel>> GetById(int id);

        Task<int> Delete(int Id);

        Task<int> Update(UpdateWeightRequest request);

        Task<int> Create(CreateWeightRequest request);
    }
}