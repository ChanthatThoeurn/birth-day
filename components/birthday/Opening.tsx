"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface OpeningProps {
  onStart: () => void;
}

export default function Opening({ onStart }: OpeningProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="rounded-full border border-pink-500/30 bg-pink-500/10 p-6">
            <Heart
              className="h-12 w-12 fill-pink-500 text-pink-500"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-300"
        >
          ការភ្ញាក់ផ្អើលតូចមួយសម្រាប់អូន
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-4xl font-bold md:text-6xl"
        >
          បងបានបង្កើតអ្វីមួយ
          <span className="block text-pink-500">យ៉ាងពិសេសសម្រាប់អូន។</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mx-auto mt-6 max-w-lg text-gray-400"
        >
          ចំណាយពេលបន្តិច ពាក់កាសរបស់អ្នក ហើយបើកមើលការភ្ញាក់ផ្អើលរបស់អូន។
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 font-semibold shadow-lg shadow-pink-500/30 transition hover:bg-pink-400"
        >
          <Sparkles size={20} />
          បើកមើលការដូរបស់អូន
          <Heart size={18} fill="currentColor" />
        </motion.button>
      </div>
    </main>
  );
}