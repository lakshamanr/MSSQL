using API.Domain.View;
using API.Repository.View;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace API.Controllers
{
    /// <summary>
    /// Controller for handling view-related API requests.
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class ViewController : ControllerBase
    {
        private readonly IViewsRepository _viewsRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="ViewController"/> class.
        /// </summary>
        /// <param name="viewsRepository">The repository for accessing view data.</param>
        public ViewController(IViewsRepository viewsRepository)
        {
            _viewsRepository = viewsRepository;
        }

        /// <summary>
        /// Gets detailed information about all views.
        /// </summary>
        /// <returns>A collection of <see cref="ViewDetails"/> objects.</returns>
        [HttpGet("GetAllViewData")]
        public async Task<IEnumerable<ViewDetails>> GetDetailedViewsInfoAsync()
        {
            return await _viewsRepository.GetDetailedViewsInfoAsync();
        }

        /// <summary>
        /// Gets metadata for a specific view.
        /// </summary>
        /// <param name="viewname">The name of the view.</param>
        /// <returns>An <see cref="ActionResult"/> containing the <see cref="ViewMetaData"/> object.</returns>
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
