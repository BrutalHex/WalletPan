using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WalletPan.Dto;
using WalletPan.Framework.Data.Filter;
using WalletPan.Framework.Dto;
using WalletPan.ServiceContract;

namespace WalletPan.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptoCurrencyController : ControllerBase
    {
        private readonly ICryptoCurrencyService _cryptoCurrencyService;
        public CryptoCurrencyController(ICryptoCurrencyService cryptoCurrencyService)
        {
            _cryptoCurrencyService = cryptoCurrencyService;
        }

        [HttpPost]
        public async Task<JsonResult> GetAll([FromBody]QueryInfo searchRequestInfo)
        {
            var result = await _cryptoCurrencyService.GetAll(searchRequestInfo);
            return new JsonResult(new
            {
                data = new { records = result.DataSource, count = result.Count },
                resultCode = 0
               
            });
        }



        [HttpGet]
        public async Task<JsonResult> GetAll()
        {
            var result = await _cryptoCurrencyService.GetAll();

            return new JsonResult(new
            {
                data = new { records = result, count = result.Count },
                resultCode = 0
            });

        }

        [HttpGet]
        public JsonResult Get(int key)
        {
            var result = _cryptoCurrencyService.GetById(key);

            return new JsonResult(new
            {
                data = new { records = result, count = 1 },
                resultCode = 0
            });
        }

        [HttpPost]
        public async Task<JsonResult> Add([FromBody]NewCryptoCurrency model)
        {
            var result = await _cryptoCurrencyService.Add(model);
            return GenerateOutputResult(result);

        }

        [HttpPut]
        public async Task<JsonResult> Update([FromBody]EditCryptoCurrency model)
        {
            var result = await _cryptoCurrencyService.Update(model);
            return GenerateOutputResult(result);

        }

        [HttpDelete]
        public async Task<JsonResult> Delete(int key)
        {

            var result = await _cryptoCurrencyService.Delete(key);

            return GenerateOutputResult(result);
        }



        protected JsonResult GenerateOutputResult(ValiditionMessage validitionMessage)
        {
            if (validitionMessage.Success)
            {
                return new JsonResult(new { resultCode = 0, data = validitionMessage.ResultData, Entity = validitionMessage.Entity, message =  validitionMessage.Message });
            }
            else
            {

                return new JsonResult(new { resultCode = 1, message = validitionMessage.Message, Entity = validitionMessage.Entity });

            }
        }
    }
}