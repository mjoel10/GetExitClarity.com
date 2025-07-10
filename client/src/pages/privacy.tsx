import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function Privacy() {
  useMeta({
    title: "ExitClarity | Privacy Policy",
    description: "Learn how ExitClarity protects your business data and personal information. Transparent privacy practices for exit readiness assessments and strategic reports."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="border-l-4 border-primary pl-4 mb-8">
              <p className="text-muted-foreground text-sm mb-0">
                <strong>Effective Date:</strong> July 10, 2025
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              This Privacy Policy describes how EntrepreneurXL, LLC. ("EntrepreneurXL," "ExitClarity," "we," "us," or "our") collects, uses, and protects your information when you use our website or services.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p>
                ExitClarity operates https://www.exitclarity.io (the "Service"). This Privacy Policy outlines how we collect and handle personal information from users of the Service. By using the Service, you agree to the collection and use of data in accordance with this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Definitions</h2>
              <ul className="space-y-2">
                <li><strong>Service</strong> – The website exitclarity.io operated by EntrepreneurXL, LLC.</li>
                <li><strong>Personal Data</strong> – Information that identifies an individual, such as name, email, or company name.</li>
                <li><strong>Usage Data</strong> – Data collected automatically (e.g., IP address, browser type, page visits).</li>
                <li><strong>Cookies</strong> – Small files stored on your device used to personalize and analyze user behavior.</li>
                <li><strong>User</strong> – Any individual using our Service.</li>
                <li><strong>Service Providers</strong> – Third parties that process data on our behalf (e.g., hosting or analytics platforms).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="space-y-2">
                <li>Personal information that you voluntarily provide (e.g., name, email, job title, company).</li>
                <li>Business information provided during assessments and consultations.</li>
                <li>Technical and usage data from your browser, such as IP address, pages visited, and time on site.</li>
                <li>Cookie and tracking data for analytics and performance improvement.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Data</h2>
              <p>We use your data to:</p>
              <ul className="space-y-2">
                <li>Provide and maintain the Service</li>
                <li>Conduct business assessments and prepare strategic reports</li>
                <li>Respond to support requests or applications</li>
                <li>Analyze usage to improve the experience</li>
                <li>Communicate important updates or changes</li>
                <li>Detect and prevent technical or security issues</li>
                <li>Send limited promotional or transactional emails (only if opted in)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Business Confidentiality</h2>
              <p>
                Business information provided during assessments is kept strictly confidential. Reports and valuations are for client use only and are not shared with third parties without explicit consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sharing of Data</h2>
              <p>We do not sell your data. We may share limited information with:</p>
              <ul className="space-y-2">
                <li>Third-party vendors who help operate our service (subject to confidentiality agreements)</li>
                <li>Legal authorities if required to comply with the law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p>
                We retain personal data for 3 years after service completion or until you request deletion. Business assessment data is retained for 5 years to support ongoing client relationships and potential follow-up services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Analytics</h2>
              <p>
                We use cookies and third-party analytics services (such as Google Analytics) to improve our website performance. You can disable cookies in your browser settings, though this may affect site functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
              <p>
                We use reasonable technical and organizational safeguards to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p>You may contact us to:</p>
              <ul className="space-y-2">
                <li>Access, correct, or delete your data</li>
                <li>Opt out of email communications</li>
                <li>Request a copy of your business assessment data</li>
                <li>California residents have additional rights under the CCPA, including the right to know what personal information is collected and the right to request deletion</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Users</h2>
              <p>
                If you are located outside the United States, please note that your information may be transferred to and processed in the United States, where our servers are located.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
              <p>
                Our site may link to third-party websites. We are not responsible for their privacy policies or practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy. Changes will be posted on this page with an updated effective date. Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p>
                Questions about this Privacy Policy? Reach us at <a href="mailto:info@exitclarity.io" className="text-primary hover:underline">info@exitclarity.io</a> or EntrepreneurXL, LLC, Naples, FL.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}