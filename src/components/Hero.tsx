"use client";

import { useEffect, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

const BASE =
  "Double Trouble is a FIRST Tech Challenge team dedicated to ";

const PHRASES = [
  "designing, building and programming high-performance robots.",
  "bringing STEAM to our community.",
  "Gracious Professionalism on and off the field.",
  "connecting ideas with practical solutions.",
  "eating ice cream and pizza.",
];

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"typing" | "waiting" | "deleting">(
    "typing"
  );
  const [glitch, setGlitch] = useState("");

  const fullText = BASE + PHRASES[index];

  // MAIN TYPE / DELETE ENGINE
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (mode === "typing") {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          const nextChar = fullText[text.length];

          // glitch phase: random character flicker before real char
          const randomChar =
            CHARS[Math.floor(Math.random() * CHARS.length)];

          setGlitch(randomChar);

          setTimeout(() => {
            setText(fullText.slice(0, text.length + 1));
          }, 20);
        }, 25);
      } else {
        setMode("waiting");
        timeout = setTimeout(() => setMode("deleting"), 4000);
      }
    }

    if (mode === "deleting") {
      if (text.length > BASE.length) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 15);
      } else {
        setIndex((i) => (i + 1) % PHRASES.length);
        setMode("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, mode, index]);

  return (
    <div className="text-center mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${jetbrains.className} text-5xl font-bold mb-6`}
      >
        <span className="text-red-500">Double</span>{" "}
        <span className="text-blue-500">Trouble</span>
      </motion.h1>

      <p
        className={`${jetbrains.className} text-gray-400 text-lg max-w-2xl mx-auto`}
      >
        {text}
        <span className="text-gray-500">{glitch}</span>

        {/* BLINKING CURSOR */}
        <span className="ml-1 animate-pulse text-white">|</span>
      </p>
    </div>
  );
}