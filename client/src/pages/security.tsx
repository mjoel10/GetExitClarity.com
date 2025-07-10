import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";
import { Shield, Lock, Eye, Users, Server, AlertTriangle } from "lucide-react";

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
                  Data Protection Principles
                </h2>
                <p>We follow industry best practices and established security frameworks for handling sensitive business and personal data:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Confidentiality</h3>
                    <p className="text-muted-foreground text-sm">Only authorized users and team members can access your data through strict access controls and authentication mechanisms</p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Integrity</h3>
                    <p className="text-muted-foreground text-sm">All data is encrypted and continuously monitored to prevent unauthorized tampering or modification</p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Availability</h3>
                    <p className="text-muted-foreground text-sm">Our platform is built for high reliability and uptime to ensure uninterrupted service when you need it</p>
                  </div>
                  <div className="border border-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Privacy by Design</h3>
                    <p className="text-muted-foreground text-sm">Security and privacy considerations are built into every aspect of our platform from the ground up</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  Data Encryption & Protection
                </h2>
                <p>Your information is protected with multiple layers of security:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Encryption at Rest:</strong> All stored data is protected with <strong>AES-256 encryption</strong>, the gold standard for data protection
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Encryption in Transit:</strong> All data transmission uses <strong>TLS 1.3 encryption</strong> to protect information as it moves between your device and our servers
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Database Security:</strong> Encrypted databases with additional access controls and audit logging
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Backup Protection:</strong> All backups are encrypted and stored in geographically separate, secure locations
                    </div>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Server className="h-6 w-6 text-primary" />
                  Infrastructure Security
                </h2>
                
                <div className="space-y-6">
                  <div className="border border-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Hosting Environment</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• ExitClarity is hosted on <strong>SOC 2 Type II compliant</strong> cloud infrastructure providers with enterprise-grade security</li>
                      <li>• Built-in redundancy and automatic failover capabilities</li>
                      <li>• Advanced DDoS mitigation and network-level protection</li>
                      <li>• 24/7 infrastructure monitoring and incident response</li>
                    </ul>
                  </div>

                  <div className="border border-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Network Security</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Automated security tools and real-time monitoring to detect unusual activity</li>
                      <li>• Intrusion detection and prevention systems</li>
                      <li>• Network segmentation to isolate sensitive systems</li>
                      <li>• Regular penetration testing and vulnerability assessments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  Application Security
                </h2>
                
                <div className="space-y-6">
                  <div className="border border-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Authentication & Access</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Secure user authentication with industry-standard password hashing (bcrypt)</li>
                      <li>• <strong>Two-factor authentication (2FA)</strong> available for all user accounts</li>
                      <li>• Session management with automatic timeout and secure session tokens</li>
                      <li>• Account lockout protection against brute force attacks</li>
                    </ul>
                  </div>

                  <div className="border border-muted rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Access Controls</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• <strong>Role-based access control (RBAC)</strong> to ensure users only access information relevant to their role</li>
                      <li>• Principle of least privilege - minimum necessary access granted</li>
                      <li>• Regular access reviews and automatic deprovisioning</li>
                      <li>• Audit trails for all data access and modifications</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Employee Security & Training
                </h2>
                <ul className="space-y-3">
                  <li>• Background checks for all employees with access to customer data</li>
                  <li>• Security awareness training for all team members</li>
                  <li>• Regular security refresher training and phishing simulation tests</li>
                  <li>• Immediate access revocation upon employee departure</li>
                  <li>• Separation of duties for critical operations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Incident Response & Business Continuity
                </h2>
                
                <div className="border border-muted rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Incident Response Plan</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Formal incident response procedures with defined roles and responsibilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 security monitoring and rapid response capabilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular incident response drills and plan updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Forensic investigation capabilities for security events</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-muted rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Breach Notification</h3>
                  <p className="text-muted-foreground mb-4">In the unlikely event of a data breach, we will:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contain the incident immediately</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conduct thorough investigation and impact assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Notify affected users within 72 hours or as required by law</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provide clear information about the incident and remediation steps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implement additional safeguards to prevent recurrence</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Compliance & Certifications</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-muted rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Current Compliance</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>SOC 2 Type II compliant infrastructure</strong> with enterprise-grade security controls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>GDPR and CCPA</strong> privacy regulation compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry best practices alignment with <strong>NIST Cybersecurity Framework</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regular third-party security assessments and audits</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-muted rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Compliance Roadmap</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Actively working toward <strong>SOC 2 Type II certification</strong> for ExitClarity specifically</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Ongoing evaluation of additional compliance frameworks as we scale</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regular compliance gap assessments and remediation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Responsible Disclosure & Security Research</h2>
                <p>We encourage and appreciate responsible security research. If you believe you've discovered a vulnerability or security concern:</p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Security Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Primary:</strong> <a href="mailto:security@exitclarity.io" className="text-primary hover:underline">security@exitclarity.io</a></li>
                    <li><strong>Response Time:</strong> We acknowledge reports within 24 hours</li>
                    <li><strong>Investigation:</strong> Thorough investigation with regular updates</li>
                    <li><strong>Recognition:</strong> Public acknowledgment for valid findings (with your permission)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
                <p>For any security-related questions, concerns, or to report security issues:</p>
                
                <div className="border border-muted rounded-lg p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Security Team</h3>
                      <p><a href="mailto:security@exitclarity.io" className="text-primary hover:underline">security@exitclarity.io</a></p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">General Inquiries</h3>
                      <p>EntrepreneurXL, LLC</p>
                      <p>Naples, FL</p>
                      <p><a href="mailto:info@exitclarity.io" className="text-primary hover:underline">info@exitclarity.io</a></p>
                    </div>
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