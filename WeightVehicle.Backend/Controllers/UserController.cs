using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeightVehicle.Application.Request;
using WeightVehicle.Application.User;

namespace WeightVehicle.Backend.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _iuserservice;

        public UserController(IUserService userService)
        {
            _iuserservice = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Register(CreateAccountUser request)
        {
            var result = await _iuserservice.Add(request);
            if (result == 0)
                return BadRequest();
            return Ok();
        }

        [HttpPost("login")]
        public async Task<int> login([FromBody] LoginRequest request)
        {
            var result = await _iuserservice.CheckLogin(request.id, request.passWord);
            if (result == 1)
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