"use client";

import { motion } from "framer-motion";
import { GiftIcon, TreePine } from "lucide-react";

export function ChristmasHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="flex justify-center gap-4 mb-6">
        <TreePine className="text-green-400" size={40} />
        <GiftIcon className="text-red-400" size={40} />
        <TreePine className="text-green-400" size={40} />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-green-400 to-blue-400 text-transparent bg-clip-text">
        Merry Christmas!
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Wishing you a magical holiday season filled with love, joy, and unforgettable moments.
        May your days be merry and bright!
      </p>
    </motion.div>
  );
}