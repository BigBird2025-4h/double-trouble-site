"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  { title: "Portfolio", color: "red", href: "/portfolio" },
  { title: "Blog / Media", color: "blue", href: "/blog" },
  { title: "Members", color: "red", href: "/members" },
  { title: "Resources", color: "blue", href: "/resources" },
];

export default function Sections() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-24">
      {sections.map((sec, i) => (
        <motion.div
          key={sec.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link href={sec.href}>
            <div
              className={`p-8 rounded-xl border border-[#30363d] cursor-pointer transition-all duration-300
              ${
                sec.color === "red"
                  ? "hover:shadow-[0_0_600px_rgba(255,0,0,0.3)]"
                  : "hover:shadow-[0_0_600px_rgba(0,0,255,0.3)]"
              }`}
            >
              <h2
                className={`text-2xl font-bold ${
                  sec.color === "red" ? "text-red-500" : "text-blue-500"
                }`}
              >
                {sec.title}
              </h2>

              <p className="text-gray-400 mt-2">
                Explore our {sec.title.toLowerCase()}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
