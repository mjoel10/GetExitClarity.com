import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, FileText, Clock, Users, Target, BarChart3, ArrowRight, Star, ChevronRight } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";
import { apiRequest } from "@/lib/queryClient";

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

export default function BusinessOwnersWaitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
              Early Access Preview
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Be First to Access <span className="text-primary">Professional Exit Analysis</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Join 500+ business owners preparing for successful exits with comprehensive assessment tools designed by M&A professionals.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Professional Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>30-Minute Assessment</span>
              </div>
            </div>
          </div>

          {/* Interactive Assessment Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              See What You'll Experience
            </h2>
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
                    { title: "Financial Performance", status: "completed", icon: "💰" },
                    { title: "Market Position", status: "completed", icon: "🎯" },
                    { title: "Operations", status: "completed", icon: "⚙️" },
                    { title: "Management Team", status: "completed", icon: "👥" },
                    { title: "Growth Potential", status: "completed", icon: "📈" },
                    { title: "Risk Assessment", status: "completed", icon: "🛡️" },
                    { title: "Legal Structure", status: "completed", icon: "⚖️" },
                    { title: "Technology Systems", status: "active", icon: "💻" },
                    { title: "Customer Base", status: "pending", icon: "🤝" },
                    { title: "Competitive Advantage", status: "pending", icon: "🏆" },
                    { title: "Exit Strategy", status: "pending", icon: "🚀" }
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
                        <div className={`text-2xl ${factor.status === 'active' ? 'animate-pulse' : ''}`}>
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

          {/* Assessment Preview */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              11-Step Comprehensive Assessment
            </h2>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-2xl p-6 lg:p-8">
              <div className="bg-white rounded-xl p-6">
                {/* Progress Header */}
                <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                      ⏱ 8 mins remaining
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">8 of 11</div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '73%' }}></div>
                </div>

                {/* Assessment Steps Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: "💰", title: "Financial Performance", description: "Revenue & growth metrics", completed: true },
                    { icon: "📊", title: "Market Position", description: "Competitive landscape", completed: true },
                    { icon: "⚙️", title: "Operations", description: "Systems & processes", completed: true },
                    { icon: "👥", title: "Management Team", description: "Leadership & talent", completed: true },
                    { icon: "📈", title: "Growth Potential", description: "Scalability & expansion", completed: true },
                    { icon: "🛡️", title: "Risk Assessment", description: "Risk mitigation", completed: true },
                    { icon: "⚖️", title: "Legal Structure", description: "Compliance & contracts", completed: true },
                    { icon: "💻", title: "Technology Systems", description: "IT infrastructure", active: true },
                    { icon: "🎯", title: "Customer Base", description: "Client diversification", upcoming: true },
                    { icon: "🏆", title: "Competitive Advantage", description: "Market differentiation", upcoming: true },
                    { icon: "🚀", title: "Exit Strategy", description: "Exit planning & timing", upcoming: true }
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className={`
                        p-4 rounded-lg border transition-all duration-300
                        ${step.completed ? 'bg-green-50 border-green-200' : 
                          step.active ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-200' : 
                          'bg-gray-50 border-gray-200'}
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm
                          ${step.completed ? 'bg-green-500 text-white' : 
                            step.active ? 'bg-blue-500 text-white animate-pulse' : 
                            'bg-gray-300 text-gray-600'}
                        `}>
                          {step.completed ? '✓' : step.active ? '⏳' : step.icon}
                        </div>
                        <div className="min-w-0">
                          <div className={`font-medium text-sm ${step.completed ? 'text-green-800' : step.active ? 'text-blue-800' : 'text-gray-700'}`}>
                            {step.title}
                          </div>
                          <div className={`text-xs ${step.completed ? 'text-green-600' : step.active ? 'text-blue-600' : 'text-gray-500'}`}>
                            {step.completed ? 'Complete' : step.active ? 'In Progress' : 'Pending'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Assessment Stats */}
                <div className="flex justify-center gap-8 p-4 bg-yellow-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">73%</div>
                    <div className="text-sm text-gray-600">Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">8 of 11</div>
                    <div className="text-sm text-gray-600">Factors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">22 min</div>
                    <div className="text-sm text-gray-600">Time Elapsed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">SaaS</div>
                    <div className="text-sm text-gray-600">Industry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Maximize Valuation",
                  description: "Identify value drivers and optimization opportunities before going to market"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Risk Mitigation", 
                  description: "Uncover and address potential deal-breakers early in the process"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Strategic Positioning",
                  description: "Position your business competitively for the best possible outcome"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Faster Process",
                  description: "Streamlined due diligence with organized documentation and data"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sample Report Preview */}
          <div className="max-w-5xl mx-auto mb-16">
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

          {/* Social Proof */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-gray-900">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Business Owners on Early Access
              </h3>
              <p className="text-gray-600 mb-6">
                Join successful entrepreneurs who are already preparing for their exit with professional-grade analysis
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">Based on early user feedback</span>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Simple 3-Step Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Complete Assessment",
                  description: "30-minute comprehensive evaluation covering all critical business factors"
                },
                {
                  step: "2", 
                  title: "Receive Analysis",
                  description: "Professional report with valuation insights, risks, and optimization recommendations"
                },
                {
                  step: "3",
                  title: "Optimize & Execute",
                  description: "Implement recommended improvements and proceed with confidence to market"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {index < 2 && (
                    <ChevronRight className="w-6 h-6 text-gray-400 mx-auto mt-6 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="professional-services">Professional Services</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="financial-services">Financial Services</SelectItem>
                    <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="annualRevenue">Annual Revenue Range *</Label>
                  <Select onValueChange={(value) => setValue("annualRevenue", value)}>
                    <SelectTrigger className={errors.annualRevenue ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1m">Under $1M</SelectItem>
                      <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                      <SelectItem value="3m-7m">$3M - $7M</SelectItem>
                      <SelectItem value="7m-15m">$7M - $15M</SelectItem>
                      <SelectItem value="15m-30m">$15M - $30M</SelectItem>
                      <SelectItem value="30m-plus">$30M+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.annualRevenue && (
                    <p className="text-red-500 text-sm mt-1">{errors.annualRevenue.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="ebitda">Adjusted EBITDA Range *</Label>
                  <Select onValueChange={(value) => setValue("ebitda", value)}>
                    <SelectTrigger className={errors.ebitda ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select EBITDA range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-250k">Under $250K</SelectItem>
                      <SelectItem value="250k-750k">$250K - $750K</SelectItem>
                      <SelectItem value="750k-1.5m">$750K - $1.5M</SelectItem>
                      <SelectItem value="1.5m-3m">$1.5M - $3M</SelectItem>
                      <SelectItem value="3m-7m">$3M - $7M</SelectItem>
                      <SelectItem value="7m-plus">$7M+</SelectItem>
                      <SelectItem value="not-sure">Not Sure</SelectItem>
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

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-4"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  "Joining Waitlist..."
                ) : (
                  <>
                    Join Early Access Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {mutation.error && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Card>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <p className="text-lg text-gray-600">
            Professional M&A analysis coming soon for business owners
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Join the waitlist to be notified when early access becomes available
          </p>
        </div>
      </section>
    </div>
  );
}