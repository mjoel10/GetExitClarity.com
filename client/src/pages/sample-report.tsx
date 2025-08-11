import { useState } from "react";
// import { Helmet } from "react-helmet-async";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, ArrowRight, CheckCircle, Users, BarChart3, Shield, Target, Clock, TrendingUp, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// PDF file available at /ExitClarity-Sample-Report.pdf

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  audienceType: z.enum(["ma-firm", "business-owner"], {
    required_error: "Please select your audience type",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function SampleReport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      audienceType: undefined,
    },
  });

  const createDemoRequestMutation = useMutation({
    mutationFn: async (requestData: FormData) => {
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
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/ExitClarity-Sample-Report.pdf";
    link.download = "ExitClarity-Sample-Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Submit the form data to the database
      await createDemoRequestMutation.mutateAsync(data);
      
      // Trigger PDF download
      downloadPDF();
      
      // Show success state
      setIsSubmitted(true);
      
      // Show success toast
      toast({
        title: "Success!",
        description: "Your sample report is downloading now!",
      });

      // Auto-close modal after 3 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        form.reset();
      }, 3000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    form.reset();
  };

  const reportFeatures = [
    "11 Critical Business Factors Analysis",
    "GO/FIX/WAIT Recommendation",
    "Market-Based Valuation Estimate",
    "Risk Assessment & Mitigation Plan",
    "30+ Data Points Evaluation",
    "Industry Benchmarking",
    "Action Plan with Priorities",
    "Exit Timeline Recommendations"
  ];

  const handleRequestTrial = () => {
    // Navigate to trial request page
    window.location.href = "/trial-request";
  };

  return (
    <>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Hero Section with Visual Report */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Enhanced Report Visual */}
                <div className="order-2 lg:order-1 relative lg:pr-8">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    {/* Main Report Document */}
                    <div className="bg-white rounded-lg shadow-xl border border-gray-300 p-8">
                      {/* Document Header */}
                      <div className="mb-8 pb-6 border-b-2 border-gray-200">
                        <div className="text-center mb-4">
                          <h3 className="font-bold text-lg text-gray-900 mb-1">EXITCLARITY STRATEGIC ANALYSIS</h3>
                          <p className="text-sm text-gray-600 font-medium">COMPREHENSIVE EXIT READINESS & VALUATION REPORT</p>
                          <p className="text-xs text-gray-500 italic">Confidential M&A Strategic Advisory Analysis</p>
                        </div>
                        <div className="text-xs space-y-1 mb-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p><span className="font-semibold">Company:</span> WealthChannel Group</p>
                              <p><span className="font-semibold">Industry:</span> Media/Entertainment</p>
                              <p><span className="font-semibold">Revenue:</span> $6,500,000</p>
                            </div>
                            <div>
                              <p><span className="font-semibold">Adjusted EBITDA:</span> $1,850,000</p>
                              <p><span className="font-semibold">Employees:</span> 18</p>
                              <p><span className="font-semibold">Date:</span> 7/9/2025</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="bg-green-600 text-white px-4 py-2 rounded font-bold text-sm">
                            GO RECOMMENDATION
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Overall Exit Readiness Score: 7.4/10</p>
                        </div>
                      </div>

                      {/* Executive Summary Table */}
                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 text-center bg-gray-100 py-2 text-sm">
                            EXECUTIVE SUMMARY - KEY METRICS
                          </h4>
                          
                          {/* Scores Table */}
                          <div className="border border-gray-300">
                            <div className="grid grid-cols-3 gap-0 text-xs font-semibold bg-gray-50 border-b border-gray-300">
                              <div className="p-2 border-r border-gray-300">ASSESSMENT AREA</div>
                              <div className="p-2 border-r border-gray-300 text-center">SCORE</div>
                              <div className="p-2 text-center">RATING</div>
                            </div>
                            <div className="grid grid-cols-3 gap-0 text-xs border-b border-gray-300">
                              <div className="p-2 border-r border-gray-300">Business Overview</div>
                              <div className="p-2 border-r border-gray-300 text-center font-semibold">8.2/10</div>
                              <div className="p-2 text-center text-green-600 font-semibold">STRONG</div>
                            </div>
                            <div className="grid grid-cols-3 gap-0 text-xs border-b border-gray-300">
                              <div className="p-2 border-r border-gray-300">Financial Performance</div>
                              <div className="p-2 border-r border-gray-300 text-center font-semibold">7.8/10</div>
                              <div className="p-2 text-center text-green-600 font-semibold">STRONG</div>
                            </div>
                            <div className="grid grid-cols-3 gap-0 text-xs border-b border-gray-300">
                              <div className="p-2 border-r border-gray-300">Market Position</div>
                              <div className="p-2 border-r border-gray-300 text-center font-semibold">7.5/10</div>
                              <div className="p-2 text-center text-blue-600 font-semibold">GOOD</div>
                            </div>
                            <div className="grid grid-cols-3 gap-0 text-xs border-b border-gray-300">
                              <div className="p-2 border-r border-gray-300">Management & Leadership</div>
                              <div className="p-2 border-r border-gray-300 text-center font-semibold">6.9/10</div>
                              <div className="p-2 text-center text-blue-600 font-semibold">GOOD</div>
                            </div>
                            <div className="grid grid-cols-3 gap-0 text-xs">
                              <div className="p-2 border-r border-gray-300">Operational Systems</div>
                              <div className="p-2 border-r border-gray-300 text-center font-semibold">6.4/10</div>
                              <div className="p-2 text-center text-orange-600 font-semibold">FAIR</div>
                            </div>
                          </div>
                        </div>

                        {/* Valuation Summary */}
                        <div className="border border-gray-300 bg-gray-50 p-4">
                          <h4 className="font-bold text-gray-900 mb-3 text-center text-sm">VALUATION ANALYSIS</h4>
                          <div className="grid grid-cols-2 gap-4 text-center text-xs">
                            <div>
                              <div className="text-base font-bold text-gray-900">$11.1M - $14.8M</div>
                              <div className="text-gray-600">Estimated Range</div>
                              <div className="text-gray-500">(6.0x - 8.0x EBITDA)</div>
                            </div>
                            <div>
                              <div className="text-base font-bold text-blue-600">70% Recurring</div>
                              <div className="text-gray-600">Revenue Base</div>
                              <div className="text-gray-500">28.5% EBITDA Margin</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Items Preview */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-900 text-center bg-gray-100 py-2 text-sm">
                          PRIORITY RECOMMENDATIONS
                        </h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2">
                            <span className="font-semibold text-gray-900">1.</span>
                            <span className="text-gray-700">Reduce owner dependence (currently 55%) through documented processes</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-semibold text-gray-900">2.</span>
                            <span className="text-gray-700">Strengthen second-tier management depth beyond 1-2 key managers</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-semibold text-gray-900">3.</span>
                            <span className="text-gray-700">Formalize SOPs for content production and campaign workflows</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-semibold text-gray-900">4.</span>
                            <span className="text-gray-700">Enhance key person insurance coverage beyond basic levels</span>
                          </div>
                        </div>
                        <div className="text-center text-xs text-gray-500 mt-3 italic">
                          Complete 28-page analysis with detailed action plan and timeline
                        </div>
                      </div>
                    </div>

                    {/* Floating Badges */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-light text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                      20-30 Page Report
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                      11 Critical Factors
                    </div>
                    
                    {/* Background Elements */}
                    <div className="absolute inset-0 -z-10">
                      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2 lg:pl-8">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Sample Report
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    See Our Sample <span className="text-primary">Exit Readiness Report</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    Get a comprehensive preview of what our platform delivers. This sample report showcases the depth of analysis, strategic insights, and actionable recommendations that help businesses prepare for successful exits.
                  </p>
                  
                  {/* Key Benefits List */}
                  <div className="space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complete exit readiness assessment across 11 key dimensions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Strategic recommendations and optimization roadmap</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Valuation insights and market positioning analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Risk assessment and mitigation strategies</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                    >
                      <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      View Sample Report
                      <ArrowRight className="ml-2 w-4 h-4 sm:h-5 sm:w-5" />
                    </Button>
                    <Button 
                      onClick={handleRequestTrial}
                      variant="outline" 
                      size="lg" 
                      className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-primary text-primary hover:bg-primary/5"
                    >
                      Request a Client Trial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What's Inside Section */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What's Inside the Report
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                  Our comprehensive 20-30 page assessment covers every aspect of exit readiness
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Report Features */}
                <div className="order-2 lg:order-1">
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {reportFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Clear Recommendations
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        GO - Ready to Proceed
                      </Badge>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        FIX - Address Issues First
                      </Badge>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        WAIT - Not Ready Yet
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Every report concludes with a clear recommendation and actionable next steps.
                    </p>
                  </div>
                </div>

                {/* Report Preview */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-gray-200">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold mb-2">Exit Readiness Assessment</h4>
                        <p className="text-blue-100 text-sm">Comprehensive Business Analysis</p>
                      </div>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Financial Performance</span>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Market Position</span>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Management Team</span>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-2">
                          <Badge className="bg-green-100 text-green-800">GO</Badge>
                          <span className="text-sm text-gray-600">Ready to Proceed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="mt-6"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download Full Sample
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Our Assessment Works
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Data-Driven Analysis
                  </h3>
                  <p className="text-gray-600">
                    30+ years of M&A experience distilled into a systematic evaluation framework
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Risk Mitigation
                  </h3>
                  <p className="text-gray-600">
                    Identify and address potential deal breakers before they become problems
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Time Efficient
                  </h3>
                  <p className="text-gray-600">
                    20-minute assessment delivers insights that normally take weeks to uncover
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 lg:py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your M&A Process?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 300+ M&A professionals using ExitClarity to streamline deal preparation
              </p>
              <Button 
                onClick={handleRequestTrial}
                size="lg" 
                className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg"
              >
                Request a Client Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </main>

        <Footer />

        {/* Sample Report Modal */}
        <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                {isSubmitted ? "Success!" : "Get Your Sample Report"}
              </DialogTitle>
            </DialogHeader>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-4">
                  Your sample report is downloading now!
                </p>
                <p className="text-sm text-muted-foreground">
                  This window will close automatically in a few seconds.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="audienceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>I am a: *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="ma-firm" id="ma-firm" />
                              <Label htmlFor="ma-firm">M&A Firm Professional</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="business-owner" id="business-owner" />
                              <Label htmlFor="business-owner">Business Owner</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={form.formState.isSubmitting}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {form.formState.isSubmitting ? "Sending..." : "Download Sample Report"}
                  </Button>
                </form>
              </Form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}