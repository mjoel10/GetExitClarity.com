import React from 'react';
import exitClarityLogo from "@assets/Exit Clarity Logo_1752080496814.png";

export default function ProgressDashboard() {
  return (
    <div className="dashboard-container">
      {/* Floating Badges */}
      <div className="floating-badge badge-score">92% Ready</div>
      <div className="floating-badge badge-clients">48 Reports</div>
      <div className="floating-badge badge-alerts">⚡ 3 Alerts</div>

      {/* Header */}
      <div className="dashboard-header">
        <div className="header-top">
          <img src={exitClarityLogo} alt="ExitClarity" className="logo-image" />
          <div className="user-info">Expert Advisory Dashboard</div>
        </div>
        <div className="dashboard-title">Progress Tracking Dashboard</div>
        <div className="dashboard-subtitle">Review and enhance client exit assessment reports</div>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card warning">
            <div className="stat-number">48</div>
            <div className="stat-label">Pending Review</div>
          </div>
          <div className="stat-card primary">
            <div className="stat-number">0</div>
            <div className="stat-label">Under Review</div>
          </div>
          <div className="stat-card success">
            <div className="stat-number">156</div>
            <div className="stat-label">Expert Enhanced</div>
          </div>
          <div className="stat-card primary">
            <div className="stat-number">204</div>
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

      {/* Action Bar */}
      <div className="action-bar">
        <div className="action-content">
          <div className="action-stats">
            <div className="action-stat">
              <div className="action-number">3x</div>
              <div className="action-label">Faster Progress</div>
            </div>
            <div className="action-stat">
              <div className="action-number">85%</div>
              <div className="action-label">Time Saved</div>
            </div>
            <div className="action-stat">
              <div className="action-number">95%</div>
              <div className="action-label">Client Success</div>
            </div>
          </div>
          <button className="action-button">View All</button>
        </div>
      </div>
    </div>
  );
}