using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeightVehicle.Application.Request;
using WeightVehicle.Data.Context;

namespace WeightVehicle.Application.User
{
    public class UserService : IUserService
    {
        private readonly WeightDBContext _weightDBContext;

        public UserService(WeightDBContext weightDBContext)
        {
            _weightDBContext = weightDBContext;
        }

        public async Task<int> Add(CreateAccountUser request)
        {
            if (await _weightDBContext.Users.FindAsync(request.id) != null)
            {
                throw new Exception("CMND da ton tai");
            }
            else
            {
                var users = new WeightVehicle.Data.Entity.User()
                {
                    id = request.id,
                    firstName = request.firstName,
                    lastName = request.lastName,
                    DoB = request.DoB,
                    userName = request.userName,
                    passWord = request.passWord,
                    email = request.email,
                    phoneNumber = request.phoneNumber,
                };
                _weightDBContext.Users.Add(users);
                return await _weightDBContext.SaveChangesAsync();
            }
        }

        public async Task<int> CheckLogin(int id, string passWord)
        {
            var e = _weightDBContext.Users.FirstOrDefault(x => x.id == id);
            var p = _weightDBContext.Users.Where(x => x.id == id && x.passWord == passWord).FirstOrDefault();
            if (e != null && p != null)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    }
}