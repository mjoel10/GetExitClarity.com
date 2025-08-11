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
                    {/* Professional Report Document Preview */}
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 max-w-md mx-auto">
                      {/* Document Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="font-semibold text-gray-900">ExitClarity Report</h3>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          Sample
                        </div>
                      </div>

                      {/* Executive Summary Section */}
                      <div className="border border-gray-300 rounded-lg p-3 mb-4">
                        <div className="text-xs font-semibold text-gray-700 mb-2 bg-gray-100 px-2 py-1 rounded">
                          EXECUTIVE SUMMARY
                        </div>
                        <div className="space-y-2">
                          <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                        </div>
                      </div>

                      {/* Assessment Results Section */}
                      <div className="border border-gray-300 rounded-lg p-3 mb-4">
                        <div className="text-xs font-semibold text-gray-700 mb-3 bg-gray-100 px-2 py-1 rounded">
                          KEY ASSESSMENTS
                        </div>
                        <div className="space-y-3">
                          {/* Status indicators with progress bars */}
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-600">Financial Performance</div>
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                              <div className="h-full bg-green-500 rounded-full" style={{width: "85%"}}></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-600">Market Position</div>
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: "78%"}}></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-600">Operations</div>
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                              <div className="h-full bg-yellow-500 rounded-full" style={{width: "65%"}}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommendations Section */}
                      <div className="border border-gray-300 rounded-lg p-3 mb-4">
                        <div className="text-xs font-semibold text-gray-700 mb-2 bg-gray-100 px-2 py-1 rounded">
                          RECOMMENDATIONS
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
                          <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                        </div>
                      </div>

                      {/* Bottom Summary */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-base font-bold text-gray-900">7.4/10</div>
                          <div className="text-xs text-gray-500">Exit Readiness</div>
                        </div>
                        <div className="text-center">
                          <div className="text-base font-bold text-green-600">GO</div>
                          <div className="text-xs text-gray-500">Recommendation</div>
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

                  <div className="flex justify-start">
                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                    >
                      <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      View Sample Report
                      <ArrowRight className="ml-2 w-4 h-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA - Floating Card Design */}
          <section className="py-12 sm:py-16 lg:py-20" style={{backgroundColor: '#f8f9fa'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl shadow-2xl px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                  See How Your Clients Score
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-7">
                  Run this same analysis on your prospects in under 30 minutes
                </p>
                <Button 
                  onClick={handleRequestTrial}
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Request a Client Trial
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
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