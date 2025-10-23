// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
 
  using MimeKit;

  namespace API.core.Services
  {
    public interface IEmailSender
    {
      Task<(bool success, string? errorMsg)> SendEmailAsync(
          string recipientName,
          string recipientEmail,
          string subject,
          string body,
          bool isHtml = true);

      Task<(bool success, string? errorMsg)> SendEmailAsync(
          string senderName,
          string senderEmail,
          string recipientName,
          string recipientEmail,
          string subject,
          string body,
          bool isHtml = true);

      Task<(bool success, string? errorMsg)> SendEmailAsync(
          MailboxAddress sender,
          MailboxAddress[] recipients,
          string subject,
          string body,
          bool isHtml = true);
    }
  } 
