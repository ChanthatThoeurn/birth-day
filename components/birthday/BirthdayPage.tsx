"use client";

import { useState } from "react";
import Opening from "./Opening";
import Hero from "./Hero";
import OurStory from "./OurStory";
import Memories from "./Memories";
import Reasons from "./Reasons";
import Song from "./Song";
import BirthdayCake from "./BirthdayCake";
import Gift from "./Gift";
import SecretMessage from "./SecretMessage";
import FinalScene from "./FinalScene";

export default function BirthdayPage() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Opening onStart={() => setStarted(true)} />;
  }

  return (
    <main className="overflow-hidden bg-black">
      <Hero />
      <OurStory />
      <Memories />
      <Reasons />
      <Song />
      <BirthdayCake />
      <Gift />
      <SecretMessage />
      <FinalScene />
    </main>
  );
}