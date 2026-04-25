"use client";

import { useEffect, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const BASE =
  "Double Trouble is an FTC (FIRST Tech Challenge) team dedicated to ";

const PHRASES = [
  {
    text: "designing, building and programming high-performance robots.",
    highlights: { robots: "text-green-400",
      designing: "text-blue-400",
      programming: "text-yellow-400",
     },
  },
  {
    text: "bringing STEAM to our community.",
    highlights: { STEAM: "text-orange-400",
      community: "text-green-400"
    },
  },
  {
    text: "Gracious Professionalism on and off the field.",
    highlights: { 
      "Gracious Professionalism": "text-purple-400",
      field: "text-pink-400"  
    },
  },
  {
    text: "connecting ideas with practical solutions.",
    highlights: {
      ideas: "text-red-400",
      solutions: "text-blue-400",
    },
  },
  {
    text: "eating ice cream and pizza.",
    highlights: { "ice cream": "text-yellow-400", pizza: "text-red-400" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [glitchChar, setGlitchChar] = useState("");

  const current = PHRASES[index].text;

  // build visible text
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
      }, isDeleting ? 1000 : 4000);

      return () => clearTimeout(timeout);
    }

    // typing (with single-letter glitch)
    if (!isDeleting) {
      timeout = setTimeout(() => {
        const next = progress + 1;

        // only glitch CURRENT letter
        setGlitchChar(
          CHARS[Math.floor(Math.random() * CHARS.length)]
        );

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

  // highlight system
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

      <p
        className={`${jetbrains.className} text-gray-400 max-w-2xl mx-auto text-lg`}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: renderText(visibleText),
          }}
        />
        <span className="cursor">|</span>
      </p>
    </div>
  );
}