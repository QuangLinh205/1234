using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WeightVehicle.Application.Request;

namespace WeightVehicle.Application.User
{
    public interface IUserService
    {
        Task<int> Add(CreateAccountUser request);

        Task<int> CheckLogin(int id, string passWord);
    }
}