export function ProblemSection() {
  return (
    <section className="py-12 bg-blue-700" style={{ backgroundColor: '#1e40af' }}>
      <div className="container mx-auto px-6">
        {/* Main Problem Statement */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6" style={{ lineHeight: '1.4' }}>
            Most Business Owners Aren't Ready When Opportunity Knocks
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="text-5xl font-bold text-red-600 mb-3">80%</div>
            <p className="text-gray-700 font-medium">of business owners have no exit strategy</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="text-5xl font-bold text-red-600 mb-3">$10M+</div>
            <p className="text-gray-700 font-medium">average value left on the table</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="text-5xl font-bold text-blue-600 mb-3">18-24</div>
            <p className="text-gray-700 font-medium">months typical prep time needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}