import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email notifications will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log("Email notification skipped - SendGrid API key not configured");
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendSampleReportNotification(formData: {
  name: string;
  email: string;
  company: string;
  audienceType: string;
}) {
  const subject = "New Sample Report Download - ExitClarity";
  const text = `
New sample report download request:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Audience Type: ${formData.audienceType}

This lead was generated from the ExitClarity sample report form.
  `;
  
  const html = `
    <h2>New Sample Report Download - ExitClarity</h2>
    <p><strong>A new user has downloaded the sample report!</strong></p>
    
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Name:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Email:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Company:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.company}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Audience Type:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.audienceType}</td>
      </tr>
    </table>
    
    <p><em>This lead was generated from the ExitClarity sample report form.</em></p>
  `;

  return await sendEmail({
    to: "info@exitclarity.io",
    from: "noreply@exitclarity.io", // You'll need to verify this domain in SendGrid
    subject,
    text,
    html
  });
}

export async function sendContactFormNotification(formData: {
  name: string;
  email: string;
  company?: string;
  message: string;
  requestType: string;
}) {
  const subject = "New Contact Form Submission - ExitClarity";
  const text = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Request Type: ${formData.requestType}
Message: ${formData.message}

This lead was generated from the ExitClarity contact form.
  `;
  
  const html = `
    <h2>New Contact Form Submission - ExitClarity</h2>
    <p><strong>A new contact form has been submitted!</strong></p>
    
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Name:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Email:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Company:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.company || 'Not provided'}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Request Type:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.requestType}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f9f9f9;"><strong>Message:</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">${formData.message}</td>
      </tr>
    </table>
    
    <p><em>This lead was generated from the ExitClarity contact form.</em></p>
  `;

  return await sendEmail({
    to: "info@exitclarity.io",
    from: "noreply@exitclarity.io", // You'll need to verify this domain in SendGrid
    subject,
    text,
    html
  });
}