import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";
import { Shield, Lock, Database, KeyRound, Server, Users, AlertTriangle, FileCheck, Globe, Mail, Eye } from "lucide-react";

export default function Security() {
  useMeta({
    title: "ExitClarity | Security",
    description: "ExitClarity's comprehensive security measures protect your sensitive business data with AES-256 encryption, SOC 2 infrastructure, and enterprise-grade safeguards."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Security at ExitClarity</h1>
              <div className="border-l-4 border-primary pl-4 mb-8">
                <p className="text-muted-foreground text-sm mb-0">
                  <strong>Effective Date:</strong> July 10, 2025
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At ExitClarity, security is a foundational part of how we build, operate, and deliver our platform. We understand the sensitivity of the financial and strategic data our users share, and we take that responsibility seriously.
              </p>
            </div>

            <div className="prose prose-slate prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  1. Data Protection Principles
                </h2>
                <p className="mb-6">We follow industry best practices and security frameworks for handling sensitive business and personal data:</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Confidentiality:</strong> Access to your data is restricted to authorized users and team members through access controls and authentication mechanisms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Integrity:</strong> All data is encrypted and monitored to prevent unauthorized tampering or modification.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Availability:</strong> Our platform is designed for high reliability and uptime to ensure uninterrupted service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Privacy by Design:</strong> Security and privacy considerations are integrated into the platform architecture from the ground up.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  2. Secure Data Protection
                </h2>
                <p className="mb-6">Your information is protected by multiple layers of security:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Encryption at Rest:</strong> All stored data is protected with AES-256 encryption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Encryption in Transit:</strong> All data transmission is protected using TLS 1.3 encryption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Database Security:</strong> Encrypted databases include additional access controls and audit logging.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Backup Protection:</strong> Backups are encrypted and stored securely in geographically redundant locations.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Server className="h-6 w-6 text-primary" />
                  3. Infrastructure Security
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Hosting Environment:</strong> ExitClarity is hosted on SOC 2 Type II compliant infrastructure providers (e.g., AWS, GCP) with built-in redundancy, DDoS protection, and fault tolerance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Monitoring:</strong> We utilize cloud-native monitoring tools and alerts to detect unusual activity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Network Security:</strong> Includes traffic filtering, firewall configurations, and internal network segmentation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Vulnerability Scanning:</strong> Periodic internal reviews and vulnerability scans are conducted to identify and remediate potential risks.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <KeyRound className="h-6 w-6 text-primary" />
                  4. Application Security
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Authentication:</strong> User authentication is protected using securely hashed credentials.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Access Controls:</strong> Role-based access control (RBAC) ensures users only access the data necessary for their role.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Session Management:</strong> Secure session handling with automatic timeouts and token-based authentication.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Audit Logging:</strong> System activity is logged and reviewed to detect unauthorized access or anomalies.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  5. Vendor & Data Privacy Controls
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>We work with carefully selected third-party service providers who meet high security and compliance standards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Third-party access is limited to the minimum necessary to perform contracted functions.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-primary" />
                  6. Data Retention & Deletion
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>You may request access, correction, or deletion of your personal data by contacting our team.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Data is retained only as long as necessary to deliver services or fulfill legal obligations.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  7. Incident Response
                </h2>
                <p className="mb-6">ExitClarity maintains an internal incident response process. In the unlikely event of a security incident:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>We act promptly to contain the event and assess the impact.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Affected users will be notified as required by applicable laws.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Post-incident reviews are conducted and any necessary safeguards are implemented.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  8. Compliance & Roadmap
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>ExitClarity is hosted on SOC 2 Type II compliant infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>We comply with applicable privacy laws, including GDPR and CCPA.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>We align with best practices from NIST and OWASP.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>We are actively working toward full SOC 2 Type II certification for our application.</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  9. Responsible Disclosure
                </h2>
                <p className="mb-6">If you believe you have discovered a security vulnerability, we appreciate responsible disclosure. Please contact us:</p>
                
                <div className="border border-muted rounded-lg p-6">
                  <p className="mb-4"><strong>Security Team:</strong> <a href="mailto:security@exitclarity.io" className="text-primary hover:underline">security@exitclarity.io</a></p>
                  <p>We aim to acknowledge valid reports within 24 hours and work toward a timely resolution.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  10. Contact
                </h2>
                <p className="mb-6">For any security-related questions or concerns, please contact:</p>
                
                <div className="border border-muted rounded-lg p-6">
                  <div className="space-y-2">
                    <p><strong>EntrepreneurXL, LLC</strong></p>
                    <p>Naples, FL</p>
                    <p><a href="mailto:info@exitclarity.io" className="text-primary hover:underline">info@exitclarity.io</a></p>
                    <p><a href="https://www.exitclarity.io" className="text-primary hover:underline">https://www.exitclarity.io</a></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}