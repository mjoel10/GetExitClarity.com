import { Link } from "wouter";
import { Mail, Phone, Calendar, Linkedin } from "lucide-react";
import exitClarityLogo from "@assets/Exit Clarity Logo White_1752106228914.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'hsl(218, 100%, 25%)',
      color: 'white',
      padding: '4rem 0 2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <img 
                src={exitClarityLogo} 
                alt="ExitClarity" 
                style={{
                  height: '32px',
                  width: 'auto'
                }}
              />
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Empowering M&A professionals and business owners with intelligent exit strategy planning tools and data-driven insights.
            </p>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem'
            }}>
              © 2025 ExitClarity. All rights reserved.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link 
                href="/" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Home
              </Link>
              <Link 
                href="/platform/ma-firms" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                For M&A Firms
              </Link>
              <Link 
                href="/platform/business-owners" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                For Business Owners
              </Link>
              <Link 
                href="/about" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                About
              </Link>
              <Link 
                href="/resources" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Resources
              </Link>
              <Link 
                href="/contact" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Get Started Column */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Get Started
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link 
                href="/trial-request"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Try It with a Client
              </Link>
              <Link 
                href="/sample-report"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                View Sample Report
              </Link>
              <a 
                href="https://calendly.com/exitclarity-info/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Schedule Demo
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a 
                href="mailto:info@exitclarity.io" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                <Mail style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                info@exitclarity.io
              </a>
              <a 
                href="https://linkedin.com/company/exitclarity" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                <Linkedin style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link 
                href="/privacy" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Cookie Policy
              </Link>
              <Link 
                href="/security" 
                onClick={scrollToTop}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(210, 100%, 70%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Security
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}>
            Built for M&A professionals and business owners seeking clarity in their exit strategy.
          </p>
        </div>
      </div>
    </footer>
  );
}