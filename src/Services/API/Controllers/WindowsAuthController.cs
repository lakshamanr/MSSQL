
using System.Security.Claims;
using System.Threading.Tasks;
using API.core.Services.Account;
using API.Core.Domain.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IISIntegration;
using OpenIddict.Abstractions;
using OpenIddict.Server.AspNetCore;
using static OpenIddict.Abstractions.OpenIddictConstants;

namespace API.Controllers
{
    [Authorize(AuthenticationSchemes = IISIntegrationDefaults.AuthenticationScheme)]
    [ApiController]
    [Route("api/[controller]")]
    public class WindowsAuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public WindowsAuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet("login")]
        public async Task<IActionResult> Login()
        {
            var windowsIdentity = (ClaimsIdentity)User.Identity;
            if (windowsIdentity == null || string.IsNullOrEmpty(windowsIdentity.Name))
            {
                return Unauthorized();
            }

            var userName = windowsIdentity.Name;
            var user = await _userManager.FindByNameAsync(userName);

            if (user == null)
            {
                user = new ApplicationUser { UserName = userName, Email = $"{userName}@yourdomain.com" }; // Customize email as needed
                var result = await _userManager.CreateAsync(user);

                if (!result.Succeeded)
                {
                    return BadRequest("Failed to create user.");
                }
            }

            var principal = await CreateClaimsPrincipalAsync(user);

            return SignIn(principal, OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
        }

        private async Task<ClaimsPrincipal> CreateClaimsPrincipalAsync(ApplicationUser user)
        {
            var principal = await _signInManager.CreateUserPrincipalAsync(user);
            principal.SetScopes(new[] { Scopes.OpenId, Scopes.Profile, Scopes.OfflineAccess }); // Add necessary scopes

            var identity = (ClaimsIdentity)principal.Identity;

            // Add custom claims if needed
            if (user.JobTitle != null) identity.SetClaim(CustomClaims.JobTitle, user.JobTitle);
            if (user.FullName != null) identity.SetClaim(CustomClaims.FullName, user.FullName);
            if (user.Configuration != null) identity.SetClaim(CustomClaims.Configuration, user.Configuration);

            principal.SetDestinations(GetDestinations);

            return principal;
        }

        private static IEnumerable<string> GetDestinations(Claim claim)
        {
            switch (claim.Type)
            {
                case Claims.Name:
                case Claims.Email:
                case CustomClaims.JobTitle:
                case CustomClaims.FullName:
                case CustomClaims.Configuration:
                    if (claim.Subject.HasScope(Scopes.Profile))
                        yield return Destinations.IdentityToken;
                    yield break;

                case Claims.Role:
                case CustomClaims.Permission:
                    yield return Destinations.AccessToken;
                    if (claim.Subject.HasScope(Scopes.Roles))
                        yield return Destinations.IdentityToken;
                    yield break;

                case "AspNet.Identity.SecurityStamp":
                    yield break;

                default:
                    yield return Destinations.AccessToken;
                    yield break;
            }
        }
    }
}
