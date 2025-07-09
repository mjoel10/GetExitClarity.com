import { motion } from "framer-motion";

export default function HeroMobile() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Simplified Assessment Card for Mobile */}
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-primary font-semibold text-sm">ExitClarity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-600">7 of 11</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-primary mb-2">
            Exit Readiness Assessment
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            Comprehensive analysis across 11 critical factors
          </p>
        </div>

        {/* Progress Items */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg border-l-2 border-green-500">
            <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-900">Business Overview</p>
              <p className="text-xs text-gray-600">Step 1 of 11 • Contact information & business basics</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg border-l-2 border-blue-500">
            <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">7</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-900">Exit Goals & Timeline</p>
              <p className="text-xs text-gray-600">Step 2 of 11 • Your exit objectives and desired timeline</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-2 border-gray-300">
            <div className="w-4 h-4 bg-gray-300 rounded-sm flex items-center justify-center">
              <span className="text-gray-600 text-xs">8</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500">Financial Performance</p>
              <p className="text-xs text-gray-400">Step 3 of 11 • Revenue, profitability & growth trends</p>
            </div>
          </div>
        </div>

        {/* Completion Badge */}
        <motion.div
          className="absolute -bottom-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Assessment Complete
        </motion.div>
      </motion.div>
    </div>
  );
}