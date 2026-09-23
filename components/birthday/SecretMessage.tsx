"use client";

import { useState } from "react";
import { Lock, Unlock } from "lucide-react";
import { motion } from "framer-motion";

export default function SecretMessage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const correctPassword = "love";

  const unlock = () => {
    if (password.toLowerCase() === correctPassword) {
      setUnlocked(true);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#080808] px-6">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
        240923
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          អ្វីមួយដែលត្រូវបានលាក់បាំង
        </h2>

        {!unlocked ? (
          <>
            <Lock className="mx-auto mt-16 text-pink-500" size={70} />

            <p className="mt-8 text-gray-400">
              បញ្ចូលពាក្យសម្ងាត់។
            </p>

            <div className="mt-8 flex gap-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ពាក្យសម្ងាត់..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 outline-none focus:border-pink-500"
              />

              <button
                onClick={unlock}
                className="rounded-full bg-pink-500 px-6 py-3 font-semibold"
              >
                បើកសោ
              </button>
            </div>

            <p className="mt-5 text-xs text-gray-600">
              ការចង្អុលបង្ហាញ៖ អ្វីមួយដែលតភ្ជាប់ពួកយើង ❤️
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 rounded-3xl border border-pink-500/30 bg-pink-500/5 p-10"
          >
            <Unlock
              className="mx-auto text-pink-500"
              size={60}
            />

            <p className="mt-8 text-xl leading-9 text-gray-200">
              ប្រហែលជាមានរឿងរាប់ពាន់ដែលបងអាចប្រាប់អ្នកនៅថ្ងៃនេះ។
              <br />
              <br />
              ប៉ុន្តែអ្វីដែលសំខាន់បំផុតនោះគឺសាមញ្ញ៖
              <br />
              <br />
              <span className="text-3xl font-bold text-pink-400">
                បងពិតជាមានសេចក្តីសុខណាស់ដែលមានអូននៅក្នុងជីវិតរបស់បង។ ❤️
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}