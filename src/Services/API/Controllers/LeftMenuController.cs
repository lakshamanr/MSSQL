using API.Repository.LeftMenu;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// Controller for handling left menu related requests.
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class LeftMenuController : ControllerBase
    {
        private readonly LeftMenuRepository _leftMenuRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="LeftMenuController"/> class.
        /// </summary>
        /// <param name="leftMenuRepository">The left menu repository.</param>
        public LeftMenuController(LeftMenuRepository leftMenuRepository)
        {
            _leftMenuRepository = leftMenuRepository;
        }

        /// <summary>
        /// Gets the left menu asynchronously.
        /// </summary>
        /// <returns>A JSON string representing the left menu.</returns>
        [HttpGet("left-menu")]
        public async Task<string> GetLeftMenu()
        {
            return await _leftMenuRepository.GetLeftMenuAsync();
        }
    }
}
