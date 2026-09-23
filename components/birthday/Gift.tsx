"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Gift() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
          ជំពូកទី ៦
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          ការភ្ញាក់ផ្អើលមួយទៀត
        </h2>

        {!opened ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpened(true)}
              className="mt-20 text-9xl"
            >
              🎁
            </motion.button>

            <p className="mt-8 text-gray-400">
              ឆ្ងល់ណាស់ថាតើមានអ្វីនៅខាងក្នុង...
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-16 max-w-xl rounded-3xl border border-pink-500/30 bg-pink-500/5 p-10"
          >
            <div className="text-7xl">💝</div>

            <h3 className="mt-6 text-3xl font-bold">
              ភ្ញាក់ផ្អើលទេ!
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              កាដូដ៏ធំបំផុតមិនមែននៅក្នុងប្រអប់នេះទេ។ វាគឺជាគ្រប់ការចងចាំទាំងអស់ដែលយើងបានបង្កើតជាមួយគ្នា និងគ្រប់ការចងចាំដែលយើងមិនទាន់បានបង្កើត។
            </p>

            <p className="mt-6 font-semibold text-pink-400">
              ការផ្សងព្រេងជាច្រើនទៀតកំពុងរង់ចាំយើង។ ❤️
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}