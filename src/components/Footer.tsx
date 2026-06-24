export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#30363d] bg-black/40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-white/80">
        <p className="text-sm">
          © {new Date().getFullYear()} Noah H | Double Trouble | FTC Team #35725
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="mt-4 text-xs text-white/60">
          Built with Next.js + Vercel
        </p>
      </div>
    </footer>
  );
}