"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function FinalScene() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, -500],
            x: Math.sin(index) * 300,
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.1,
          }}
          className="absolute text-2xl"
          style={{
            left: `${(index * 17) % 100}%`,
            bottom: "0%",
          }}
        >
          {index % 2 === 0 ? "❤️" : "✨"}
        </motion.div>
      ))}

      <div className="relative z-10 text-center">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <Heart
            className="fill-pink-500 text-pink-500"
            size={70}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 text-5xl font-black md:text-8xl"
        >
          រីករាយថ្ងៃកំណើតអូនសម្លាញ់
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-4xl font-bold text-pink-500 md:text-6xl"
        >
          ស្នេហារបស់ខ្ញុំ ❤️
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-gray-400"
        >
          សូមឲ្យឆ្នាំនេះនាំមកនូវសេចក្តីសុខ ការចងចាំដ៏ស្រស់ស្អាត ការនៅជាមួយគ្នាដ៏រំភើប និងគ្រប់ប្រការទាំងអស់ដែលអូនសម្លាញ់ប្រាថ្នា។
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex items-center justify-center gap-3 text-pink-400"
        >
          <Sparkles size={20} />
          <span>បង្កើតឡើងយ៉ាងពិសេសសម្រាប់អូន</span>
          <Sparkles size={20} />
        </motion.div>
      </div>
    </section>
  );
}