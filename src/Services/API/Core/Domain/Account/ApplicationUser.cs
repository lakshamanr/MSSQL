// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

using API.Core.Domain;
using API.Core.Domain.Shop;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace API.Core.Domain.Account
{
    public class ApplicationUser : IdentityUser, IAuditableEntity
    {
        public virtual string? FriendlyName
        {
            get
            {
                var friendlyName = string.IsNullOrWhiteSpace(FullName) ? UserName : FullName;

                if (!string.IsNullOrWhiteSpace(JobTitle))
                    friendlyName = $"{JobTitle} {friendlyName}";

                return friendlyName;
            }
        }

        public string? JobTitle { get; set; }
        public string? FullName { get; set; }
        public string? Configuration { get; set; }
        public bool IsEnabled { get; set; }
        public bool IsLockedOut => LockoutEnabled && LockoutEnd >= DateTimeOffset.UtcNow;

        // User Profile Properties
        [MaxLength(100)]
        public string? FirstName { get; set; }

        [MaxLength(100)]
        public string? LastName { get; set; }

        [MaxLength(100)]
        public string? City { get; set; }

        [MaxLength(100)]
        public string? State { get; set; }

        [MaxLength(100)]
        public string? Country { get; set; }

        // Subscription and Credits Properties
        [MaxLength(50)]
        public string SubscriptionTier { get; set; } = "Free"; // Free, Premium

        public int AICreditsRemaining { get; set; } = 5;

        public DateTime? LastLoginAt { get; set; }

        public bool IsActive { get; set; } = true;

        // Audit Properties
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        /// <summary>
        /// Navigation property for the roles this user belongs to.
        /// </summary>
        public ICollection<IdentityUserRole<string>> Roles { get; } = [];

        /// <summary>
        /// Navigation property for the claims this user possesses.
        /// </summary>
        public ICollection<IdentityUserClaim<string>> Claims { get; } = [];

        /// <summary>
        /// Demo Navigation property for orders this user has processed
        /// </summary>
        public ICollection<Order> Orders { get; } = [];

        // TODO: Add these navigation properties when the corresponding models are created:
        // public ICollection<Resume> Resumes { get; } = [];
        // public ICollection<JobApplication> JobApplications { get; } = [];
        // public ICollection<Referral> ReferralsMade { get; } = [];
        // public ICollection<Referral> ReferralsReceived { get; } = [];
        // public ProfileVerification? ProfileVerification { get; set; }
        // public CandidateRating? CandidateRating { get; set; }
        // public ICollection<Reference> References { get; } = [];
        // public ICollection<Certification> Certifications { get; } = [];
        // public ICollection<Achievement> Achievements { get; } = [];
    }
}
