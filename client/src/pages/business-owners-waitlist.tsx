import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, TrendingUp, Shield, FileText, Clock, Users, Target, BarChart3, ArrowRight, Star, ChevronRight, Building, Calendar, Heart, DollarSign, Settings, RefreshCw, Download, AlertTriangle, UserPlus } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/footer";

const sampleReportSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  audienceType: z.enum(["ma-firm", "business-owner"], {
    required_error: "Please select your audience type",
  }),
});

const waitlistSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid business email is required"),
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select your industry"),
  annualRevenue: z.string().min(1, "Please select your annual revenue range"),
  ebitda: z.string().min(1, "Please select your EBITDA range"),
  exitTimeline: z.string().min(1, "Please select your expected exit timeline"),
  biggestConcern: z.string().min(10, "Please describe your biggest concern (minimum 10 characters)"),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;
type SampleReportFormData = z.infer<typeof sampleReportSchema>;

export default function BusinessOwnersWaitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isReportSubmitted, setIsReportSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useMeta({
    title: "Join Early Access - Professional Exit Analysis for Business Owners | ExitClarity",
    description: "Be first to access professional-grade exit readiness analysis. Join 500+ business owners preparing for successful exits with comprehensive assessment tools.",
    ogTitle: "Join Early Access - Professional Exit Analysis for Business Owners",
    ogDescription: "Be first to access professional-grade exit readiness analysis. Join 500+ business owners preparing for successful exits."
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema)
  });

  const mutation = useMutation({
    mutationFn: async (data: WaitlistForm) => {
      return apiRequest('POST', '/api/demo-request', {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        company: data.companyName,
        requestType: "waitlist",
        additionalData: JSON.stringify({
          industry: data.industry,
          annualRevenue: data.annualRevenue,
          ebitda: data.ebitda,
          exitTimeline: data.exitTimeline,
          biggestConcern: data.biggestConcern
        })
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
    }
  });

  const onSubmit = (data: WaitlistForm) => {
    mutation.mutate(data);
  };

  // Sample Report Form
  const reportForm = useForm<SampleReportFormData>({
    resolver: zodResolver(sampleReportSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      audienceType: undefined,
    },
  });

  const createDemoRequestMutation = useMutation({
    mutationFn: async (requestData: SampleReportFormData) => {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: requestData.name,
          email: requestData.email,
          company: requestData.company,
          requestType: "sample_report",
          audienceType: requestData.audienceType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/demo-requests"] });
    },
  });

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/ExitClarity-Sample-Report.pdf";
    link.download = "ExitClarity-Sample-Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onReportSubmit = async (data: SampleReportFormData) => {
    try {
      await createDemoRequestMutation.mutateAsync(data);
      downloadPDF();
      setIsReportSubmitted(true);
      toast({
        title: "Success!",
        description: "Your sample report is downloading now!",
      });

      setTimeout(() => {
        setIsReportModalOpen(false);
        setIsReportSubmitted(false);
        reportForm.reset();
      }, 3000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false);
    setIsReportSubmitted(false);
    reportForm.reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Welcome to Early Access!
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              You're now on the waitlist for ExitClarity's business owner platform. We'll notify you as soon as early access becomes available.
            </p>
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              Position secured in early access queue
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                Early Access Preview
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Discover Your True Exit Value <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Before the Market Decides</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
                Get an unbiased M&A-grade assessment that reveals your business's real valuation, flags deal risks, and gives you a clear action plan to sell for more.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>30-Minute Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Avoid Deal-Killing Surprises</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-yellow-500" />
                  <span>Negotiate from Strength</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 lg:mb-0">
                <Button 
                  onClick={() => {
                    const waitlistSection = document.getElementById('waitlist-form');
                    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="hero"
                  size="xl"
                  className="group"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Join Early Access Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  onClick={() => setIsReportModalOpen(true)}
                  variant="professional"
                  size="xl"
                  className="group"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Sample Report
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right Visual - Tablet Browser Interface */}
            <div className="flex justify-center lg:justify-end lg:mt-32">
              <div className="max-w-lg w-full">
                {/* Tablet Container */}
                <div className="transform">
                  {/* Tablet Frame */}
                  <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl">
                    {/* Browser Chrome */}
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Browser Header - Minimal */}
                      <div className="bg-white px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Interface */}
                      <div className="h-80">
                        {/* App Header */}
                        <div className="bg-gray-900 text-white px-4 py-2 flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                              <FileText className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm font-semibold">ExitClarity</span>
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex h-full bg-gray-50">
                          {/* Sidebar */}
                          <div className="w-28 bg-white border-r border-gray-200 p-2">
                            <div className="space-y-1">
                              <div className="h-2 bg-gray-300 rounded w-20 mb-2"></div>
                              <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                                Executive Summary
                              </div>
                              <div className="h-2 bg-gray-200 rounded w-20"></div>
                              <div className="h-2 bg-gray-200 rounded w-16"></div>
                              <div className="h-2 bg-gray-200 rounded w-18"></div>
                              <div className="h-2 bg-gray-200 rounded w-14"></div>
                              <div className="h-2 bg-gray-200 rounded w-22"></div>
                              <div className="h-2 bg-gray-200 rounded w-16"></div>
                              <div className="h-2 bg-gray-200 rounded w-20"></div>
                              <div className="h-2 bg-gray-200 rounded w-18"></div>
                              <div className="h-2 bg-gray-200 rounded w-14"></div>
                              <div className="h-2 bg-gray-200 rounded w-16"></div>
                              <div className="h-2 bg-gray-200 rounded w-12"></div>
                              <div className="h-2 bg-gray-200 rounded w-20"></div>
                              <div className="h-2 bg-gray-200 rounded w-18"></div>
                            </div>
                          </div>

                          {/* Content Area */}
                          <div className="flex-1 p-3 overflow-hidden">
                            <div className="h-2 bg-gray-200 rounded mb-2 w-3/4"></div>
                            
                            {/* Score Card */}
                            <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                              <div className="flex items-center gap-3">
                                {/* Score Ring */}
                                <div className="relative w-14 h-14">
                                  <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                                    <path
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      fill="none"
                                      stroke="#e5e7eb"
                                      strokeWidth="2"
                                    />
                                    <path
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      fill="none"
                                      stroke="#22c55e"
                                      strokeWidth="2"
                                      strokeDasharray="94, 100"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-900">94%</span>
                                  </div>
                                </div>
                                
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="inline-flex items-center gap-1 bg-primary text-white px-2 py-0.5 rounded text-xs font-semibold">
                                      <TrendingUp className="w-2.5 h-2.5" />
                                      Ready to Proceed
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded w-16"></div>
                                  </div>
                                  
                                  {/* Key Metrics Grid */}
                                  <div className="grid grid-cols-4 gap-2 text-xs">
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-12"></div>
                                      <div className="font-bold text-gray-900">$8.2M</div>
                                    </div>
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-8"></div>
                                      <div className="font-bold text-gray-900">4.2x</div>
                                    </div>
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-10"></div>
                                      <div className="font-bold text-gray-900">6-9 mo</div>
                                    </div>
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-8"></div>
                                      <div className="font-bold text-green-600">Low</div>
                                    </div>
                                  </div>
                                  
                                  {/* Bottom metrics row */}
                                  <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-gray-100 text-xs">
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-6"></div>
                                      <div className="font-bold text-green-600">23%</div>
                                    </div>
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-8"></div>
                                      <div className="font-bold text-blue-600">18%</div>
                                    </div>
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-6"></div>
                                      <div className="font-bold text-purple-600">12%</div>
                                    </div>
                                    <div>
                                      <div className="h-1.5 bg-gray-200 rounded mb-1 w-5"></div>
                                      <div className="font-bold text-indigo-600">High</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Key Findings - Stylized */}
                            <div className="mt-3 space-y-2">
                              <div className="h-2 bg-gray-300 rounded w-20"></div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <div className="h-2 bg-gray-200 rounded flex-1"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ExitClarity Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What is ExitClarity?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The professional exit readiness platform trusted by M&A firms and business owners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Professional Platform */}
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Professional Platform</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Used by M&A firms and business owners to systematically evaluate businesses before market entry.
              </p>
            </div>

            {/* 30-Minute Assessment */}
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">30-Minute Assessment</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Comprehensive evaluation across 11 critical factors—strategic, financial, operational, and personal readiness.
              </p>
            </div>

            {/* Strategic Reports */}
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Strategic Reports</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Receive a 20–25 page report with valuation analysis, risk audit, and a step-by-step action plan.
              </p>
            </div>

            {/* M&A Methodology */}
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">M&A Methodology</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Insights built from decades of real buy-side and sell-side experience—no fluff, just what moves value.
              </p>
            </div>

            {/* Data-Driven Recommendations */}
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">GO/FIX/WAIT Recommendation</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Clear guidance on whether to sell now, fix first, or wait for a better window.
              </p>
            </div>

            {/* Expert Insights */}
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Expert Insights</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Practical recommendations to increase valuation and buyer confidence before you engage advisors.
              </p>
            </div>
          </div>

          {/* CTA after What is ExitClarity */}
          <div className="bg-primary/5 rounded-2xl p-6 mt-12 border border-primary/10">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Experience the professional platform trusted by M&A firms
              </p>
              <Button 
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist-form');
                  waitlistSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="hero"
                size="xl"
                className="group"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Secure My Early Access Spot
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Business Owners Choose ExitClarity
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get the insights you need to make informed decisions about your exit strategy
            </p>
          </div>
          
          {/* Clean Vertical Stack Layout */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Confidence & Clarity */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Confidence & Clarity</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Understand realistic estimated outcomes for your specific business and gain confidence about the entire exit process before engaging advisors. Know exactly where you stand and what to expect.
              </p>
            </div>

            {/* Cost Savings */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Significant Cost Savings</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Save on professional fees through early preparation and efficient process management. Know your position before expensive engagements and avoid costly mistakes.
              </p>
            </div>

            {/* Reduced Risk */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Minimize Exit Risk</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minimize process risk using lessons learned from hundreds of previous transactions and proven best practices from M&A professionals. Avoid common pitfalls that derail deals.
              </p>
            </div>

            {/* Expert Guidance */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">30+ Years M&A Expertise</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access insights driven by decades of business ownership and sell-side/buy-side M&A expertise before you commit to consulting engagements. Get the insider perspective.
              </p>
            </div>
          </div>
          
          {/* CTA after Benefits */}
          <div className="bg-primary/5 rounded-3xl p-8 mt-16 border border-primary/10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Join our exclusive early access waitlist and be among the first business owners to experience professional exit analysis.
              </p>
              <Button 
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist-form');
                  waitlistSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="hero"
                size="xl"
                className="group"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Secure My Early Access Spot
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Limited spots available • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Demo Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="container mx-auto px-6 relative">
          {/* Interactive Assessment Preview */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-6">
              See What You'll Experience
            </h2>
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Preview the comprehensive analysis you'll receive for your business
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-200">
              <div className="assessment-preview">
                {/* Assessment Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Exit Readiness Assessment</h3>
                      <p className="text-sm text-gray-600">Professional Analysis in Progress</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    ⏱️ 15 min remaining
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">Assessment Progress</span>
                    <span className="text-sm font-bold text-gray-900">8 of 11 Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full relative overflow-hidden" 
                      style={{ width: '72.7%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Assessment Factors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Business Overview", status: "completed", icon: <Building className="w-6 h-6" /> },
                    { title: "Exit Goals & Timeline", status: "completed", icon: <Calendar className="w-6 h-6" /> },
                    { title: "Personal & Emotional Readiness", status: "completed", icon: <Heart className="w-6 h-6" /> },
                    { title: "Financial Quality", status: "completed", icon: <DollarSign className="w-6 h-6" /> },
                    { title: "Operational Maturity", status: "completed", icon: <Settings className="w-6 h-6" /> },
                    { title: "Documentation Preparedness", status: "completed", icon: <FileText className="w-6 h-6" /> },
                    { title: "Team & Transition Risk", status: "completed", icon: <Users className="w-6 h-6" /> },
                    { title: "Previous M&A Experience", status: "active", icon: <TrendingUp className="w-6 h-6" /> },
                    { title: "Representation & Market Strategy", status: "pending", icon: <Target className="w-6 h-6" /> },
                    { title: "Deal Structure & Risk", status: "pending", icon: <Shield className="w-6 h-6" /> },
                    { title: "Business Continuity & Post-Sale", status: "pending", icon: <RefreshCw className="w-6 h-6" /> }
                  ].map((factor, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        factor.status === 'completed' 
                          ? 'bg-green-50 border-green-200' 
                          : factor.status === 'active'
                          ? 'bg-blue-50 border-blue-200 shadow-lg'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${
                          factor.status === 'completed' ? 'text-green-600' :
                          factor.status === 'active' ? 'text-blue-600' : 'text-gray-400'
                        } ${factor.status === 'active' ? 'animate-pulse' : ''}`}>
                          {factor.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{factor.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            {factor.status === 'completed' && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                            {factor.status === 'active' && (
                              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            )}
                            <span className={`text-xs font-medium ${
                              factor.status === 'completed' ? 'text-green-600' :
                              factor.status === 'active' ? 'text-blue-600' : 'text-gray-500'
                            }`}>
                              {factor.status === 'completed' ? 'Complete' :
                               factor.status === 'active' ? 'In Progress' : 'Pending'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner Below Assessment */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Get Your Exit Readiness Assessment?
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Join our waitlist to be the first to access this comprehensive analysis for your business
            </p>
            <Button 
              onClick={() => {
                const waitlistSection = document.getElementById('waitlist-form');
                waitlistSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="xl"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold group"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Join Early Access Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div id="waitlist-form" className="max-w-4xl mx-auto mb-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Join Early Access Waitlist
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Be among the first business owners to access professional exit analysis
              </p>
            </div>

            <Card className="p-8 shadow-xl border border-gray-200">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      {...register("firstName")}
                      placeholder="Enter your first name"
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      {...register("lastName")}
                      placeholder="Enter your last name"
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="Enter your business email"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      {...register("companyName")}
                      placeholder="Enter your company name"
                      className={errors.companyName ? "border-red-500" : ""}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                    )}
                  </div>
                </div>

                {/* Business Information */}
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => setValue("industry", value)}>
                    <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="financial-services">Financial Services</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="annualRevenue">Annual Revenue *</Label>
                    <Select onValueChange={(value) => setValue("annualRevenue", value)}>
                      <SelectTrigger className={errors.annualRevenue ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                        <SelectItem value="25m-50m">$25M - $50M</SelectItem>
                        <SelectItem value="50m-plus">$50M+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.annualRevenue && (
                      <p className="text-red-500 text-sm mt-1">{errors.annualRevenue.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="ebitda">EBITDA Range *</Label>
                    <Select onValueChange={(value) => setValue("ebitda", value)}>
                      <SelectTrigger className={errors.ebitda ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select EBITDA range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="negative">Negative</SelectItem>
                        <SelectItem value="0-500k">$0 - $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                        <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                        <SelectItem value="5m-plus">$5M+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.ebitda && (
                      <p className="text-red-500 text-sm mt-1">{errors.ebitda.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="exitTimeline">Expected Exit Timeline *</Label>
                  <Select onValueChange={(value) => setValue("exitTimeline", value)}>
                    <SelectTrigger className={errors.exitTimeline ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1-year">0-1 year</SelectItem>
                      <SelectItem value="1-3-years">1-3 years</SelectItem>
                      <SelectItem value="3-5-years">3-5 years</SelectItem>
                      <SelectItem value="5-plus-years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.exitTimeline && (
                    <p className="text-red-500 text-sm mt-1">{errors.exitTimeline.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="biggestConcern">What's your biggest concern about selling your business? *</Label>
                  <Textarea
                    {...register("biggestConcern")}
                    placeholder="Tell us about your main concerns, challenges, or questions regarding your exit..."
                    rows={4}
                    className={errors.biggestConcern ? "border-red-500" : ""}
                  />
                  {errors.biggestConcern && (
                    <p className="text-red-500 text-sm mt-1">{errors.biggestConcern.message}</p>
                  )}
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-4 mb-3"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      "Securing Your Spot..."
                    ) : (
                      <>
                        Secure My Early Access Spot
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-600 font-medium">
                    Get notified first + exclusive early access pricing
                  </p>
                </div>

                {mutation.error && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </Card>
          </div>


        </div>
      </section>

      <Footer />

      {/* Sample Report Modal */}
      <Dialog open={isReportModalOpen} onOpenChange={handleCloseReportModal}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center mb-2">
              Download Sample Report
            </DialogTitle>
          </DialogHeader>
          
          {isReportSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Download Started!
              </h3>
              <p className="text-gray-600 text-sm">
                Your sample report should be downloading now.
              </p>
            </div>
          ) : (
            <Form {...reportForm}>
              <form onSubmit={reportForm.handleSubmit(onReportSubmit)} className="space-y-4">
                <FormField
                  control={reportForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={reportForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={reportForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={createDemoRequestMutation.isPending}
                >
                  {createDemoRequestMutation.isPending ? "Sending..." : "Download Report"}
                </Button>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}