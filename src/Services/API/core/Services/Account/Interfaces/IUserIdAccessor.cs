// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

namespace API.core.Services.Account.Interfaces
{
    public interface IUserIdAccessor
    {
        string? GetCurrentUserId();
    }
}
