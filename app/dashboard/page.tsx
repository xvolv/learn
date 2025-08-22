"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  return (
    <div className="w-[200px] h-[400px] bg-gradient-to-b from-black via-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 flex flex-col items-center justify-between p-3 text-white overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-lg font-bold flex items-center gap-1 justify-center">
          <Sparkles className="text-yellow-300 w-4 h-4" />
          Zodiac Hub
        </h1>
        <p className="text-gray-400 text-xs mt-1">Decode your sign 🌌</p>
      </motion.div>

      {/* Zodiac list (scrollable if needed) */}
      <div className="flex-1 w-full mt-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        <div className="grid grid-cols-1 gap-2 px-2">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, type: "spring" }}
              className="relative group p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 shadow-md hover:shadow-lg border border-gray-600 hover:border-purple-500 cursor-pointer transition"
            >
              <h2 className="text-sm font-medium group-hover:text-purple-300">
                {sign}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 mt-2">
        <span className="text-purple-400">Nerdy Astro™</span>
      </div>
    </div>
  );
};

export default Dashboard;
