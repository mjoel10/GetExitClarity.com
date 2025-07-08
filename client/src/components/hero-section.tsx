import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertDemoRequestSchema } from "@shared/schema";
import { z } from "zod";

const formSchema = insertDemoRequestSchema.extend({
  requestType: z.enum(["demo", "sample_report", "assessment"]),
});

type FormData = z.infer<typeof formSchema>;

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    requestType: "demo",
  });
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("/api/demo-request", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Request submitted successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        requestType: "demo",
      });
    },
    onError: () => {
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const openModal = (type: "demo" | "sample_report" | "assessment") => {
    setFormData({ ...formData, requestType: type });
    setIsModalOpen(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800">ExitClarity</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#problem" className="text-gray-600 hover:text-blue-600 transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">
                Solution
              </a>
              <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">
                Process
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
            </nav>
            <Button 
              variant="professional" 
              size="sm"
              onClick={() => openModal("demo")}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  30+ Years M&A Experience
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Exit Readiness Into{" "}
                <span className="text-blue-600">High-Confidence</span>{" "}
                <span className="text-blue-600">Deals</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ExitClarity provides M&A professionals and business owners with data-driven insights 
                to assess exit readiness across 11 critical factors, enabling strategic decisions 
                that maximize transaction value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => openModal("demo")}
                >
                  Schedule Demo
                </Button>
                <Button 
                  variant="professional" 
                  size="xl"
                  onClick={() => openModal("sample_report")}
                >
                  View Sample Report
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  500+ Deals Analyzed
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  11 Readiness Factors
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  Expert Insights
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Exit Readiness Assessment
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Financial Performance</span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                          <div className="w-3/4 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Market Position</span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                          <div className="w-4/5 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Operational Efficiency</span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                          <div className="w-2/3 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Risk Management</span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                          <div className="w-3/5 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Overall Readiness</span>
                      <span className="text-xl font-bold text-blue-600">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">
              {formData.requestType === "demo" && "Schedule Demo"}
              {formData.requestType === "sample_report" && "Request Sample Report"}
              {formData.requestType === "assessment" && "Start Assessment"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}