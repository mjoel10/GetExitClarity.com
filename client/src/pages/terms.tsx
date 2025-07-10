import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function Terms() {
  useMeta({
    title: "ExitClarity | Terms of Service",
    description: "Terms and conditions for using ExitClarity's exit readiness assessments and strategic advisory services. Clear guidelines for business owners and M&A professionals."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-800 text-sm mb-0">
                <strong>Effective Date:</strong> July 10, 2025
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Welcome to ExitClarity, a product and service operated by EntrepreneurXL, LLC ("EntrepreneurXL," "ExitClarity," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, platform, assessment tools, and strategic reporting services (collectively, the "Service"). By using the Service, you agree to comply with and be bound by these Terms.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Description of Service</h2>
              <p>
                ExitClarity is a strategic exit readiness platform that provides business owners and M&A professionals with structured assessments, personalized readiness reports, and supporting advisory tools to evaluate and improve their preparedness for a potential sale or exit. We offer:
              </p>
              <ul className="space-y-2">
                <li>Exit readiness assessments and scoring frameworks</li>
                <li>Strategic advisory reports and dashboards</li>
                <li>Data collection and analysis tools</li>
                <li>Co-branded and white-labeled reporting options for enterprise clients</li>
              </ul>
              <p>
                All content and reports generated through ExitClarity are for informational and strategic planning purposes only.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. User Eligibility</h2>
              <p>
                You must be at least 18 years old and capable of entering into a legally binding agreement to use our Service. By using the Service, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Security</h2>
              <p>
                If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Confidentiality & Professional Disclaimer</h2>
              <p>
                This report was prepared exclusively for the Subject Company by ExitClarity and contains confidential, proprietary information intended for authorized recipients only. Unauthorized distribution or reproduction is strictly prohibited.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Disclaimers:</h3>
                <ul className="text-amber-700 space-y-1">
                  <li>All analysis and recommendations are based on information provided by the Subject Company and other sources believed to be reliable</li>
                  <li>ExitClarity makes no guarantees as to the accuracy or completeness of the information</li>
                  <li>This report is for strategic planning purposes only and does not constitute legal, financial, tax, or investment advice</li>
                  <li>You should consult with qualified professionals (attorneys, accountants, financial advisors) before making any business decisions</li>
                  <li>ExitClarity is not a licensed financial advisor, broker, or investment advisor</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <ul className="space-y-2">
                <li>Fees for services are due as specified in your service agreement or at the time of purchase</li>
                <li>All fees are non-refundable unless otherwise specified in writing</li>
                <li>We reserve the right to modify our pricing with 30 days' notice to existing clients</li>
                <li>Failure to pay may result in suspension or termination of service access</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Use of the Service</h2>
              <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not:</p>
              <ul className="space-y-2">
                <li>Resell, copy, or redistribute any portion of the Service or its content without our express written consent</li>
                <li>Use the Service to distribute false, misleading, or harmful information</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Attempt to gain unauthorized access to other users' accounts or data</li>
                <li>Use the Service for any unlawful or fraudulent purpose</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              <p>
                All content, including but not limited to the platform design, text, graphics, logos, reports, methodologies, and software, is the intellectual property of EntrepreneurXL, LLC or its licensors. You may not reproduce or use our intellectual property without written permission.
              </p>
              <p>
                <strong>Client Data Rights:</strong> You retain ownership of any business data you provide to us. We may use aggregated, anonymized data for improving our services and industry benchmarking.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Privacy</h2>
              <p>
                Your use of the Service is also governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Accuracy and Client Responsibilities</h2>
              <p>You are responsible for:</p>
              <ul className="space-y-2">
                <li>The accuracy and completeness of any data or information you provide when using the Service</li>
                <li>Ensuring you have the right to share any business information with us</li>
                <li>Understanding that the quality of your results depends on the quality of the input data provided</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, ExitClarity and its affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from or related to your use of the Service, including but not limited to loss of profits, business interruption, or loss of data, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law and Disputes</h2>
              <p>
                These Terms shall be governed by the laws of the State of Florida, without regard to conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Naples, Florida.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <p className="mb-2"><strong>EntrepreneurXL, LLC</strong></p>
                <p className="mb-2">Naples, FL</p>
                <p className="mb-2"><a href="mailto:info@exitclarity.io" className="text-primary hover:underline">info@exitclarity.io</a></p>
                <p className="mb-0"><a href="https://www.exitclarity.io" className="text-primary hover:underline">https://www.exitclarity.io</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}