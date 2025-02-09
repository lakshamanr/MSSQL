using API.Domain.View;
using API.Repository.View.Respository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Table.Repositoties;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ViewController : ControllerBase
    {
        private readonly ViewsRepository _viewsRepository;
      
        public ViewController(ViewsRepository viewsRepository)
        { 
            _viewsRepository = viewsRepository;
        }
        [HttpGet("GetAllViewData")]
        public async Task<IEnumerable<ViewDetails>> GetDetailedViewsInfoAsync()
        {
            return await _viewsRepository.GetDetailedViewsInfoAsync();
        }
        [HttpGet("GetViewMetaData{viewname}")]
        public async Task<ActionResult<ViewMetaData>> GetViewMetaDataAsync(string viewname)
        {
            var viewMetaData = await _viewsRepository.GetViewMetaDataAsync(viewname);
            if (viewMetaData == null)
            {
                return NotFound();
            }
            return Ok(viewMetaData);
        }
        
    }
}
