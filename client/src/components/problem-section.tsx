export function ProblemSection() {
  return (
    <section className="py-20 lg:py-24 bg-blue-700" style={{ backgroundColor: '#1e40af' }}>
      <div className="container mx-auto px-6">
        {/* Main Problem Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ lineHeight: '1.3' }}>
            Most Business Owners Aren't Ready When Opportunity Knocks
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl p-12 shadow-lg border text-center">
            <div className="text-3xl font-bold text-red-600 mb-4">80%</div>
            <p className="text-gray-700 text-sm">of business owners have no exit strategy</p>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-lg border text-center">
            <div className="text-3xl font-bold text-red-600 mb-4">$10M+</div>
            <p className="text-gray-700 text-sm">average value left on the table</p>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-lg border text-center">
            <div className="text-3xl font-bold text-blue-600 mb-4">18-24</div>
            <p className="text-gray-700 text-sm">months typical prep time needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}