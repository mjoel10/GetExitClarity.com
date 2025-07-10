import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function Cookies() {
  useMeta({
    title: "ExitClarity | Cookie Policy",
    description: "Understand how ExitClarity uses cookies to improve your experience. Manage your cookie preferences and learn about our tracking practices."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-800 text-sm mb-0">
                <strong>Effective Date:</strong> July 10, 2025
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              This Cookie Policy explains how ExitClarity, a service of EntrepreneurXL, LLC ("we," "us," or "our"), uses cookies and similar technologies to recognize you when you visit our website at https://www.exitclarity.io ("Site"). It explains what these technologies are, why we use them, and your rights to control our use of them.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently, as well as to provide reporting information and enhance user experiences.
              </p>
              <p>We also use similar technologies such as:</p>
              <ul className="space-y-2">
                <li><strong>Tracking pixels</strong> - Small images that help us understand user behavior</li>
                <li><strong>Local storage</strong> - Data stored in your browser for functionality</li>
                <li><strong>Session identifiers</strong> - Temporary tokens to maintain your session</li>
                <li><strong>Web beacons</strong> - Small graphics that track page views and email opens</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Why We Use Cookies</h2>
              <p>We use both first-party and third-party cookies for the following purposes:</p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Essential Cookies (Always Active)</h3>
                  <p className="text-green-700 mb-2">These cookies are necessary for the Site to function and cannot be switched off. They are typically set in response to actions you take such as:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>Logging in to your account</li>
                    <li>Submitting assessment forms</li>
                    <li>Maintaining your session security</li>
                    <li>Loading essential site features</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Performance & Analytics Cookies</h3>
                  <p className="text-blue-700 mb-2">These cookies collect information about how users interact with the Site, such as:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>Pages visited and time spent on pages</li>
                    <li>Click patterns and user flow</li>
                    <li>Error messages and technical issues</li>
                    <li>Device and browser information</li>
                  </ul>
                  <p className="text-blue-700 mt-2">This data helps us improve the functionality and performance of our platform.</p>
                  <p className="text-blue-700 text-sm mt-2"><em>Example tools: Google Analytics, HubSpot Analytics</em></p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Functionality Cookies</h3>
                  <p className="text-purple-700 mb-2">These cookies allow the Site to remember your choices and preferences to provide a more personalized experience:</p>
                  <ul className="text-purple-700 space-y-1">
                    <li>Saved form fields and preferences</li>
                    <li>Language and region settings</li>
                    <li>Assessment progress and saved data</li>
                    <li>Custom dashboard configurations</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Targeting & Marketing Cookies (Opt-in Required)</h3>
                  <p className="text-orange-700 mb-2">Used only with your explicit consent to:</p>
                  <ul className="text-orange-700 space-y-1">
                    <li>Track browsing habits across sessions</li>
                    <li>Deliver relevant content recommendations</li>
                    <li>Enable retargeting ads via platforms like LinkedIn or Google Ads</li>
                    <li>Measure marketing campaign effectiveness</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p>
                Some cookies on our Site are placed by third-party services we use for analytics, hosting, customer support, and marketing. These providers may use their own cookies subject to their privacy policies.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Current Third-Party Services:</h3>
                <ul className="text-slate-700 space-y-1">
                  <li><strong>Google Analytics</strong> - Website analytics and user behavior tracking</li>
                  <li><strong>HubSpot</strong> - Customer relationship management and marketing automation</li>
                  <li><strong>LinkedIn Insights Tag</strong> - Professional audience analytics and advertising</li>
                  <li><strong>Cloudflare</strong> - Security, performance, and content delivery</li>
                  <li><strong>Hosting and infrastructure providers</strong> - Essential site operation</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong>Important Note:</strong> We do not control third-party cookies. Please review their respective privacy policies for more information about their data practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookie Management and Your Choices</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings:</h3>
                  <p>You can control or disable cookies through your browser settings. Most browsers allow you to:</p>
                  <ul className="space-y-1">
                    <li>View which cookies are stored</li>
                    <li>Delete existing cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Set preferences for accepting cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Direct Opt-Outs:</h3>
                  <p>You can also opt out of certain tracking tools directly:</p>
                  <ul className="space-y-1">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-Out</a></li>
                    <li><a href="https://www.linkedin.com/psettings/advertising" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Ads Settings</a></li>
                    <li><a href="https://legal.hubspot.com/cookie-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">HubSpot Cookie Settings</a></li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <p className="text-amber-800">
                  <strong>Important:</strong> Disabling essential cookies may affect certain features of the Site, including login functionality, form submissions, saved preferences, and security features.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. International Users</h2>
              <p>
                If you are located in the European Union, United Kingdom, or other regions with specific cookie regulations, you have additional rights regarding cookie consent and data processing. We comply with applicable cookie laws including GDPR and ePrivacy Directive requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in technology, our practices, or applicable regulations. When we make changes, we will:</p>
              <ul className="space-y-2">
                <li>Update the "Effective Date" at the top of this page</li>
                <li>Notify you of material changes through our website or email</li>
                <li>Request renewed consent where required by law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p>If you have any questions about this Cookie Policy, how we use cookies, or would like to exercise your rights regarding cookies, please contact us at:</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <p className="mb-2"><strong>EntrepreneurXL, LLC</strong></p>
                <p className="mb-2">Naples, FL</p>
                <p className="mb-2"><a href="mailto:info@exitclarity.io" className="text-primary hover:underline">info@exitclarity.io</a></p>
                <p className="mb-0"><a href="https://www.exitclarity.io" className="text-primary hover:underline">https://www.exitclarity.io</a></p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Related Policies</h2>
              <p>This Cookie Policy should be read in conjunction with our:</p>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="text-primary hover:underline">Terms of Service</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}