import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, Shield } from "lucide-react";

export default function TrialRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Trial request submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>ExitClarity | Request Client Trial</title>
        <meta name="description" content="Request a trial of ExitClarity's exit readiness assessment platform. Perfect for M&A professionals looking to streamline client preparation." />
        <meta property="og:title" content="ExitClarity | Request Client Trial" />
        <meta property="og:description" content="Request a trial of ExitClarity's exit readiness assessment platform. Perfect for M&A professionals looking to streamline client preparation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Request Your Client Trial
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-2">
                  Experience how ExitClarity transforms M&A prospect preparation with your actual clients
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Form */}
                <Card className="shadow-lg order-2 lg:order-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl sm:text-2xl">Get Started Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="role">Role *</Label>
                        <Select onValueChange={(value) => handleInputChange("role", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="investment-banker">Investment Banker</SelectItem>
                            <SelectItem value="business-broker">Business Broker</SelectItem>
                            <SelectItem value="ma-advisor">M&A Advisor</SelectItem>
                            <SelectItem value="financial-advisor">Financial Advisor</SelectItem>
                            <SelectItem value="consultant">Management Consultant</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Tell us about your M&A practice</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="How many deals do you typically work on per year? What's your average deal size? Any specific challenges you're facing with prospect preparation?"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Request Trial Access
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      What You'll Get
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">5 Free Client Assessments</h3>
                          <p className="text-gray-600 text-sm">Test the platform with your actual prospects</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Complete Report Generation</h3>
                          <p className="text-gray-600 text-sm">20-30 page comprehensive assessments</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Personal Onboarding</h3>
                          <p className="text-gray-600 text-sm">30-minute setup call with our team</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Full Platform Access</h3>
                          <p className="text-gray-600 text-sm">Dashboard, tracking, and analytics tools</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-4">Trusted By M&A Professionals</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">300+</div>
                        <div className="text-xs text-gray-600">Assessments</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">11</div>
                        <div className="text-xs text-gray-600">Key Factors</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <Shield className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">30+</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}