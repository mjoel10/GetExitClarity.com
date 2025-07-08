import { motion } from "framer-motion";

export default function TestimonialSection() {
  const results = [
    { value: "40%", label: "Valuation increase" },
    { value: "18", label: "Months to exit" },
    { value: "3", label: "Critical improvements" },
    { value: "$24M", label: "Final exit value" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-6">"Finally, a clear path forward"</div>
              <p className="text-lg text-gray-600 mb-8 italic">
                "After years of wondering if we were ready to sell, ExitClarity gave us the clarity we needed. We identified three critical areas to improve and increased our valuation by 40% over 18 months."
              </p>
              <div className="mb-6">
                <div className="font-bold text-gray-900 text-lg">Sarah Chen</div>
                <div className="text-gray-600">CEO, TechStart Solutions</div>
                <div className="text-gray-500 text-sm">$24M Exit • 2023</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                  <div className="text-gray-600">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
