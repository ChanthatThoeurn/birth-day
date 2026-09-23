"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayCake() {
  const [blown, setBlown] = useState(false);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#080808] px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
          ជំពូកទី ៥
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          ផ្សងប្រាថ្នា
        </h2>

        <p className="mt-5 text-gray-400">
          ចុចលើទៀនអូនសម្លាញ់។
        </p>

        <div className="relative mx-auto mt-20 w-72">
          {!blown && (
            <div className="mb-[-5px] flex justify-center gap-8 text-4xl">
              <span>🕯️</span>
              <span>🕯️</span>
              <span>🕯️</span>
            </div>
          )}

          <div className="rounded-t-3xl bg-pink-500 p-8">
            <div className="text-6xl">🎂</div>
          </div>

          <div className="h-8 rounded-b-3xl bg-pink-700" />
        </div>

        <button
          onClick={() => setBlown(true)}
          disabled={blown}
          className="mt-10 rounded-full border border-pink-500/40 px-7 py-3 text-pink-300 transition hover:bg-pink-500 hover:text-white disabled:opacity-50"
        >
          {blown ? "✨ បានផ្សងប្រាថ្នារួចរាល់ ✨" : "ផ្សងប្រាថ្នា"}
        </button>

        {blown && (
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 text-2xl font-semibold text-pink-400"
          >
            ខ្ញុំសង្ឃឹមថាការប្រាថ្នារបស់អូននឹងក្លាយជាការពិត។ ❤️
          </motion.p>
        )}
      </div>
    </section>
  );
}