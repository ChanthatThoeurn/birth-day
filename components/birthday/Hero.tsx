"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles, Stars, ChevronDown } from "lucide-react";
const hearts = [
  { left: "8%", top: "18%", delay: 0, size: 18 },
  { left: "15%", top: "70%", delay: 1, size: 13 },
  { left: "82%", top: "20%", delay: 0.7, size: 16 },
  { left: "90%", top: "65%", delay: 1.5, size: 12 },
  { left: "25%", top: "12%", delay: 2, size: 11 },
  { left: "75%", top: "78%", delay: 1.2, size: 15 },
];
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff7fb] px-6 text-[#4a2435]">
      {" "}
      {/* ===================================================== SOFT BACKGROUND ===================================================== */}{" "}
      <div className="absolute inset-0 overflow-hidden">
        {" "}
        {/* Pink glow */}{" "}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/40 blur-[120px]" />{" "}
        {/* Left blob */}{" "}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl"
        />{" "}
        {/* Right blob */}{" "}
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl"
        />{" "}
      </div>{" "}
      {/* ===================================================== FLOATING HEARTS ===================================================== */}{" "}
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-400/40"
          style={{ left: heart.left, top: heart.top }}
          animate={{
            y: [-5, -25, -5],
            rotate: [-8, 8, -8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          {" "}
          <Heart size={heart.size} fill="currentColor" />{" "}
        </motion.div>
      ))}{" "}
      {/* ===================================================== MAIN CONTENT ===================================================== */}{" "}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {" "}
        {/* Cute badge */}{" "}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          {" "}
          <div className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-5 py-2 shadow-sm backdrop-blur-md">
            {" "}
            <Sparkles size={14} className="text-pink-400" />{" "}
            <span className="text-xs font-medium tracking-[0.25em] text-pink-500">
              {" "}
              OUR LITTLE LOVE STORY{" "}
            </span>{" "}
            <Heart size={14} className="fill-pink-400 text-pink-400" />{" "}
          </div>{" "}
        </motion.div>{" "}
        {/* ================================================= COUPLE HEART ================================================= */}{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          {" "}
          <div className="relative">
            {" "}
            {/* Heart glow */}{" "}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-pink-300 blur-2xl"
            />{" "}
            {/* Couple icon */}{" "}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-100 to-rose-200 shadow-xl shadow-pink-200/50"
            >
              {" "}
              <span className="text-5xl"> 🧸 </span>{" "}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -right-2 -top-2"
              >
                {" "}
                <Heart size={30} className="fill-pink-500 text-pink-500" />{" "}
              </motion.div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </motion.div>{" "}
        {/* ================================================= SMALL TITLE ================================================= */}{" "}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-4 text-sm font-medium tracking-[0.3em] text-pink-400"
        >
          {" "}
          ថ្ងៃពិសេសរបស់មនុស្សពិសេស ❤️{" "}
        </motion.p>{" "}
        {/* ================================================= MAIN TITLE ================================================= */}{" "}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-black leading-tight"
        >
          {" "}
          <span className="block text-5xl sm:text-6xl md:text-8xl">
            {" "}
            រីករាយថ្ងៃកំណើតអូនសម្លាញ់{" "}
          </span>{" "}
          <span className="mt-3 block bg-gradient-to-r from-pink-400 via-rose-500 to-purple-400 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-7xl">
            {" "}
            មនុស្សដែលបងស្រឡាញ់ ❤️{" "}
          </span>{" "}
        </motion.h1>{" "}
        {/* ================================================= SWEET MESSAGE ================================================= */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mx-auto mt-8 max-w-xl"
        >
          {" "}
          <p className="text-lg leading-8 text-[#805468] md:text-xl">
            {" "}
            អរគុណដែលបានចូលមកក្នុងជីវិតបង<br /> ហើយធ្វើឲ្យថ្ងៃធម្មតាៗ
            ក្លាយជាថ្ងៃពិសេស។ 💕{" "}
          </p>{" "}
          <p className="mt-5 text-sm text-[#a78391]">
            {" "}
            គេហទំព័រតូចមួយនេះ បង្កើតឡើងសម្រាប់អូនតែម្នាក់គត់។{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* ================================================= COUPLE BADGE ================================================= */}{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 flex justify-center"
        >
          {" "}
          <div className="flex items-center gap-3 rounded-full border border-pink-200 bg-white/60 px-6 py-3 shadow-sm backdrop-blur-md">
            {" "}
            <span>👦🏻</span>{" "}
            <Heart size={18} className="fill-pink-500 text-pink-500" />{" "}
            <span>👧🏻</span>{" "}
            <span className="ml-1 text-sm font-medium text-pink-500">
              {" "}
              Together ❤️{" "}
            </span>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
      {/* ===================================================== SCROLL ===================================================== */}{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        {" "}
        <div className="flex flex-col items-center gap-2 text-pink-300">
          {" "}
          <span className="text-[10px] uppercase tracking-[0.3em]">
            {" "}
            Our story continues{" "}
          </span>{" "}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            {" "}
            <ChevronDown size={22} />{" "}
          </motion.div>{" "}
        </div>{" "}
      </motion.div>{" "}
      {/* ===================================================== DECORATIVE CORNERS ===================================================== */}{" "}
      <div className="absolute left-5 top-5 h-16 w-16 rounded-tl-3xl border-l border-t border-pink-200" />{" "}
      <div className="absolute bottom-5 right-5 h-16 w-16 rounded-br-3xl border-b border-r border-pink-200" />{" "}
      {/* Tiny stars */}{" "}
      <Stars
        className="absolute left-[12%] top-[30%] text-pink-300/50"
        size={20}
      />{" "}
      <Stars
        className="absolute right-[12%] top-[35%] text-purple-300/50"
        size={18}
      />{" "}
    </section>
  );
}
