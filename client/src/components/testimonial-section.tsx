import { motion } from "framer-motion";

export default function TestimonialSection() {
  const results = [
    { value: "40%", label: "Valuation increase" },
    { value: "18", label: "Months to exit" },
    { value: "3", label: "Critical improvements" },
    { value: "$24M", label: "Final exit value" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-16 rounded-2xl shadow-soft border"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-8">"Finally, a clear path forward"</div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "After years of wondering if we were ready to sell, ExitClarity gave us the clarity we needed. We identified three critical areas to improve and increased our valuation by 40% over 18 months."
              </p>
              <div className="mb-6">
                <div className="text-xl font-semibold text-foreground">Sarah Chen, CEO</div>
                <div className="text-lg text-muted-foreground">TechStart Solutions</div>
                <div className="text-sm text-primary font-medium">$23M Exit • 2025</div>
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
                  className="bg-gradient-to-br from-primary/5 to-accent/5 text-center p-6 rounded-xl border"
                >
                  <div className="text-5xl font-bold text-primary mb-2">{result.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
