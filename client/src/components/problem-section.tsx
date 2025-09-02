export function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Problem Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Most Business Owners Aren't Ready When Opportunity Knocks
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="text-4xl font-bold text-red-600 mb-3">75%</div>
            <p className="text-gray-700 font-medium">of owners regret selling when they did</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="text-4xl font-bold text-red-600 mb-3">20%</div>
            <p className="text-gray-700 font-medium">of businesses that go to market actually sell</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
            <div className="text-4xl font-bold text-blue-600 mb-3">2-5</div>
            <p className="text-gray-700 font-medium">years average prep time for maximum value</p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-xl text-gray-700 font-medium">
            Don't leave millions on the table. Know where you stand today.
          </p>
        </div>
      </div>
    </section>
  );
}