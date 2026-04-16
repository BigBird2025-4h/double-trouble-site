"use client";

import { useEffect, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const BASE =
  "Double Trouble is a FIRST Tech Challenge team dedicated to ";

const PHRASES = [
  {
    text: "designing, building and programming high-performance robots.",
    highlights: ["robots"],
  },
  {
    text: "bringing STEAM to our community.",
    highlights: ["STEAM"],
  },
  {
    text: "Gracious Professionalism on and off the field.",
    highlights: ["Gracious Professionalism"],
  },
  {
    text: "connecting ideas with practical solutions.",
    highlights: ["practical", "solutions"],
  },
  {
    text: "eating ice cream and pizza.",
    highlights: ["ice cream", "pizza"],
  },
];

const COLOR_MAP: Record<string, string> = {
  robots: "text-green-400",
  STEAM: "text-orange-400",
  "Gracious Professionalism": "text-purple-400",
  practical: "text-red-400",
  solutions: "text-blue-400",
  "ice cream": "text-yellow-400",
  pizza: "text-red-400",
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [glitchIndex, setGlitchIndex] = useState<number | null>(null);
  const [glitchChar, setGlitchChar] = useState("");

  const current = PHRASES[index].text;
  const full = BASE + current;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (waiting) {
      timeout = setTimeout(() => {
        setWaiting(false);

        if (isDeleting) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % PHRASES.length);
          setProgress(0);
        } else {
          setIsDeleting(true);
        }
      }, isDeleting ? 600 : 3000);

      return () => clearTimeout(timeout);
    }

    // TYPE
    if (!isDeleting) {
      timeout = setTimeout(() => {
        const next = progress + 1;

        // glitch ONLY current letter
        setGlitchIndex(progress);
        setGlitchChar(
          CHARS[Math.floor(Math.random() * CHARS.length)]
        );

        setProgress(next);

        if (next >= full.length) {
          setGlitchIndex(null);
          setGlitchChar("");
          setWaiting(true);
        }
      }, 25);
    }

    // DELETE
    else {
      timeout = setTimeout(() => {
        const next = progress - 1;
        setProgress(next);

        if (next <= BASE.length) {
          setWaiting(true);
        }
      }, 15);
    }

    return () => clearTimeout(timeout);
  }, [progress, isDeleting, waiting]);

  function renderText() {
    const text = full.slice(0, progress);

    return text.split("").map((char, i) => {
      let displayChar = char;

      if (i === glitchIndex && glitchChar && !isDeleting) {
        displayChar = glitchChar;
      }

      const isHighlighted = PHRASES[index].highlights.some((word) =>
        text.includes(word)
      );

      return (
        <span key={i} className="relative">
          {displayChar}
        </span>
      );
    });
  }

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
        className={`${jetbrains.className} text-gray-400 max-w-2xl mx-auto text-lg`}
      >
        {renderText()}

        {/* REAL BLINKING CURSOR */}
        <span className="ml-1 animate-blink text-white">|</span>
      </p>
    </div>
  );
}