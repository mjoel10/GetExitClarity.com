import React from 'react';

export default function StrategicReportCard() {
  return (
    <div className="new-report-container">
      {/* Floating Elements */}
      <div className="floating-element element-2">8-14 Months</div>

      {/* Document Header */}
      <div className="new-report-header">
        <div className="header-top">
        </div>
        <h1 className="document-title">Comprehensive Exit Readiness & Valuation Report</h1>
        <div className="company-info">TechFlow Solutions • Manufacturing Technology • $8M Revenue • January 2025</div>
      </div>

      {/* Document Content */}
      <div className="new-report-content">
        <div className="section">
          <div className="section-header">
            <div className="section-number">##</div>
            <div className="section-title">Executive Summary</div>
          </div>
          <div className="section-content">
            <div className="paragraph">
              Based on our comprehensive assessment yielding an Overall Exit Readiness Score of 82/100, we recommend <strong style={{ color: '#10b981' }}>GO</strong> for TechFlow Solutions' market exit strategy. This score reflects strong fundamentals balanced against identified optimization opportunities for this established manufacturing technology company.
            </div>
            <div className="paragraph">
              TechFlow Solutions, under CEO Sarah Mitchell's leadership, has built a compelling value proposition in the industrial automation space over 18 years...
            </div>
            <div className="key-metrics">
              • Enterprise Value: $9.6M-$16.8M
              • Revenue Multiple: 1.2-2.1x
              • EBITDA Multiple: 4-7x
              • Customer Retention: 94%
            </div>
          </div>
        </div>

        <div className="highlight-box">
          <div className="recommendation-header">
            <div className="recommendation-icon">GO</div>
            <div className="recommendation-title">Strategic Recommendation: Proceed to Market</div>
          </div>
          <div className="recommendation-text">
            Given the company's manufacturing technology focus, we estimate a valuation range of 3.0-4.5x EBITDA ($7.2M-$10.8M), reflecting strong growth potential and market position. The company's expanding automation solutions align well with current market demand.
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-item">
            <div className="metric-value">$7.2-10.8M</div>
            <div className="metric-label">Valuation Range</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">8-14 Mo</div>
            <div className="metric-label">Timeline Est</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">82/100</div>
            <div className="metric-label">Readiness Score</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">Medium Risk</div>
            <div className="metric-label">Deal Risk</div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="section-number">##</div>
            <div className="section-title">Key Financial Metrics</div>
          </div>
          <div className="section-content">
            <div className="paragraph">
              <strong>Revenue:</strong> $8,000,000 (growing 15-20% YOY)<br/>
              <strong>Adjusted EBITDA:</strong> $2,400,000<br/>
              <strong>EBITDA Margin:</strong> 30.0%<br/>
              <strong>Customer Concentration:</strong> 15% (manageable diversification)<br/>
              <strong>Owner Dependence:</strong> 35% (moderate)
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="section-number">##</div>
            <div className="section-title">Primary Value Drivers</div>
          </div>
          <div className="section-content">
            <div className="paragraph">
              1. <strong>Market-Leading Technology:</strong> 18-year track record in industrial automation solutions<br/>
              2. <strong>Strong Growth Trajectory:</strong> 15-20% annual revenue growth with expanding market share<br/>
              3. <strong>Proprietary IP Portfolio:</strong> 12 patents in manufacturing automation technology<br/>
              4. <strong>Experienced Management Team:</strong> Including CTO David Park and VP Operations Lisa Chen<br/>
              5. <strong>Scalable Operations:</strong> Modern facilities and ERP systems supporting growth
            </div>
          </div>
        </div>

        <div className="next-steps">
          <div className="next-steps-title">
            🔔 Critical Next Steps (8-14 Month Timeline)
          </div>
          <ul className="step-list">
            <li><strong>Management Transition Planning (45 days)</strong> - Reduce owner dependence through team development</li>
            <li><strong>Customer Diversification Strategy (90 days)</strong> - Expand beyond top 3 customers for risk mitigation</li>
            <li><strong>Strategic Buyer Targeting (120 days)</strong> - Focus on industrial automation and tech consolidators</li>
          </ul>
        </div>

        <div className="document-fade"></div>
      </div>
    </div>
  );
}