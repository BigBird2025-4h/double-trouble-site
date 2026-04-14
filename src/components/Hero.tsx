"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TEXT =
  "Double Trouble is a FIRST Tech Challenge team dedicated to designing, building and programming high-performance robots.";

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(TEXT.slice(0, i));
      i++;
      if (i > TEXT.length) clearInterval(interval);
    }, 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        <span className="text-red-500">Double</span>{" "}
        <span className="text-blue-500">Trouble</span>
      </motion.h1>

      <p className="text-gray-200 max-w-2xl mx-auto text-lg">
        {text}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
}
