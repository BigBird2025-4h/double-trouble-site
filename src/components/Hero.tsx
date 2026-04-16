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
    highlights: { robots: "text-green-400 text-glow-green" },
  },
  {
    text: "bringing STEAM to our community.",
    highlights: { STEAM: "text-orange-400 text-glow-orange" },
  },
  {
    text: "Gracious Professionalism on and off the field.",
    highlights: { "Gracious Professionalism": "text-purple-400 text-glow-purple" },
  },
  {
    text: "connecting ideas with practical solutions.",
    highlights: {
      ideas: "text-red-400 text-glow-red",
      practical: "text-blue-400",
    },
  },
  {
    text: "eating ice cream and pizza.",
    highlights: { "ice cream": "text-yellow-400 text-glow-yellow", pizza: "text-red-400 text-glow-red" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [glitchChar, setGlitchChar] = useState("");

  const current = PHRASES[index].text;

  // 🎨 build visible text
  const visibleText =
    BASE +
    current.slice(0, progress) +
    (isDeleting ? "" : glitchChar);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // ⏸ pause state
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);

        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % PHRASES.length);
          setProgress(0);
        }
      }, isDeleting ? 500 : 3000);

      return () => clearTimeout(timeout);
    }

    // ✍️ typing (with single-letter glitch)
    if (!isDeleting) {
      timeout = setTimeout(() => {
        const next = progress + 1;

        // only glitch CURRENT letter
        setGlitchChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        setTimeout(() => {
          setGlitchChar(current[progress] || "");
        }, 10);

        setProgress(next);

        if (next >= current.length) {
          setGlitchChar("");
          setIsWaiting(true);
        }
      }, 30);
    }

    // ⌫ deleting
    else {
      timeout = setTimeout(() => {
        const next = progress - 1;

        setProgress(next);

        if (next <= 0) {
          setIsWaiting(true);
        }
      }, 20);
    }

    return () => clearTimeout(timeout);
  }, [progress, isDeleting, isWaiting, index]);

  // 🎨 highlight system
  function renderText(text: string) {
    let output = text;

    Object.entries(PHRASES[index].highlights).forEach(
      ([word, color]) => {
        const regex = new RegExp(`(${word})`, "gi");
        output = output.replace(
          regex,
          `<span class="${color}">$1</span>`
        );
      }
    );

    return output;
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

      <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className={`${jetbrains.className} text-gray-400 max-w-2xl mx-auto text-lg`}
>
  <span
    dangerouslySetInnerHTML={{
      __html: renderText(visibleText),
    }}
  />
  <span className="cursor">|</span>
</motion.p>
    
    <div className="mt-10 flex justify-center">
  <a
    href="/blog"
    className="relative px-8 py-3 rounded-lg font-medium text-white border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition duration-300 group overflow-hidden"
  >
    <span className="relative z-10">Read Build Logs</span>

    {/* subtle glow line */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
      <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 opacity-20 blur-md"></span>
    </span>
  </a>
</div>
    </div>
  );
}