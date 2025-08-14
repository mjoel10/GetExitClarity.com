import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building, Users, Clock, Shield, BarChart3, Calendar, BookOpen, FileText, Target } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";
import { apiRequest } from "@/lib/queryClient";

const trialRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  firmName: z.string().min(1, "Firm name is required"),
  role: z.string().min(1, "Role is required"),
  seenBefore: z.string().min(1, "Please select an option"),
  timing: z.string().min(1, "Timing is required"),
  notes: z.string().optional(),
});

type TrialRequestForm = z.infer<typeof trialRequestSchema>;

export default function TrialRequest() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useMeta({
    title: "Request a Client Trial - ExitClarity",
    description: "Request enterprise access to run ExitClarity on one of your prospects. No obligation, no credit card required.",
    ogTitle: "Request a Client Trial - ExitClarity",
    ogDescription: "Request enterprise access to run ExitClarity on one of your prospects. No obligation, no credit card required."
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<TrialRequestForm>({
    resolver: zodResolver(trialRequestSchema)
  });

  const mutation = useMutation({
    mutationFn: async (data: TrialRequestForm) => {
      return apiRequest('POST', '/api/trial-requests', {
        ...data,
        utmSource: new URLSearchParams(window.location.search).get('utm_source'),
        utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
        utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        pageReferrer: document.referrer || null
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
    }
  });

  const onSubmit = (data: TrialRequestForm) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-white">
          <Header />
          
          <main className="pt-16 sm:pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Welcome to ExitClarity!
                </h1>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  We'll confirm access for your firm within 1-3 business days.
                </p>

                {/* Action Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {/* Sample Report Card */}
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">View Sample Report</h3>
                      <p className="text-gray-600">See exactly what your clients will receive</p>
                      <Button asChild className="w-full">
                        <a href="/sample-report">View Sample Report</a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Schedule Demo Card */}
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Schedule a Quick Demo</h3>
                      <p className="text-gray-600">Want to see ExitClarity in action sooner?</p>
                      <Button asChild variant="outline" className="w-full">
                        <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                          Book 15-min Overview
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Resources Card */}
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Explore Resources</h3>
                      <p className="text-gray-600">Browse our exit planning insights</p>
                      <Button asChild variant="outline" className="w-full">
                        <a href="/resources">Visit Resource Center</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Footer Text */}
                <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                  Questions? Reply to your confirmation email or reach out at 
                  <a href="mailto:support@exitclarity.io" className="text-primary hover:underline ml-1">
                    support@exitclarity.io
                  </a>
                </p>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Hero Section */}
          <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 bg-gradient-to-br from-primary/5 via-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    Know Which Sellers to Pursue{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      – And Which to Nurture
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    Get a complete readiness assessment for one prospect - at no cost. See exactly where they stand and how to move them forward.
                  </p>
                </div>
                
                {/* Readiness Assessment Preview */}
                <div className="flex justify-center lg:justify-center lg:pl-8">
                  <div className="max-w-sm w-full">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                      {/* Document Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">Prospect Readiness Report</h3>
                        </div>
                        <div className="text-xs text-white bg-primary px-2 py-1 rounded">
                          Same Day
                        </div>
                      </div>

                      {/* Readiness Score */}
                      <div className="border border-gray-300 rounded-lg p-3 mb-3">
                        <div className="text-xs font-semibold text-gray-700 mb-2 bg-gray-100 px-2 py-1 rounded">
                          READINESS CLASSIFICATION
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-green-600">GO</div>
                          <div className="text-xs text-gray-600">Ready to Proceed</div>
                        </div>
                      </div>

                      {/* Key Factors */}
                      <div className="border border-gray-300 rounded-lg p-3 mb-3">
                        <div className="text-xs font-semibold text-gray-700 mb-3 bg-gray-100 px-2 py-1 rounded">
                          CRITICAL FACTORS
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-600">Financial Quality</div>
                            <div className="w-12 h-1 bg-gray-200 rounded-full">
                              <div className="h-full bg-green-500 rounded-full" style={{width: "90%"}}></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-600">Market Position</div>
                            <div className="w-12 h-1 bg-gray-200 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: "75%"}}></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-600">Exit Readiness</div>
                            <div className="w-12 h-1 bg-gray-200 rounded-full">
                              <div className="h-full bg-yellow-500 rounded-full" style={{width: "65%"}}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommendation */}
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          <Target className="w-3 h-3" />
                          Worth Pursuing Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column - Benefits */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">What You Get</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Same-Day Readiness Report</p>
                          <p className="text-sm text-gray-600">Complete assessment within hours of prospect completion</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">GO/FIX/WAIT Classification</p>
                          <p className="text-sm text-gray-600">Instantly know if they're worth pursuing now</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">25-Page Detailed Analysis</p>
                          <p className="text-sm text-gray-600">Covers 11 deal-critical factors buyers care about</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Zero Risk Test</p>
                          <p className="text-sm text-gray-600">No credit card, no obligation, one free assessment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Request Access</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              {...register("firstName")}
                              placeholder="John"
                            />
                            {errors.firstName && (
                              <p className="text-sm text-red-600">{errors.firstName.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              {...register("lastName")}
                              placeholder="Smith"
                            />
                            {errors.lastName && (
                              <p className="text-sm text-red-600">{errors.lastName.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email">Business Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="john.smith@yourfirm.com"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Firm Name */}
                        <div className="space-y-2">
                          <Label htmlFor="firmName">Firm Name *</Label>
                          <Input
                            id="firmName"
                            {...register("firmName")}
                            placeholder="Your M&A Firm"
                          />
                          {errors.firmName && (
                            <p className="text-sm text-red-600">{errors.firmName.message}</p>
                          )}
                        </div>

                        {/* Role */}
                        <div className="space-y-2">
                          <Label>Role *</Label>
                          <Select onValueChange={(value) => setValue("role", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CEO/Founder">CEO/Founder</SelectItem>
                              <SelectItem value="Partner/Managing Partner">Partner/Managing Partner</SelectItem>
                              <SelectItem value="Director/VP">Director/VP</SelectItem>
                              <SelectItem value="Business Development">Business Development</SelectItem>
                              <SelectItem value="Associate/Analyst">Associate/Analyst</SelectItem>
                              <SelectItem value="Operations/Marketing">Operations/Marketing</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.role && (
                            <p className="text-sm text-red-600">{errors.role.message}</p>
                          )}
                        </div>



                        {/* Seen Before */}
                        <div className="space-y-3">
                          <Label>Have you seen ExitClarity used at your firm before? *</Label>
                          <RadioGroup onValueChange={(value) => setValue("seenBefore", value)}>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Yes" id="seen-yes" />
                              <Label htmlFor="seen-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="No" id="seen-no" />
                              <Label htmlFor="seen-no">No</Label>
                            </div>
                          </RadioGroup>
                          {errors.seenBefore && (
                            <p className="text-sm text-red-600">{errors.seenBefore.message}</p>
                          )}
                        </div>

                        {/* Timing */}
                        <div className="space-y-2">
                          <Label>Approximate Timing *</Label>
                          <Select onValueChange={(value) => setValue("timing", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="When do you need this?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ASAP">ASAP</SelectItem>
                              <SelectItem value="1-3 months">1-3 months</SelectItem>
                              <SelectItem value="3-6 months">3-6 months</SelectItem>
                              <SelectItem value="6-12 months">6-12 months</SelectItem>
                              <SelectItem value="12+ months">12+ months</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.timing && (
                            <p className="text-sm text-red-600">{errors.timing.message}</p>
                          )}
                        </div>

                        {/* Notes */}
                        <div className="space-y-2">
                          <Label htmlFor="notes">Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            {...register("notes")}
                            placeholder="Any additional details about your needs or timeline"
                            rows={3}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? "Submitting..." : "Request Free Assessment"}
                        </Button>

                        {mutation.error && (
                          <div className="text-sm text-red-600 text-center space-y-1">
                            <p>There was an error submitting your request. Please try again.</p>
                            {mutation.error instanceof Error && (
                              <p className="text-xs">{mutation.error.message}</p>
                            )}
                          </div>
                        )}
                      </form>
                    </CardContent>
                  </Card>
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