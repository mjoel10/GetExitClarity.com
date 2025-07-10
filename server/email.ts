import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailNotificationData {
  name: string;
  email: string;
  company: string;
  requestType: 'demo' | 'sample_report' | 'assessment';
  audienceType?: 'ma-firm' | 'business-owner';
  message?: string;
}

export async function sendNotificationEmail(data: EmailNotificationData): Promise<boolean> {
  try {
    const requestTypeLabels = {
      demo: 'Demo Request',
      sample_report: 'Sample Report Download',
      assessment: 'Assessment Request'
    };

    const audienceTypeLabels = {
      'ma-firm': 'M&A Firm Professional',
      'business-owner': 'Business Owner'
    };

    const subject = `New ${requestTypeLabels[data.requestType]} - ${data.name}`;
    
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; margin-bottom: 20px;">New ${requestTypeLabels[data.requestType]}</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #1e40af;">
          <h3 style="margin-top: 0; color: #334155;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          ${data.audienceType ? `<p><strong>Audience Type:</strong> ${audienceTypeLabels[data.audienceType]}</p>` : ''}
          ${data.message ? `
            <h3 style="color: #334155;">Message</h3>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">${data.message}</p>
          ` : ''}
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
          <p style="margin: 0; color: #166534;">
            <strong>Next Steps:</strong> Please follow up with this lead within 24 hours for optimal conversion.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 14px;">
          <p>This notification was sent automatically from the ExitClarity website.</p>
        </div>
      </div>
    `;

    const msg = {
      to: 'info@exitclarity.io',
      from: 'info@exitclarity.io', // This should be verified in SendGrid
      subject: subject,
      html: htmlContent,
    };

    await sgMail.send(msg);
    console.log(`Email notification sent for ${data.requestType} request from ${data.name}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}