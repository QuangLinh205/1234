using System;
using System.Collections.Generic;
using System.Text;

namespace WeightVehicle.Application.Request
{
    public class CreateAccountUser
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public DateTime DoB { get; set; }
        public string userName { get; set; }
        public string passWord { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
    }
}