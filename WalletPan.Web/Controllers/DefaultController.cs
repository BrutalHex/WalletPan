using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WalletPan.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        [HttpPost]
        [AcceptVerbs("HttpPost")]
        public async Task<HttpResponseMessage> GetAll([FromBody]QueryInfo searchRequestInfo)
        {
            try
            {

                var result = await _accommodationRoomTypesService.GetAll(searchRequestInfo);
                return Request.CreateResponse(HttpStatusCode.OK, new { resultCode = 0, data = new { records = result.DataSource, count = result.Count } });
            }
            catch (Exception)
            {
                return null;
            }
        }



        [HttpGet, HttpPost]
        [AcceptVerbs("HttpGet")]
        public async Task<HttpResponseMessage> GetAllAccommodationRoomTypes()
        {
            var result = await _accommodationRoomTypesService.GetAllAccommodationRoomType();
            return Request.CreateResponse(HttpStatusCode.OK, new { resultCode = 0, data = new { records = result, count = result.Count } });
        }






        [HttpGet]
        [AcceptVerbs("HttpGet")]
        public HttpResponseMessage Get(int id)
        {
            var result = _accommodationRoomTypesService.GetAccommodationRoomTypeById(id);
            return Request.CreateResponse(HttpStatusCode.OK, new { resultCode = 0, data = new { records = result } });
        }

        [HttpPost]

        public async Task<HttpResponseMessage> Add([FromBody]NewAccommodationRoomType model)
        {
            var result = await _accommodationRoomTypesService.Add(model);
            return GenerateOutputResult(result);

        }

        [HttpPut]

        public async Task<HttpResponseMessage> Update([FromBody]EditAccommodationRoomType model)
        {
            var result = await _accommodationRoomTypesService.Update(model);
            return GenerateOutputResult(result);

        }

        [HttpDelete]

        public async Task<HttpResponseMessage> Delete(int id)
        {

            var result = await _accommodationRoomTypesService.Delete(id);

            return GenerateOutputResult(result);
        }

    }
}