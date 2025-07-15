import { motion } from "framer-motion";
import exitClarityLogo from "@assets/Exit Clarity Logo_1752099881839.png";

export default function HeroMacBook() {
  return (
    <div className="hero-macbook-container">
      {/* Realistic MacBook */}
      <motion.div
        className="macbook"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="macbook-lid">
          <div className="macbook-screen">
            <div className="screen-content">
              <div className="assessment-interface">
                {/* Header */}
                <div className="dashboard-header">
                  <div className="header-left">
                    <img src={exitClarityLogo} alt="ExitClarity" className="dashboard-logo" />
                  </div>
                  <div className="header-right">
                    <div className="time-remaining">
                      <span className="time-text">Est. 9 mins remaining</span>
                      <div className="time-indicator">
                        <div className="time-dot"></div>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <span className="progress-text">8 of 11</span>
                  </div>
                </div>

                {/* Content */}
                <div className="interface-content">
                  <div className="content-header">
                    <h2 className="main-title">Exit Readiness Platform</h2>
                    <p className="subtitle">Comprehensive analysis across 11 critical factors</p>
                  </div>

                  <div className="assessment-grid">
                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Documentation Preparedness</div>
                        <div className="item-step">Step 6 of 11 • Records, contracts & compliance</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Team & Transition Risk</div>
                        <div className="item-step">Step 7 of 11 • Employment & succession planning</div>
                      </div>
                    </div>

                    <div className="assessment-item current">
                      <div className="item-icon current">8</div>
                      <div className="item-content">
                        <div className="item-title">Previous M&A Experience</div>
                        <div className="item-step">Step 8 of 11 • Previous experience & preparation approach</div>
                        <div className="item-details">
                          <div className="detail-row">
                            <span className="detail-label">Experience Level:</span>
                            <span className="detail-value">First-time seller</span>
                          </div>
                          <div className="detail-row">
                            <span className="detail-label">Advisory Team:</span>
                            <span className="detail-value warning">Not assembled</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="assessment-item pending">
                      <div className="item-icon pending">9</div>
                      <div className="item-content">
                        <div className="item-title">Representation & Market Strategy</div>
                        <div className="item-step">Step 9 of 11 • Advisory experience & market knowledge</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="macbook-base"></div>
      </motion.div>

      {/* Subtle Assessment Complete Indicator */}
      <motion.div
        className="assessment-complete-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="assessment-complete-indicator">
          <div className="indicator-content">
            <div className="indicator-dot"></div>
            <span>In-Progress</span>
          </div>
          <div className="indicator-subtitle">Almost Ready for Strategic Review</div>
        </div>
      </motion.div>
    </div>
  );
}