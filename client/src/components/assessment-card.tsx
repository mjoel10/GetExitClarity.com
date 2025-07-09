import React from 'react';

export default function AssessmentCard() {
  return (
    <div className="assessment-card">
      {/* Floating Badges */}
      <div className="floating-badge badge-1">85% Complete</div>
      <div className="floating-badge badge-2">✓ On Track</div>

      {/* Header */}
      <div className="card-header">
        <div className="logo-icon">✓</div>
        <div className="logo-text">ExitClarity</div>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <div className="progress-title">Assessment Progress: 85%</div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        <div className="content-column">
          <h4>Categories Completed</h4>
          <div className="checklist-item completed">
            <div className="check-icon">✓</div>
            <span>Financial Quality</span>
          </div>
          <div className="checklist-item completed">
            <div className="check-icon">✓</div>
            <span>Operational Maturity</span>
          </div>
          <div className="checklist-item completed">
            <div className="check-icon">✓</div>
            <span>Documentation</span>
          </div>
        </div>

        <div className="content-column">
          <h4>Remaining Steps</h4>
          <div className="checklist-item pending">
            <div className="pending-icon"></div>
            <span>Market Analysis</span>
          </div>
          <div className="checklist-item pending">
            <div className="pending-icon"></div>
            <span>Strategic Planning</span>
          </div>
          <div className="checklist-item pending">
            <div className="pending-icon"></div>
            <span>Final Review</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">8 of 11</div>
          <div className="stat-label">factors</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">23 min</div>
          <div className="stat-label">remaining</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">SaaS</div>
          <div className="stat-label">Industry</div>
        </div>
      </div>

      {/* Reviewer */}
      <div className="reviewer-section">
        <div className="reviewer-info">
          <div className="reviewer-avatar">MJ</div>
          <div className="reviewer-details">
            <div className="reviewer-title">Reviewed by</div>
            <div className="reviewer-name">Senior M&A Advisor</div>
          </div>
        </div>
        <div className="status-badge">
          <div className="status-dot"></div>
          Active
        </div>
      </div>
    </div>
  );
}