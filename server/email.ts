import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_ENABLED = !!SENDGRID_API_KEY;

if (SENDGRID_ENABLED && SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  console.log('SendGrid email service initialized');
} else {
  console.log('SendGrid API key not found - email notifications disabled');
}

interface EmailNotificationData {
  name: string;
  email: string;
  company: string;
  requestType: 'demo' | 'sample_report' | 'assessment' | 'waitlist';
  message?: string;
  additionalData?: any;
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
  if (!SENDGRID_ENABLED) {
    console.log('SendGrid disabled - notification email not sent:', data.requestType, data.name);
    return false;
  }
  
  try {
    const requestTypeLabels = {
      demo: 'Demo Request',
      sample_report: 'Sample Report Download',
      assessment: 'Assessment Request',
      waitlist: 'Business Owner Waitlist Signup'
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
          
          ${data.requestType === 'waitlist' && data.additionalData ? `
            <h3 style="color: #334155;">Business Details</h3>
            <p><strong>Industry:</strong> ${data.additionalData.industry}</p>
            <p><strong>Annual Revenue:</strong> ${data.additionalData.annualRevenue}</p>
            <p><strong>EBITDA Range:</strong> ${data.additionalData.ebitda}</p>
            <p><strong>Exit Timeline:</strong> ${data.additionalData.exitTimeline}</p>
            ${data.additionalData.biggestConcern ? `
              <h3 style="color: #334155;">Biggest Concern</h3>
              <p style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">${data.additionalData.biggestConcern}</p>
            ` : ''}
          ` : ''}
          
          ${data.message ? `
            <h3 style="color: #334155;">Message</h3>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">${data.message}</p>
          ` : ''}
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
          <p style="margin: 0; color: #166534;">
            <strong>Next Steps:</strong> ${data.requestType === 'waitlist' ? 'Business owner added to early access waitlist. Follow up when platform is ready.' : 'Please follow up with this lead within 24 hours for optimal conversion.'}
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 14px;">
          <p>This notification was sent automatically from the ExitClarity website.</p>
        </div>
      </div>
    `;

    const msg = {
      to: 'mjoel@exitclarity.io',
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
  if (!SENDGRID_ENABLED) {
    console.log('SendGrid disabled - trial request notification not sent:', data.firmName);
    return false;
  }
  
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

export async function sendSampleReportAutoReply(data: { name: string; email: string }): Promise<boolean> {
  if (!SENDGRID_ENABLED) {
    console.log('SendGrid disabled - sample report auto-reply not sent:', data.email);
    return false;
  }
  
  try {
    const subject = `Your ExitClarity Sample Report + Next Steps`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <!-- Header with Logo -->
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0;">
          <h1 style="color: #1e40af; font-size: 24px; margin: 0; font-weight: bold;">ExitClarity</h1>
        </div>
        
        <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 22px;">Your Sample Report + Next Steps</h2>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">Hi ${data.name},</p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;"><strong>Thanks for downloading our sample exit readiness report!</strong></p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">
          The report should have opened in your browser. If you had any issues accessing it, you can download it again here:
        </p>
        
        <div style="text-align: center; margin: 24px 0;">
          <a href="https://exitclarity.io/sample-report" 
             style="display: inline-block; background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
            Download Sample Report
          </a>
        </div>
        
        <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0;">
          <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 16px; font-size: 18px;">What you'll find inside:</h3>
          <ul style="color: #334155; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">GO/FIX/WAIT assessment framework</li>
            <li style="margin-bottom: 8px;">11 critical readiness factors we evaluate</li>
            <li style="margin-bottom: 8px;">Real-world scoring examples</li>
            <li style="margin-bottom: 8px;">Strategic recommendations for timing and preparation</li>
          </ul>
        </div>
        
        <h3 style="color: #1e40af; margin-bottom: 16px; font-size: 18px;">Ready to see how your clients score?</h3>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px;">
          ExitClarity helps M&A advisors assess and track prospect readiness years before they're ready to sell.
        </p>
        
        <!-- Action CTAs -->
        <div style="margin: 24px 0;">
          <div style="margin-bottom: 16px;">
            <a href="https://exitclarity.io/trial-request" 
               style="display: inline-block; background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 12px;">
              Request a Client Trial →
            </a>
          </div>
          
          <div>
            <a href="https://calendly.com/exitclarity-info/30min" 
               style="display: inline-block; background-color: #ffffff; color: #1e40af; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; border: 2px solid #1e40af;">
              Schedule a 15-Min Demo →
            </a>
          </div>
        </div>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px;">
          We'll be in touch soon to see how we can help streamline your deal flow.
        </p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 8px;">Best regards,</p>
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px; font-weight: 600;">The ExitClarity Team</p>
        
        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin-top: 30px;">
          <p style="margin: 0; color: #64748b; font-size: 14px;">
            <strong>P.S.</strong> Have questions about the report? Simply reply to this email.
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
    console.log(`Sample report auto-reply sent to ${data.email}`);
    return true;
  } catch (error) {
    console.error('SendGrid sample report auto-reply error:', error);
    return false;
  }
}

export async function sendTrialRequestAutoReply(data: TrialRequestData): Promise<boolean> {
  if (!SENDGRID_ENABLED) {
    console.log('SendGrid disabled - trial request auto-reply not sent:', data.email);
    return false;
  }
  
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

interface WaitlistConfirmationData {
  name: string;
  email: string;
  company: string;
}

export async function sendWaitlistConfirmation(data: WaitlistConfirmationData): Promise<boolean> {
  if (!SENDGRID_ENABLED) {
    console.log('SendGrid disabled - waitlist confirmation not sent:', data.email);
    return false;
  }
  
  try {
    const subject = `Welcome to ExitClarity Early Access - We'll Be In Touch Soon`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <!-- Header with Logo -->
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0;">
          <h1 style="color: #1e40af; font-size: 24px; margin: 0; font-weight: bold;">ExitClarity</h1>
          <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">Professional Exit Analysis Platform</p>
        </div>
        
        <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 22px;">Welcome to Early Access!</h2>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">Hi ${data.name},</p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">
          <strong>Thank you for joining the ExitClarity waitlist!</strong> You're now positioned to be among the first business owners to access our professional-grade exit readiness platform.
        </p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px;">
          We've received your information for <strong>${data.company}</strong> and added you to our early access queue. Here's what happens next:
        </p>
        
        <!-- Next Steps -->
        <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #1e40af;">
          <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 16px; font-size: 18px;">What to Expect:</h3>
          <ul style="color: #334155; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 12px;"><strong>Platform Development:</strong> We're currently building the business owner version of our professional exit analysis platform</li>
            <li style="margin-bottom: 12px;"><strong>Early Access Invitation:</strong> You'll receive priority access when we launch the beta program</li>
            <li style="margin-bottom: 12px;"><strong>Exclusive Resources:</strong> We'll share valuable exit planning insights and resources while you wait</li>
            <li style="margin-bottom: 12px;"><strong>Personal Consultation:</strong> Direct access to discuss your specific exit planning needs</li>
          </ul>
        </div>
        
        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 12px; margin: 24px 0;">
          <h3 style="color: #166534; margin-top: 0; margin-bottom: 12px; font-size: 16px;">✨ You're in great company!</h3>
          <p style="color: #166534; line-height: 1.6; margin: 0;">
            Over 200 business owners have already joined our early access program. You'll be notified as soon as spots become available.
          </p>
        </div>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 16px;">
          In the meantime, if you have any questions about exit planning or want to discuss your specific situation, 
          feel free to reach out by replying to this email.
        </p>
        
        <p style="color: #334155; line-height: 1.6; margin-bottom: 8px;">Best regards,</p>
        <p style="color: #334155; line-height: 1.6; margin-bottom: 24px; font-weight: 600;">The ExitClarity Team</p>
        
        <!-- Contact Information -->
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 30px;">
          <h4 style="color: #334155; margin-top: 0; margin-bottom: 12px;">Contact Information:</h4>
          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">
            <strong>Email:</strong> support@exitclarity.io
          </p>
          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">
            <strong>Website:</strong> exitclarity.io
          </p>
          <p style="margin: 0; color: #64748b; font-size: 14px;">
            <strong>Response Time:</strong> We typically respond within 24 hours
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <p style="margin: 0;">© 2025 ExitClarity. All rights reserved.</p>
          <p style="margin: 8px 0 0 0;">Professional M&A analysis coming soon for business owners</p>
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
    console.log(`Waitlist confirmation sent to ${data.email}`);
    return true;
  } catch (error) {
    console.error('SendGrid waitlist confirmation error:', error);
    return false;
  }
}