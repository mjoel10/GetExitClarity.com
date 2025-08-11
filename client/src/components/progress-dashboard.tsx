import React from "react";

export default function ProgressDashboard() {
  return (
    <div className="dashboard-container">
      {/* Main Dashboard Content */}
      <div className="dashboard-inner">
        {/* Floating Badges */}
        <div className="floating-badge badge-clients">48 Reports</div>

        {/* Header */}
        <div className="dashboard-header">
          <div className="dashboard-title">Progress Tracking Dashboard</div>
        </div>

        {/* Content */}
        <div className="dashboard-content">
          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card warning">
              <div className="stat-number">18</div>
              <div className="stat-label">Pending Review</div>
            </div>
            <div className="stat-card primary">
              <div className="stat-number">7</div>
              <div className="stat-label">Under Review</div>
            </div>
            <div className="stat-card success">
              <div className="stat-number">35</div>
              <div className="stat-label">Delivered</div>
            </div>
            <div className="stat-card primary">
              <div className="stat-number">60</div>
              <div className="stat-label">Total Reports</div>
            </div>
          </div>

          {/* Client Progress */}
          <div className="progress-section">
            <div className="section-title">
              <div className="section-icon">📋</div>
              Client Progress Tracking
            </div>

            <div className="client-list">
              <div className="client-item">
                <div className="client-header">
                  <div className="client-name">Woodbridge International</div>
                  <div className="client-score">92%</div>
                </div>
                <div className="client-progress">
                  <div className="progress-bar">
                    <div className="progress-fill high"></div>
                  </div>
                  <div className="progress-text">Market Ready</div>
                </div>
              </div>

              <div className="client-item">
                <div className="client-header">
                  <div className="client-name">BroadcastMed Inc.</div>
                  <div className="client-score">67%</div>
                </div>
                <div className="client-progress">
                  <div className="progress-bar">
                    <div className="progress-fill medium"></div>
                  </div>
                  <div className="progress-text">Prep Phase</div>
                </div>
              </div>

              <div className="client-item">
                <div className="client-header">
                  <div className="client-name">TechStart Solutions</div>
                  <div className="client-score">34%</div>
                </div>
                <div className="client-progress">
                  <div className="progress-bar">
                    <div className="progress-fill low"></div>
                  </div>
                  <div className="progress-text">Early Stage</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
