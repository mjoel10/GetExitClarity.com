import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Calendar, FileText, Play } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  message: z.string().optional(),
  requestType: z.enum(["demo", "sample_report", "assessment"])
});

type FormData = z.infer<typeof formSchema>;

export default function FinalCTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<"demo" | "sample_report" | "assessment">("demo");
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      requestType: "demo"
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/demo-request", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Request submitted successfully!",
        description: "We'll be in touch within 24 hours to schedule your demo.",
      });
      form.reset();
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error submitting request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const openDialog = (type: "demo" | "sample_report" | "assessment") => {
    setRequestType(type);
    form.setValue("requestType", type);
    setIsDialogOpen(true);
  };

  const maFeatures = [
    "Qualify prospects 3x faster with objective scoring",
    "Generate white-labeled reports to build trust early",
    "Track pipeline progress with CRM integration",
    "Close deals faster with better-prepared clients"
  ];

  const ownerFeatures = [
    "Get clear GO/FIX/WAIT recommendation with rationale",
    "Understand your valuation range and value drivers",
    "Identify and mitigate deal-killing risks early",
    "Build confidence and control in your exit process"
  ];

  return (
    <section id="final-cta" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Start Turning Exit Conversations Into <span className="text-primary">Strategic Wins</span>
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-4xl mx-auto">
            Whether you're advising or preparing to sell, ExitClarity brings structure, insight, and confidence to every step of the journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => openDialog("demo")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Demo
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => openDialog("sample_report")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-10 py-4 rounded-lg transition-all duration-200"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  See Sample Report
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => openDialog("assessment")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-10 py-4 rounded-lg transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Assessment
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    {requestType === "demo" && "Schedule Your Demo"}
                    {requestType === "sample_report" && "Request Sample Report"}
                    {requestType === "assessment" && "Start Your Assessment"}
                  </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} />
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
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your specific needs..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">For M&A Professionals</h3>
              <p className="text-gray-600 mb-6">Transform your practice with systematic prospect qualification, automated nurturing, and higher-quality deal flow.</p>
              <ul className="space-y-2 text-gray-600">
                {maFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1 h-1 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">For Business Owners</h3>
              <p className="text-gray-600 mb-6">Gain clarity on your exit readiness, understand your value, and build a strategic roadmap for maximum return.</p>
              <ul className="space-y-2 text-gray-600">
                {ownerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1 h-1 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
