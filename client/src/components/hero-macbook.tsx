import { motion } from "framer-motion";

export default function HeroMacBook() {
  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
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
                    <span>8 of 11</span>
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
                        <div className="item-step">Step 1 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Financial Health</div>
                        <div className="item-step">Step 2 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Operations & Systems</div>
                        <div className="item-step">Step 3 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Management Team</div>
                        <div className="item-step">Step 4 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Market Position</div>
                        <div className="item-step">Step 5 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Customer Base</div>
                        <div className="item-step">Step 6 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item completed">
                      <div className="item-icon completed">✓</div>
                      <div className="item-content">
                        <div className="item-title">Legal & Compliance</div>
                        <div className="item-step">Step 7 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item current">
                      <div className="item-icon current">8</div>
                      <div className="item-content">
                        <div className="item-title">Owner Readiness</div>
                        <div className="item-step">Step 8 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item pending">
                      <div className="item-icon pending">9</div>
                      <div className="item-content">
                        <div className="item-title">Strategic Options</div>
                        <div className="item-step">Step 9 of 11</div>
                      </div>
                    </div>

                    <div className="assessment-item pending">
                      <div className="item-icon pending">10</div>
                      <div className="item-content">
                        <div className="item-title">Risk Assessment</div>
                        <div className="item-step">Step 10 of 11</div>
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
        className="absolute bottom-[-20px] right-[50px] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
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