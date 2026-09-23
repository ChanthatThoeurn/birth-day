"use client";

import { motion } from "framer-motion";

const story = [
  {
    number: "01",
    title: "ការចាប់ផ្តើម",
    text: "មិនដឹងដោយរបៀបណា ថាជីវិតរបស់យើងបានជួបគ្នា ហើយរឿងរ៉ាវរបស់បងក៏ប្រែជាស្រស់ស្អាតជាងមុន។",
  },
  {
    number: "02",
    title: "ការចងចាំដំបូងៗ",
    text: "ការសន្ទនាតិចតួច សំឡេងសើច និងខណៈពេលខ្លីៗ បានសឹមៗក្លាយជាការចងចាំដែលបងមិនដែលចង់ភ្លេចឡើយ។",
  },
  {
    number: "03",
    title: "ខណៈពេលទាំងឡាយ",
    text: "មិនមែនគ្រប់ខណៈពេលសុទ្ធតែត្រូវតែល្អឥតខ្ចោះនោះទេ។ ជួនកាល គ្រាន់តែបាននៅជាមួយគ្នាគឺគ្រប់គ្រាន់ណាស់ទៅហើយ។",
  },
  {
    number: "04",
    title: "ថ្ងៃនេះ",
    text: "ហើយឥឡូវនេះ ខ្ញុំនៅទីនេះដើម្បីអបអរសាទរមនុស្សដ៏អស្ចារ្យដូចជាអូន។",
  },
];

export default function OurStory() {
  return (
    <section className="bg-[#080808] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
            ជំពូកទី ១
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            រឿងរ៉ាវរបស់យើង
          </h2>
        </div>

        <div className="space-y-16">
          {story.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid gap-6 md:grid-cols-[120px_1fr]"
            >
              <div className="text-5xl font-black text-pink-500/30">
                {item.number}
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}