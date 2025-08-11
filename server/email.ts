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
          <p><strong>Seen Before:</strong> ${data.seenBefore}</p>
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
    const subject = `Welcome to ExitClarity - Next Steps Inside`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <!-- Header with Logo -->
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0;">
          <h1 style="color: #1e40af; font-size: 24px; margin: 0; font-weight: bold;">ExitClarity</h1>
        </div>
        
        <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 22px;">Welcome to ExitClarity!</h2>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">Hi ${data.firstName},</p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;"><strong>Great news - your trial request has been received!</strong></p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">
          We're reviewing your information and will confirm access for <strong>${data.firmName}</strong> within 1-3 business days. 
          If colleagues at your firm have already requested access, we'll make sure you're connected to the same account.
        </p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px;">While you wait, here are two things you can do:</p>
        
        <!-- Action Items -->
        <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0;">
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; color: #334155; font-weight: 600;">📊 See what your clients will experience</p>
            <a href="https://exitclarity.io/sample-report" 
               style="display: inline-block; background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 8px;">
              View Sample Report →
            </a>
          </div>
          
          <div>
            <p style="margin: 0 0 8px 0; color: #334155; font-weight: 600;">📅 Want to move faster?</p>
            <a href="https://calendly.com/exitclarity-info/30min" 
               style="display: inline-block; background-color: #ffffff; color: #1e40af; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; border: 2px solid #1e40af; margin-top: 8px;">
              Schedule a 15-minute demo →
            </a>
          </div>
        </div>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">
          We're excited to help you streamline your deal flow and deliver more value to clients.
        </p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 8px;">Best regards,</p>
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px; font-weight: 600;">The ExitClarity Team</p>
        
        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin-top: 30px;">
          <p style="margin: 0; color: #64748b; font-size: 14px;">
            <strong>P.S.</strong> Have questions? Just reply to this email and we'll get back to you quickly.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <p style="margin: 0;">© 2025 ExitClarity. All rights reserved.</p>
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