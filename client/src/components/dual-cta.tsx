import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight } from "lucide-react";

interface DualCTAProps {
  className?: string;
  variant?: 'centered' | 'inline';
}

export function DualCTA({ className = "", variant = 'centered' }: DualCTAProps) {
  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
        <Button variant="hero" size="lg" className="group">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Demo
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg" className="group">
          <FileText className="mr-2 h-4 w-4" />
          View Sample Report
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="group">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Demo
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg" className="group">
          <FileText className="mr-2 h-4 w-4" />
          View Sample Report
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}