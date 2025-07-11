import { TrendingUp, Clock, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';

export function BusinessCaseROI() {
  return (
    <section className="py-16 md:py-20" style={{ 
      backgroundColor: 'hsl(210, 20%, 96%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Transform Your Deal Pipeline
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop waiting years for prospects to get ready. Start building relationships and accelerating transactions today.
          </p>
        </div>

        {/* Main Value Proposition */}
        <div className="rounded-2xl p-6 md:p-12 text-center mb-16" style={{
          background: 'linear-gradient(135deg, hsl(218, 100%, 25%), hsl(210, 100%, 50%))',
          boxShadow: '0 20px 60px -12px hsl(218, 100%, 25%, 0.25)'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <TrendingUp style={{ 
              width: '2rem',
              height: '2rem',
              color: 'white',
              marginRight: '0.75rem'
            }} />
            <h3 className="text-2xl md:text-3xl font-bold text-white m-0">
              One Additional Deal Per Year Pays for the Platform
            </h3>
          </div>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0',
            lineHeight: '1.5'
          }}>
            Turn your biggest challenge—unready prospects—into your competitive advantage
          </p>
        </div>

        {/* Problem/Solution Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center mb-16">
          {/* Current State */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-10 relative order-1 lg:order-none">
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '2rem',
              backgroundColor: 'hsl(0, 100%, 45%)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              Current Reality
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'hsl(218, 15%, 15%)',
                marginBottom: '1.5rem'
              }}>
                The Endless Waiting Game
              </h3>
              <ul style={{
                color: 'hsl(218, 10%, 45%)',
                lineHeight: '1.6',
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: 'hsl(0, 100%, 45%)', marginRight: '0.75rem', fontSize: '1.25rem', marginTop: '0.125rem' }}>•</span>
                  <span>"We're thinking about selling in a few years"</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: 'hsl(0, 100%, 45%)', marginRight: '0.75rem', fontSize: '1.25rem', marginTop: '0.125rem' }}>•</span>
                  <span>Years of sporadic check-ins and "not quite ready yet"</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: 'hsl(0, 100%, 45%)', marginRight: '0.75rem', fontSize: '1.25rem', marginTop: '0.125rem' }}>•</span>
                  <span>Prospects choose competitors who helped them prepare</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: 'hsl(0, 100%, 45%)', marginRight: '0.75rem', fontSize: '1.25rem', marginTop: '0.125rem' }}>•</span>
                  <span>Lost deals after years of relationship building</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center items-center order-2 lg:order-none lg:px-4">
            <ArrowRight style={{ 
              width: '3rem', 
              height: '3rem', 
              color: 'hsl(218, 100%, 25%)',
              backgroundColor: 'hsl(218, 100%, 25%, 0.1)',
              padding: '0.75rem',
              borderRadius: '50%'
            }} />
          </div>

          {/* Future State */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-10 relative order-3 lg:order-none">
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '2rem',
              backgroundColor: 'hsl(218, 100%, 25%)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              With ExitClarity
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'hsl(218, 15%, 15%)',
                marginBottom: '1.5rem'
              }}>
                Proactive Partnership
              </h3>
              <ul style={{
                color: 'hsl(218, 10%, 45%)',
                lineHeight: '1.6',
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(218, 100%, 25%)', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} />
                  <span>Immediate value through readiness assessment</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(218, 100%, 25%)', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} />
                  <span>Regular engagement with clear progress milestones</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(218, 100%, 25%)', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} />
                  <span>Trusted advisor status before they're ready to sell</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(218, 100%, 25%)', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} />
                  <span>First call when they decide to move forward</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-gray-100 rounded-2xl p-6 lg:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What This Means for Your Practice
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Earlier Engagement
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Start building relationships and trust 2-3 years before traditional engagement
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Higher Conversion
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Convert more prospects by guiding them through the readiness process
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Stronger Relationships
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Become their trusted advisor through the preparation journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}