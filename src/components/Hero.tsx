"use client";

import { useEffect, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const PHRASES = [
  {
    text: "Double Trouble is a FIRST Tech Challenge team dedicated to designing, building and programming high-performance robots.",
    highlights: { robots: "text-green-400" },
  },
  {
    text: "Double Trouble is a FIRST Tech Challenge team dedicated to bringing STEAM to our community.",
    highlights: { STEAM: "text-orange-400" },
  },
  {
    text: "Double Trouble is a FIRST Tech Challenge team dedicated to Gracious Professionalism on and off the field.",
    highlights: { "Gracious Professionalism": "text-purple-400" },
  },
  {
    text: "Double Trouble is a FIRST Tech Challenge team dedicated to connecting ideas with practical solutions.",
    highlights: { solutions: "text-blue-400" },
  },
  {
    text: "Double Trouble is a FIRST Tech Challenge team dedicated to eating ice cream and pizza.",
    highlights: { pizza: "text-red-400" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const current = PHRASES[index];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);

        if (!isDeleting) {
          setIsDeleting(true); // start deleting
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % PHRASES.length);
          setProgress(0);
        }
      }, isDeleting ? 1000 : 4000);

      return () => clearTimeout(timeout);
    }

    // ✍️ TYPING WITH GLITCH
    if (!isDeleting) {
      timeout = setTimeout(() => {
        let result = "";

        for (let i = 0; i < current.text.length; i++) {
          if (i < progress) {
            result += current.text[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setDisplay(result);

        if (progress >= current.text.length) {
          setIsWaiting(true);
        } else {
          setProgress((p) => p + 1);
        }
      }, 20);
    }

    // ⌫ DELETING
    else {
      timeout = setTimeout(() => {
        const next = current.text.slice(0, progress - 1);
        setDisplay(next);
        setProgress((p) => p - 1);

        if (progress <= 0) {
          setIsWaiting(true);
        }
      }, 15);
    }

    return () => clearTimeout(timeout);
  }, [progress, isDeleting, isWaiting, index]);

  function renderText(text: string) {
    let output = text;

    Object.entries(current.highlights).forEach(([word, color]) => {
      const regex = new RegExp(`(${word})`, "gi");
      output = output.replace(
        regex,
        `<span class="${color}">$1</span>`
      );
    });

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
        dangerouslySetInnerHTML={{ __html: renderText(display) }}
      />

      <span className="cursor">|</span>
    </div>
  );
}