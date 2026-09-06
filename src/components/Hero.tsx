"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const BASE =
  "Double Trouble is an FTC (FIRST Tech Challenge) team from Chattanooga, TN dedicated to ";

const PHRASES = [
  {
    text: "designing, building and programming high-performance robots.",
    highlights: {
      robots: "text-punch-red",
      designing: "text-steel-blue",
      programming: "text-mustard-gold",
    },
  },
  {
    text: "bringing STEAM to our community.",
    highlights: {
      STEAM: "text-mustard-gold",
      community: "text-steel-blue",
    },
  },
  {
    text: "Gracious Professionalism on and off the field.",
    highlights: {
      "Gracious Professionalism": "text-punch-red",
      field: "text-steel-blue",
    },
  },
  {
    text: "connecting ideas with practical solutions.",
    highlights: {
      ideas: "text-punch-red",
      solutions: "text-steel-blue",
    },
  },
  {
    text: "eating ice cream and pizza.",
    highlights: { "ice cream": "text-mustard-gold", pizza: "text-punch-red" },
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
    BASE + current.slice(0, progress) + (isDeleting ? "" : glitchChar);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(
        () => {
          setIsWaiting(false);

          if (!isDeleting) {
            setIsDeleting(true);
          } else {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % PHRASES.length);
            setProgress(0);
          }
        },
        isDeleting ? 1000 : 4000
      );

      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      timeout = setTimeout(() => {
        const next = progress + 1;

        setGlitchChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        setProgress(next);

        if (next >= current.length) {
          setGlitchChar("");
          setIsWaiting(true);
        }
      }, 30);
    } else {
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

  function renderText(text: string) {
    let output = text;

    Object.entries(PHRASES[index].highlights).forEach(([word, color]) => {
      const regex = new RegExp(`(${word})`, "gi");
      output = output.replace(regex, `<span class="${color}">$1</span>`);
    });

    return output;
  }

  return (
    <div className="text-center mt-10">
      <div className="relative inline-block mb-6 stamp-in">
        <div className="absolute inset-0 halftone text-mustard-gold opacity-40 rounded-full scale-110 -z-10" />
        <Image
          src="/logo.webp"
          alt="Double Trouble — red and blue robot mascot"
          width={140}
          height={140}
          className="rounded-full border-4 border-charcoal print-shadow-gold"
          priority
        />
      </div>

      <h1 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
        <span className="text-punch-red">DOUBLE</span>{" "}
        <span className="text-steel-blue">TROUBLE</span>
        <br className="sm:hidden" />
        <span className="text-charcoal/70 text-2xl sm:text-3xl align-middle">
          {" "}
          #35725
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg font-medium text-charcoal/90">
        <span
          dangerouslySetInnerHTML={{
            __html: renderText(visibleText),
          }}
        />
        <span className="cursor text-punch-red">|</span>
      </p>
    </div>
  );
}
