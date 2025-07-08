import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              ExitClarity
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Benefits
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection("final-cta")}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Schedule Demo
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left"
              >
                Benefits
              </button>
              <Button 
                onClick={() => scrollToSection("final-cta")}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg mt-4"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
