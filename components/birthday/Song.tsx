"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

export default function Song() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
          ជំពូកទី ៤
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          បទចម្រៀងរបស់យើង
        </h2>

        <motion.div
          animate={{
            rotate: playing ? 360 : 0,
          }}
          transition={{
            duration: 8,
            repeat: playing ? Infinity : 0,
            ease: "linear",
          }}
          className="mx-auto mt-16 flex h-64 w-64 items-center justify-center rounded-full border-8 border-pink-500/30 bg-gradient-to-br from-pink-500/20 to-purple-500/20"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black">
            <Music className="text-pink-500" size={32} />
          </div>
        </motion.div>

        <h3 className="mt-10 text-2xl font-bold">
          បទចម្រៀងដែលធ្វើឲ្យបងនឹកឃើញដល់អ្នក ❤️
        </h3>

        <p className="mt-3 text-gray-400">
          រាល់ពេលដែលខ្បងបានលឺវា ខ្បងតែងតែគិតពីពួកយើង។
        </p>

        <button
          onClick={toggleMusic}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-pink-500 px-7 py-3 font-semibold transition hover:bg-pink-400"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}

          {playing ? "ផ្អាក" : "ចាក់បទចម្រៀងរបស់យើង"}
        </button>

        <audio
          ref={audioRef}
          src="/music/s.webm"
          onEnded={() => setPlaying(false)}
        />
      </div>
    </section>
  );
}