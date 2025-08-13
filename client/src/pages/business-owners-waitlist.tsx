import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  TrendingUp, 
  Download,
  FileText,
  Building2,
  DollarSign,
  Users,
  Target,
  BarChart3,
  Globe,
  Settings,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  PieChart
} from "lucide-react";

const waitlistSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  annualRevenue: z.string().min(1, "Please select annual revenue range"),
  ebitda: z.string().min(1, "Please select EBITDA range"),
  exitTimeline: z.string().min(1, "Please select your exit timeline"),
  biggestConcern: z.string().min(10, "Please provide more details about your concern (at least 10 characters)")
});

const reportSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(1, "Company name is required")
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;
type ReportFormData = z.infer<typeof reportSchema>;

export default function BusinessOwnersWaitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isReportSubmitted, setIsReportSubmitted] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema)
  });

  const reportForm = useForm<ReportFormData>({
    resolver: zodResolver(reportSchema)
  });

  const mutation = useMutation({
    mutationFn: (data: WaitlistFormData) => 
      apiRequest("/api/business-owner-waitlist", {
        method: "POST",
        body: JSON.stringify(data)
      }),
    onSuccess: () => {
      setIsSubmitted(true);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const reportMutation = useMutation({
    mutationFn: (data: ReportFormData) => 
      apiRequest("/api/sample-report", {
        method: "POST",
        body: JSON.stringify(data)
      }),
    onSuccess: () => {
      setIsReportSubmitted(true);
      toast({
        title: "Sample Report Sent!",
        description: "Check your email for the download link.",
      });
      
      setTimeout(() => {
        setIsReportModalOpen(false);
        setIsReportSubmitted(false);
        reportForm.reset();
      }, 3000);

    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: WaitlistFormData) => {
    mutation.mutate(data);
  };

  const onReportSubmit = (data: ReportFormData) => {
    reportMutation.mutate(data);
  };

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false);
    setIsReportSubmitted(false);
    reportForm.reset();
  };

  const assessmentFactors = [
    { 
      title: "Financial Performance", 
      icon: <DollarSign className="w-5 h-5" />, 
      status: "completed" as const 
    },
    { 
      title: "Market Position", 
      icon: <Target className="w-5 h-5" />, 
      status: "completed" as const 
    },
    { 
      title: "Management Team", 
      icon: <Users className="w-5 h-5" />, 
      status: "active" as const 
    },
    { 
      title: "Operations & Systems", 
      icon: <Settings className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Legal Structure", 
      icon: <FileText className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Customer Base", 
      icon: <Building2 className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Intellectual Property", 
      icon: <Lightbulb className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Financial Records", 
      icon: <BarChart3 className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Risk Assessment", 
      icon: <AlertTriangle className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Growth Potential", 
      icon: <TrendingUp className="w-5 h-5" />, 
      status: "pending" as const 
    },
    { 
      title: "Exit Strategy", 
      icon: <PieChart className="w-5 h-5" />, 
      status: "pending" as const 
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Early Access!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
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
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              Early Access Preview
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Know Your Exit Value <span className="text-primary">Before You Hire Advisors</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Built by Business Owners and M&A Professionals with 30+ Years Experience
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
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
            
            {/* Sample Report CTA */}
            <div className="flex justify-center mb-12">
              <Button 
                onClick={() => setIsReportModalOpen(true)}
                className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Sample Report
              </Button>
            </div>
          </div>

          {/* Waitlist Form Section - Moved Up Here for Better Conversion */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Join Early Access Waitlist
              </h2>
              <p className="text-lg text-gray-600">
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

          {/* Interactive Assessment Preview */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              See What You'll Experience
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 lg:p-8">
              {/* MacBook-style frame */}
              <div className="bg-black rounded-lg p-2">
                <div className="bg-white rounded-md overflow-hidden">
                  {/* Assessment Header */}
                  <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold">ExitClarity Assessment</span>
                    </div>
                    <Badge className="bg-blue-600 text-white border-0">
                      Step 3 of 11
                    </Badge>
                  </div>

                  {/* Assessment Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">Management Team Assessment</h3>
                        <span className="text-sm text-gray-500">27% Complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '27%' }}></div>
                      </div>
                    </div>

                    {/* Sample Question */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">
                        How many key management positions could continue operating if you were unavailable for 3 months?
                      </h4>
                      <div className="space-y-2">
                        <label className="flex items-center p-3 bg-white rounded border hover:bg-blue-50 cursor-pointer transition-colors">
                          <input type="radio" name="management" className="mr-3 text-primary" />
                          <span className="text-gray-700">All positions have capable backup leadership</span>
                        </label>
                        <label className="flex items-center p-3 bg-blue-50 border-2 border-primary rounded cursor-pointer">
                          <input type="radio" name="management" className="mr-3 text-primary" checked readOnly />
                          <span className="text-gray-900 font-medium">Most positions covered, some gaps exist</span>
                        </label>
                        <label className="flex items-center p-3 bg-white rounded border hover:bg-blue-50 cursor-pointer transition-colors">
                          <input type="radio" name="management" className="mr-3 text-primary" />
                          <span className="text-gray-700">Few positions have backup plans</span>
                        </label>
                        <label className="flex items-center p-3 bg-white rounded border hover:bg-blue-50 cursor-pointer transition-colors">
                          <input type="radio" name="management" className="mr-3 text-primary" />
                          <span className="text-gray-700">Business heavily dependent on me personally</span>
                        </label>
                      </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="grid grid-cols-11 gap-2 mb-4">
                      {assessmentFactors.map((factor, index) => (
                        <div
                          key={index}
                          className={`h-8 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                            factor.status === 'completed' ? 'bg-green-100 text-green-700 border-2 border-green-300' :
                            factor.status === 'active' ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 animate-pulse' : 
                            'bg-gray-100 text-gray-500'
                          }`}
                          title={factor.title}
                        >
                          {factor.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : factor.status === 'active' ? (
                            <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            factor.icon
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Assessment Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                      {assessmentFactors.slice(0, 6).map((factor, index) => (
                        <div 
                          key={index}
                          className={`flex items-center gap-2 p-2 rounded ${
                            factor.status === 'completed' ? 'bg-green-50 text-green-700' :
                            factor.status === 'active' ? 'bg-blue-50 text-blue-700' : 
                            'bg-gray-50 text-gray-500'
                          }`}
                        >
                          <div className={factor.status === 'active' ? 'animate-pulse' : ''}>
                            {factor.icon}
                          </div>
                          <span className="font-medium">{factor.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        Continue Assessment
                      </Button>
                      <Button variant="outline" className="px-6">
                        Save & Exit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Report Preview */}
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Your Comprehensive Exit Readiness Report
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 lg:p-8">
              {/* MacBook-style frame */}
              <div className="bg-black rounded-lg p-2">
                <div className="bg-white rounded-md overflow-hidden">
                  {/* Report Header */}
                  <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold">ExitClarity Report</span>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Export PDF
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Report Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-6 mb-6">
                      {/* Score Visualization */}
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center relative">
                          <div className="w-24 h-24 rounded-full border-8 border-primary flex items-center justify-center bg-primary/10">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">7.4</div>
                              <div className="text-xs text-gray-600">/ 10</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <Badge className="mb-3 bg-primary text-white">
                          GO Recommendation
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Strong Exit Position</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Your business demonstrates strong fundamentals with clear value drivers. 
                          Minor optimizations recommended before market entry.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-gray-900">$3.2M</div>
                            <div className="text-xs text-gray-600">Est. Valuation</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-gray-900">6-9</div>
                            <div className="text-xs text-gray-600">Months to Exit</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-gray-900">85%</div>
                            <div className="text-xs text-gray-600">Success Probability</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Findings */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Findings</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">Strong recurring revenue model with 92% customer retention</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">Well-diversified customer base across 3 key verticals</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">Management team depth could be strengthened pre-exit</span>
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

      {/* Sample Report Modal */}
      <Dialog open={isReportModalOpen} onOpenChange={handleCloseReportModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900">
              Download Sample Report
            </DialogTitle>
          </DialogHeader>
          
          {!isReportSubmitted ? (
            <form onSubmit={reportForm.handleSubmit(onReportSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="modal-firstName">First Name *</Label>
                  <Input
                    {...reportForm.register("firstName")}
                    placeholder="Enter first name"
                    className={reportForm.formState.errors.firstName ? "border-red-500" : ""}
                  />
                  {reportForm.formState.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{reportForm.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="modal-lastName">Last Name *</Label>
                  <Input
                    {...reportForm.register("lastName")}
                    placeholder="Enter last name"
                    className={reportForm.formState.errors.lastName ? "border-red-500" : ""}
                  />
                  {reportForm.formState.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{reportForm.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="modal-email">Business Email *</Label>
                <Input
                  {...reportForm.register("email")}
                  type="email"
                  placeholder="Enter your business email"
                  className={reportForm.formState.errors.email ? "border-red-500" : ""}
                />
                {reportForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{reportForm.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="modal-companyName">Company Name *</Label>
                <Input
                  {...reportForm.register("companyName")}
                  placeholder="Enter your company name"
                  className={reportForm.formState.errors.companyName ? "border-red-500" : ""}
                />
                {reportForm.formState.errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{reportForm.formState.errors.companyName.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={reportMutation.isPending}
              >
                {reportMutation.isPending ? (
                  "Sending Report..."
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Get Sample Report
                  </>
                )}
              </Button>

              {reportMutation.error && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Sent!</h3>
              <p className="text-gray-600">Check your email for the download link.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}