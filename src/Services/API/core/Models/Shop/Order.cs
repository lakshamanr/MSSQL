// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

using API.core.Models;
using API.core.Models.Account;

namespace API.core.Models.Shop
{
    public class Order : BaseEntity
    {
        public decimal Discount { get; set; }
        public string? Comments { get; set; }

        public string? CashierId { get; set; }
        public ApplicationUser? Cashier { get; set; }

        public int CustomerId { get; set; }
        public required Customer Customer { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; } = [];
    }
}
