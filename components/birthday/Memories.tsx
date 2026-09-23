"use client";

import { motion } from "framer-motion";

const photos = [
  {
    image: "/photos/us1.jpg",
    text: "ការចងចាំមួយដែលខ្ញុំចូលចិត្តបំផុត ❤️",
  },
  {
    image: "/photos/us2.jpg",
    text: "ស្នាមញញឹមដ៏ស្រស់ស្អាតនោះ។",
  },
  {
    image: "/photos/us3.jpg",
    text: "ខណៈពេលដែលគួរឲ្យចងចាំ។",
  },
  {
    image: "/photos/o7.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
   {
    image: "/photos/o6.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
   {
    image: "/photos/o5.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
   {
    image: "/photos/o4.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
   {
    image: "/photos/o3.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
   {
    image: "/photos/o2.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
   {
    image: "/photos/o1.jpg",
    text: "អុនសម្លាញ់ស្រស់ស្អាតណាស់ ❤️",
  },
];

export default function Memories() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
            ជំពូកទី ២
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            ការចងចាំរបស់យើង
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            ខណៈពេលមួយចំនួនដែលប្រែជាមានន័យពិសេស គ្រាន់តែដោយសារតែមានអូនសម្លាញ់នៅទីនោះ។
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.image}
              initial={{
                opacity: 0,
                y: 50,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotate: 0,
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <img
                src={photo.image}
                alt="Our memory"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />

              <p className="px-2 py-5 text-center text-gray-300">
                {photo.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}