"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "ស្នាមញញឹមរបស់អូនអាចធ្វើឲ្យថ្ងៃទាំងមូលរបស់បងកាន់តែប្រសើរឡើង។",
  "អូនធ្វើឲ្យខណៈពេលធម្មតាៗប្រែជាមានន័យពិសេស។",
  "បងស្រឡាញ់វិធីដែលអូនយកចិត្តទុកដាក់ចំពោះមនុស្សជុំវិញខ្លួន។",
  "សំឡេងសើចរបស់អូនគឺជាសំឡេងមួយដែលបងចូលចិត្តបំផុត។",
  "អូនអាចធ្វើឲ្យបងញញឹមបានដោយមិនបាច់ប្រឹងប្រែងអ្វីឡើយ។",
  "បងស្រឡាញ់ការដែលបានបង្កើតការចងចាំល្អៗជាមួយអូន។",
  "អូនមានសម្រស់ស្អាតទាំងចិត្ត និងកាយ។",
  "អូនធ្វើឲ្យជីវិតបងរស់រវើក និងគួរឲ្យរំភើបជាងមុន។",
  "អូនគ្រាន់តែជាខ្លួនអូន — ហើយប៉ុណ្ណឹងគឺគ្រប់គ្រាន់ណាស់ទៅហើយ។❤️",
];

export default function Reasons() {
  return (
    <section className="bg-[#080808] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
            ជំពូកទី ៣
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            មូលហេតុដែលបងស្រឡាញ់អូន
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-500/40 hover:bg-pink-500/5"
            >
              <div className="flex gap-5">
                <span className="text-xl font-bold text-pink-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg text-gray-300">
                  {reason}
                </p>

                <Heart
                  size={20}
                  className="ml-auto shrink-0 text-pink-500 opacity-0 transition group-hover:opacity-100"
                  fill="currentColor"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}