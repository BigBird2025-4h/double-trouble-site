import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#30363d] bg-black/40 backdrop-blur">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <div className="font-bold text-lg">
          <span className="text-red-500">Double</span>{" "}
          <span className="text-blue-500">Trouble</span>
        </div>

        <div className="flex gap-6 text-sm text-white">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/more">More</Link>
        </div>

      </div>
    </nav>
  );
}