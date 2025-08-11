import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import exitClarityLogo from "@assets/Exit Clarity Logo_1752080496814.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const platformDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target as Node)) {
        setIsPlatformDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setIsResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsMenuOpen(false);
    setIsPlatformDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between h-8">
          {/* Logo Section */}
          <button onClick={() => handleNavigation("/")} className="flex items-center hover:opacity-80 transition-opacity">
            <img src={exitClarityLogo} alt="ExitClarity" className="h-8 w-auto" />
          </button>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => handleNavigation("/")} className="text-gray-600 hover:text-primary transition-colors font-medium">
              Home
            </button>
            
            {/* Platform Dropdown */}
            <div className="relative" ref={platformDropdownRef}>
              <button
                onClick={() => setIsPlatformDropdownOpen(!isPlatformDropdownOpen)}
                onMouseEnter={() => setIsPlatformDropdownOpen(true)}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors font-medium"
              >
                <span>Platform</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${
                  isPlatformDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isPlatformDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 nav-dropdown nav-dropdown-menu"
                  onMouseLeave={() => setIsPlatformDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleNavigation("/platform/ma-firms")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors w-full text-left"
                  >
                    For M&A Firms
                  </button>
                  <button 
                    onClick={() => handleNavigation("/platform/business-owners")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors w-full text-left"
                  >
                    For Business Owners
                  </button>
                  <button 
                    onClick={() => handleNavigation("/sample-report")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors w-full text-left"
                  >
                    View Sample Report
                  </button>
                </div>
              )}
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors font-medium"
              >
                <span>Resources</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${
                  isResourcesDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isResourcesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 nav-dropdown nav-dropdown-menu"
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleNavigation("/blog")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors w-full text-left"
                  >
                    Blog
                  </button>
                  <button 
                    onClick={() => handleNavigation("/resources")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors w-full text-left"
                  >
                    Resource Center
                  </button>
                </div>
              )}
            </div>
            
            <button onClick={() => handleNavigation("/about")} className="text-gray-600 hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => handleNavigation("/contact")} className="text-gray-600 hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => handleNavigation("/trial-request")}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation("/")}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left"
              >
                Home
              </button>
              
              {/* Mobile Platform Submenu */}
              <div className="pl-4 space-y-2">
                <div className="text-gray-800 font-medium">Platform</div>
                <button 
                  onClick={() => handleNavigation("/platform/ma-firms")}
                  className="block text-gray-600 hover:text-primary transition-colors pl-4 text-left"
                >
                  For M&A Firms
                </button>
                <button 
                  onClick={() => handleNavigation("/platform/business-owners")}
                  className="block text-gray-600 hover:text-primary transition-colors pl-4 text-left"
                >
                  For Business Owners
                </button>
                <button 
                  onClick={() => handleNavigation("/sample-report")}
                  className="block text-gray-600 hover:text-primary transition-colors pl-4 text-left"
                >
                  View Sample Report
                </button>
              </div>
              
              {/* Mobile Resources Submenu */}
              <div className="pl-4 space-y-2">
                <div className="text-gray-800 font-medium">Resources</div>
                <button 
                  onClick={() => handleNavigation("/blog")}
                  className="block text-gray-600 hover:text-primary transition-colors pl-4 text-left"
                >
                  Blog
                </button>
                <button 
                  onClick={() => handleNavigation("/resources")}
                  className="block text-gray-600 hover:text-primary transition-colors pl-4 text-left"
                >
                  Resource Center
                </button>
              </div>
              
              <button 
                onClick={() => handleNavigation("/about")}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              
              <Button 
                onClick={() => {
                  handleNavigation("/trial-request");
                  setIsMenuOpen(false);
                }}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
