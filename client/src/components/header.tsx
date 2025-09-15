import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import exitClarityLogo from "@assets/Exit Clarity Logo_1752080496814.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between h-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={exitClarityLogo} alt="ExitClarity" className="h-8 w-auto" />
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={handleCTAClick}
            variant="hero"
            className="font-semibold px-6 py-3 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
