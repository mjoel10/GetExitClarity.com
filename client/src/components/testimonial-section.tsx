import { motion } from "framer-motion";

export default function TestimonialSection() {
  const results = [
    { value: "40%", label: "Valuation increase" },
    { value: "18", label: "Months to exit" },
    { value: "3", label: "Critical improvements" },
    { value: "$24M", label: "Final exit value" }
  ];

  return (
    <section className="loveable-section-padding loveable-section-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="loveable-card p-16"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="loveable-testimonial-quote mb-8">"Finally, a clear path forward"</div>
              <p className="loveable-testimonial-content mb-8">
                "After years of wondering if we were ready to sell, ExitClarity gave us the clarity we needed. We identified three critical areas to improve and increased our valuation by 40% over 18 months."
              </p>
              <div className="mb-6">
                <div className="loveable-testimonial-name text-xl">Sarah Chen</div>
                <div className="loveable-testimonial-role text-lg">CEO, TechStart Solutions</div>
                <div className="loveable-testimonial-company text-sm">$24M Exit • 2023</div>
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
                  className="loveable-stat-card text-center p-6"
                >
                  <div className="loveable-stat-number text-5xl mb-2">{result.value}</div>
                  <div className="loveable-stat-label text-sm uppercase tracking-wider">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
