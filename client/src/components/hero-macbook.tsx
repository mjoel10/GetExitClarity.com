import { motion } from "framer-motion";

export default function HeroMacBook() {
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Realistic MacBook */}
      <motion.div
        className="macbook"
        initial={{ opacity: 0, rotateX: 0, rotateY: 0 }}
        animate={{ opacity: 1, rotateX: 5, rotateY: -5, rotateZ: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="macbook-lid">
          <div className="macbook-screen">
            <div className="screen-content">
              <div className="assessment-interface">
                {/* Header */}
                <div className="interface-header">
                  <div className="logo-section">
                    <div className="logo-icon">✓</div>
                    <span>ExitClarity</span>
                  </div>
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <span>7 of 11</span>
                  </div>
                </div>

                {/* Content */}
                <div className="interface-content">
                  <div className="content-header">
                    <h2 className="main-title">Exit Readiness Assessment</h2>
                    <p className="subtitle">Comprehensive analysis across 11 critical factors</p>
                  </div>

                  <div className="assessment-grid">
                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Business Overview</div>
                        <div className="item-step">Step 1 of 11 • Contact information & business details</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Exit Goals & Timeline</div>
                        <div className="item-step">Step 2 of 11 • Your exit objectives and timeline</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Personal & Emotional Readiness</div>
                        <div className="item-step">Step 3 of 11 • Personal preparedness for exit</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Financial Quality</div>
                        <div className="item-step">Step 4 of 11 • Revenue stability & profitability</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Operational Maturity</div>
                        <div className="item-step">Step 5 of 11 • Systems, processes & scalability</div>
                      </div>
                    </div>

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
                      </div>
                    </div>

                    <div className="assessment-item pending">
                      <div className="item-icon pending">9</div>
                      <div className="item-content">
                        <div className="item-title">Representation & Market Strategy</div>
                        <div className="item-step">Step 9 of 11 • Advisory experience & market knowledge</div>
                      </div>
                    </div>

                    <div className="assessment-item pending">
                      <div className="item-icon pending">10</div>
                      <div className="item-content">
                        <div className="item-title">Deal Structure & Risk</div>
                        <div className="item-step">Step 10 of 11 • Deal terms & risk preferences</div>
                      </div>
                    </div>

                    <div className="assessment-item pending">
                      <div className="item-icon pending">11</div>
                      <div className="item-content">
                        <div className="item-title">Business Continuity & Post-Sale</div>
                        <div className="item-step">Step 11 of 11 • Operations management & exit planning</div>
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
        className="absolute bottom-[-20px] right-[20px] md:right-[50px] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ maxWidth: "calc(100% - 40px)" }}
      >
        <div className="assessment-complete-indicator">
          <div className="indicator-content">
            <div className="indicator-dot"></div>
            <span>Assessment Complete</span>
          </div>
          <div className="indicator-subtitle">Ready for Strategic Review</div>
        </div>
      </motion.div>
    </div>
  );
}