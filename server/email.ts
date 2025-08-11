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
  message?: string;
}

interface TrialRequestData {
  firstName: string;
  lastName: string;
  email: string;
  firmName: string;
  role: string;
  prospectType: string;
  seenBefore: string;
  timing: string;
  notes?: string;
}

export async function sendNotificationEmail(data: EmailNotificationData): Promise<boolean> {
  try {
    const requestTypeLabels = {
      demo: 'Demo Request',
      sample_report: 'Sample Report Download',
      assessment: 'Assessment Request'
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
      from: 'notifications@exitclarity.io', // Using your domain
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

export async function sendTrialRequestNotification(data: TrialRequestData): Promise<boolean> {
  try {
    const subject = `[Trial Request] ${data.firmName} - ${data.firstName} ${data.lastName}, ${data.role}`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; margin-bottom: 20px;">New Client Trial Request</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #1e40af;">
          <h3 style="margin-top: 0; color: #334155;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Firm:</strong> ${data.firmName}</p>
          <p><strong>Role:</strong> ${data.role}</p>
          
          <h3 style="color: #334155;">Request Details</h3>
          <p><strong>Prospect Type:</strong> ${data.prospectType}</p>
          <p><strong>Seen Before:</strong> ${data.seenBefore === 'yes' ? 'Yes' : 'No'}</p>
          <p><strong>Timing:</strong> ${data.timing}</p>
          
          ${data.notes ? `
            <h3 style="color: #334155;">Additional Notes</h3>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">${data.notes}</p>
          ` : ''}
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
          <p style="margin: 0; color: #166534;">
            <strong>Next Steps:</strong> Review and confirm access for their firm within 1-3 business days.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 14px;">
          <p>This notification was sent automatically from the ExitClarity trial request system.</p>
        </div>
      </div>
    `;

    const msg = {
      to: 'mjoel@exitclarity.io',
      from: 'notifications@exitclarity.io',
      subject: subject,
      html: htmlContent,
    };

    await sgMail.send(msg);
    console.log(`Trial request notification sent for ${data.firmName} - ${data.firstName} ${data.lastName}`);
    return true;
  } catch (error) {
    console.error('SendGrid trial request notification error:', error);
    return false;
  }
}

export async function sendTrialRequestAutoReply(data: TrialRequestData): Promise<boolean> {
  try {
    const subject = `Your ExitClarity Client Trial Request`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; margin-bottom: 20px;">Thank You for Your Trial Request</h2>
        
        <p>Hi ${data.firstName},</p>
        
        <p>Thanks for your request. We'll confirm access for your firm within 1-3 business days.</p>
        
        <p>If others at your firm have already requested access, we'll connect you to that account.</p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #1e40af; margin: 20px 0;">
          <p style="margin: 0;"><strong>In the meantime, you can view a sample report here:</strong></p>
          <p style="margin: 10px 0 0 0;">
            <a href="https://exitclarity.io/sample-report" style="color: #1e40af; text-decoration: none; font-weight: 600;">
              View Sample Report →
            </a>
          </p>
        </div>
        
        <p>Best regards,<br>The ExitClarity Team</p>
        
        <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 14px;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `;

    const msg = {
      to: data.email,
      from: 'notifications@exitclarity.io',
      subject: subject,
      html: htmlContent,
    };

    await sgMail.send(msg);
    console.log(`Auto-reply sent to ${data.email} for trial request`);
    return true;
  } catch (error) {
    console.error('SendGrid auto-reply error:', error);
    return false;
  }
}