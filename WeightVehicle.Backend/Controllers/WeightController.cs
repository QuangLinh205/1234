using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeightVehicle.Application.Weight;
using WeightVehicle.Application.ViewModel;
using AutoMapper;
using WeightVehicle.Application.Request;

namespace WeightVehicle.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeightController : Controller
    {
        private readonly IWeightService _weightService;

        public WeightController(IWeightService weightService)
        {
            _weightService = weightService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> Getvl()
        {
            var weight = await _weightService.Getvalue();
            return Ok(weight);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var weight = await _weightService.GetById(id);
            return Ok(weight);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            var delWeight = await _weightService.Delete(Id);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UpdateWeightRequest request)
        {
            var result = await _weightService.Update(request);
            if (result == 0)
                return BadRequest();
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateWeightRequest request)
        {
            var result = await _weightService.Create(request);
            if (result == 0)
                return BadRequest();
            return Ok();
        }
    }
}