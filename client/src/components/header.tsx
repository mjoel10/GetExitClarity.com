import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Lock } from "lucide-react";
import exitClarityLogo from "@assets/Exit Clarity Logo_1752080496814.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    window.location.href = 'https://app.exitclarity.io/owner-signup';
  };

  const handleSignInClick = () => {
    window.location.href = 'https://app.exitclarity.io/auth';
  };

  const navItems = [
    { label: "Home", href: "https://exitclarity.io" },
    { 
      label: "Platform", 
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "M&A Professionals", href: "https://www.exitclarity.io/platform/ma-professionals" },
        { label: "Business Owners", href: "https://www.exitclarity.io/platform/business-owners" },
        { label: "Sample Report", href: "https://exitclarity.io/sample-report" }
      ]
    },
    { label: "Pricing", href: "https://exitclarity.io/pricing" },
    { 
      label: "Resources", 
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Blog", href: "https://exitclarity.io/blog" },
        { label: "Resource Center", href: "https://exitclarity.io/resources" }
      ]
    },
    { label: "About", href: "https://exitclarity.io/about" },
    { label: "Contact", href: "https://exitclarity.io/contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between h-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="https://www.exitclarity.io/" className="flex items-center">
              <img src={exitClarityLogo} alt="ExitClarity" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={handleGetStartedClick}
              className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary/90 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a 
                    href={item.href}
                    className="block text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block text-gray-600 hover:text-primary transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Button 
                  onClick={handleGetStartedClick}
                  className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary/90 transition-all duration-200"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
