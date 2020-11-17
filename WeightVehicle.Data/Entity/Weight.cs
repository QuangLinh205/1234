using System;
using System.Collections.Generic;
using System.Text;

namespace WeightVehicle.Data.Entity
{
    public class Weight
    {
        public int id { get; set; }
        public string deliveryCode { get; set; }
        public string moocCode { get; set; }
        public int sealCount { get; set; }
        public string sealDes { get; set; }
        public string lotNumber { get; set; }
    }
}