"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stars } from "lucide-react";

const LeftSection = () => {
  return (
    <div className="w-[400px] h-[170px] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700 p-4 text-white flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <Stars className="w-5 h-5 text-purple-400" />
        <h2 className="text-base font-bold">Daily Cosmic Insight</h2>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-gray-300 leading-snug"
      >
        “Today, align your thoughts with your goals — the stars favor those
        who take bold steps.” ✨
      </motion.div>

      {/* Footer */}
      <div className="flex justify-end text-xs text-gray-500">
        powered by <span className="ml-1 text-purple-400">Nerdy Astro™</span>
      </div>
    </div>
  );
};

export default LeftSection;
