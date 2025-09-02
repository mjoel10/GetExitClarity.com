export function ProblemSection() {
  return (
    <section className="py-16 bg-blue-700" style={{ backgroundColor: '#1e40af' }}>
      <div className="container mx-auto px-6">
        {/* Main Problem Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ lineHeight: '1.5' }}>
            Most Business Owners Aren't Ready When Opportunity Knocks
          </h2>
        </div>

        {/* Statistics - Improved Layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2" style={{ fontSize: '4rem' }}>80%</div>
            <p className="text-white text-sm" style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>of business owners have no exit strategy</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2" style={{ fontSize: '4rem' }}>$10M+</div>
            <p className="text-white text-sm" style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>average value left on the table</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2" style={{ fontSize: '4rem' }}>18-24</div>
            <p className="text-white text-sm" style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>months typical prep time needed</p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-xl text-white font-medium" style={{ lineHeight: '1.5' }}>
            Know where you stand today.
          </p>
        </div>
      </div>
    </section>
  );
}