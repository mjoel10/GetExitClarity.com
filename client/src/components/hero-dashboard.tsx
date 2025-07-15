import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield, Target, Users, BarChart3, DollarSign, Award, Calendar } from "lucide-react";
import exitClarityLogo from "@assets/Exit Clarity Logo_1752099881839.png";

export default function HeroDashboard() {
  const metrics = [
    { icon: TrendingUp, value: "8.7", label: "Readiness Score", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: DollarSign, value: "$14.2M", label: "Est. Valuation", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Target, value: "16", label: "Months to Exit", color: "text-indigo-600", bg: "bg-indigo-50" },
    { icon: BarChart3, value: "96%", label: "Completion", color: "text-green-600", bg: "bg-green-50" }
  ];

  const assessmentSteps = [
    { title: "Financial Performance", status: "complete", score: 9.4 },
    { title: "Operational Excellence", status: "complete", score: 8.9 },
    { title: "Market Position", status: "complete", score: 8.3 },
    { title: "Management Team", status: "complete", score: 8.6 },
    { title: "Legal & Compliance", status: "complete", score: 9.1 },
    { title: "Strategic Planning", status: "complete", score: 8.2 }
  ];

  const recommendations = [
    { type: "GO", title: "Ready for market preparation", priority: "Complete" },
    { type: "OPTIMIZE", title: "Enhance customer diversification", priority: "Q2 2025" },
    { type: "STRENGTHEN", title: "Expand management bench", priority: "Q1 2025" }
  ];

  return (
    <div className="hero-dashboard-container">
      <motion.div
        className="dashboard-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Elegant Header */}
        <div className="dashboard-header">
          <div className="header-left">
            <img src={exitClarityLogo} alt="ExitClarity" className="dashboard-logo" />
            <div className="company-info">
              <h3 className="company-name">Strategic Assessment Report</h3>
              <p className="assessment-type">Comprehensive Exit Readiness Analysis</p>
            </div>
          </div>
          <div className="header-right">
            <div className="completion-badge">
              <Award className="h-4 w-4" />
              <span>Assessment Complete</span>
            </div>
          </div>
        </div>

        {/* Sophisticated Metrics Display */}
        <div className="metrics-section">
          <div className="metrics-grid">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="metric-card">
                  <div className={`metric-icon ${metric.bg}`}>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refined Assessment Overview */}
        <div className="assessment-overview">
          <div className="section-header">
            <h4 className="section-title">Assessment Categories</h4>
            <div className="completion-indicator">
              <div className="completion-bar">
                <div className="completion-fill"></div>
              </div>
              <span className="completion-text">Complete</span>
            </div>
          </div>
          
          <div className="assessment-grid">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="assessment-item">
                <div className="item-indicator">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="item-content">
                  <div className="item-title">{step.title}</div>
                  <div className="item-score">Score: {step.score}/10</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Summary */}
        <div className="executive-summary">
          <h4 className="section-title">Executive Summary</h4>
          <div className="summary-content">
            <div className="summary-item">
              <div className="summary-icon go">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="summary-text">
                <strong>Market Ready:</strong> Company demonstrates strong exit readiness across all critical factors
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon optimize">
                <Target className="h-4 w-4" />
              </div>
              <div className="summary-text">
                <strong>Value Enhancement:</strong> Strategic improvements identified for optimal positioning
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon timeline">
                <Calendar className="h-4 w-4" />
              </div>
              <div className="summary-text">
                <strong>Timeline:</strong> 12-18 month optimal exit window with current trajectory
              </div>
            </div>
          </div>
        </div>

        {/* Sophisticated Accent Elements */}
        <div className="accent-line"></div>
        <div className="corner-accent top-left"></div>
        <div className="corner-accent bottom-right"></div>
        
        {/* Floating Quality Indicators */}
        <div className="quality-seal">
          <Shield className="h-5 w-5 text-blue-600" />
          <span>Verified Analysis</span>
        </div>
        
        <div className="confidence-indicator">
          <div className="confidence-bar">
            <div className="confidence-fill"></div>
          </div>
          <span className="confidence-text">96% Confidence</span>
        </div>
      </motion.div>
    </div>
  );
}