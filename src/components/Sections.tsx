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
              className={`p-8 rounded-xl border border-[#30363d] cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                sec.color === "red"
                  ? "hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]"
                  : "hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-2 ${
                  sec.color === "red"
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {sec.title}
              </h2>

              {/* BLOG CARD DYNAMIC PART */}
              {sec.title === "Blog / Media" && latestPost ? (
                <p className="text-gray-400 text-sm capitalize">
                  Latest: {latestPost.title}
                </p>
              ) : (
                <p className="text-gray-400 text-sm">
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