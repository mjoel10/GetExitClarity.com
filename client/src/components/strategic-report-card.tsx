import React from 'react';

export default function StrategicReportCard() {
  return (
    <div className="report-container">
      {/* Floating Badges */}
      <div className="floating-badge badge-go">GO ✓</div>
      <div className="floating-badge badge-score">76/100 Score</div>
      <div className="floating-badge badge-ready">Market Ready</div>

      {/* Header */}
      <div className="report-header">
        <div className="header-top">
          <div className="logo">
            <div className="logo-icon">✓</div>
            ExitClarity
          </div>
          <div className="report-id">Report #168</div>
        </div>
        <div className="report-title">Strategic Analysis Report</div>
        <div className="company-info">Apex International • Financial Services • $17M Revenue</div>
      </div>

      {/* Content */}
      <div className="report-content">
        {/* Executive Summary */}
        <div className="summary-section">
          <div className="section-title">
            <div className="section-icon">📊</div>
            Executive Summary
          </div>
          
          <div className="recommendation-card">
            <div className="recommendation-badge">GO</div>
            <div className="recommendation-text">Ready for market entry</div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">$18-25M</div>
            <div className="metric-label">Valuation Range</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">6-12 Mo</div>
            <div className="metric-label">Timeline Est.</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">76/100</div>
            <div className="metric-label">Readiness Score</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">Low Risk</div>
            <div className="metric-label">Deal Risk</div>
          </div>
        </div>

        {/* Action Items */}
        <div className="action-section">
          <div className="section-title">
            <div className="section-icon">🎯</div>
            Critical Next Steps
          </div>
          
          <div className="action-item">
            <div className="action-number">1</div>
            <div className="action-content">
              <div className="action-title">Engage M&A Advisor</div>
              <div className="action-description">Focus on advisor quality given mixed past experiences</div>
            </div>
          </div>

          <div className="action-item">
            <div className="action-number">2</div>
            <div className="action-content">
              <div className="action-title">Valuation Gap Strategy</div>
              <div className="action-description">Develop earnout structure for significant earnout tolerance</div>
            </div>
          </div>

          <div className="action-item">
            <div className="action-number">3</div>
            <div className="action-content">
              <div className="action-title">Strategic Positioning</div>
              <div className="action-description">Enhance competitive positioning before market entry</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="stats-footer">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">15-20</div>
            <div className="stat-label">Report Pages</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3-5 Days</div>
            <div className="stat-label">Delivery Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">M&A Ready</div>
            <div className="stat-label">Status</div>
          </div>
        </div>
      </div>
    </div>
  );
}