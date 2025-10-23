// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

namespace API.Services.Email
{
    public static class EmailTemplates
    {
        private static IWebHostEnvironment? _hostingEnvironment;
        private static string? testEmailTemplate;
        private static string? plainTextTestEmailTemplate;
        private static string? emailVerificationTemplate;
        private static string? passwordResetTemplate;

        public static void Initialize(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public static string GetTestEmail(string recipientName, DateTime testDate)
        {
            testEmailTemplate ??= ReadPhysicalFile("Services/Email/TestEmail.template");

            var emailMessage = testEmailTemplate
                .Replace("{user}", recipientName)
                .Replace("{testDate}", testDate.ToString());

            return emailMessage;
        }

        public static string GetPlainTextTestEmail(DateTime date)
        {
            plainTextTestEmailTemplate ??= ReadPhysicalFile("Services/Email/PlainTextTestEmail.template");

            var emailMessage = plainTextTestEmailTemplate
                .Replace("{date}", date.ToString());

            return emailMessage;
        }

        public static string GetEmailVerificationEmail(string userName, string verificationUrl)
        {
            emailVerificationTemplate ??= ReadPhysicalFile("Services/Email/EmailVerificationTemplate.template");

            var emailMessage = emailVerificationTemplate
                .Replace("{userName}", userName)
                .Replace("{verificationUrl}", verificationUrl)
                .Replace("{year}", DateTime.UtcNow.Year.ToString());

            return emailMessage;
        }

        public static string GetPasswordResetEmail(string userName, string resetUrl)
        {
            passwordResetTemplate ??= ReadPhysicalFile("Services/Email/PasswordResetTemplate.template");

            var emailMessage = passwordResetTemplate
                .Replace("{userName}", userName)
                .Replace("{resetUrl}", resetUrl)
                .Replace("{year}", DateTime.UtcNow.Year.ToString());

            return emailMessage;
        }

        private static string ReadPhysicalFile(string path)
        {
            if (_hostingEnvironment == null)
                throw new InvalidOperationException($"{nameof(EmailTemplates)} is not initialized");

            var fileInfo = _hostingEnvironment.ContentRootFileProvider.GetFileInfo(path);

            if (!fileInfo.Exists)
                throw new FileNotFoundException($"Template file located at \"{path}\" was not found");

            using var fs = fileInfo.CreateReadStream();
            using var sr = new StreamReader(fs);
            return sr.ReadToEnd();
        }
    }
}
