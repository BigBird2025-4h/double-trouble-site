"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Portfolio",
    color: "red",
    href: "/portfolio",
    description: "View our robots and engineering work",
  },
  {
    title: "Blog / Media",
    color: "blue",
    href: "/blog",
    description: "Read updates, build logs, and outreach",
  },
  {
    title: "Sponsors",
    color: "red",
    href: "/sponsors",
    description: "Meet the organizations supporting us",
  },
  {
    title: "Resources",
    color: "blue",
    href: "/resources",
    description: "Tools, guides, and FTC resources",
  },
];

export default function Sections({
  latestPost,
}: {
  latestPost?: { slug: string; title: string };
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-20">
      {sections.map((sec, i) => (
        <motion.div
          key={sec.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link href={sec.href}>
            <div
              className={`paper-panel p-8 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:-rotate-1 ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              } ${
                sec.color === "red" ? "print-shadow-red" : "print-shadow-blue"
              }`}
            >
              {/* halftone corner accent */}
              <div
                className={`absolute -top-3 -right-3 w-14 h-14 halftone rounded-full opacity-70 ${
                  sec.color === "red" ? "text-punch-red" : "text-steel-blue"
                }`}
              />

              <h2
                className={`font-display text-xl mb-3 ${
                  sec.color === "red" ? "text-punch-red" : "text-steel-blue"
                }`}
              >
                {sec.title}
              </h2>

              {sec.title === "Blog / Media" && latestPost ? (
                <p className="text-charcoal/80 text-sm capitalize font-medium">
                  Latest: {latestPost.title}
                </p>
              ) : (
                <p className="text-charcoal/80 text-sm font-medium">
                  {sec.description}
                </p>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
