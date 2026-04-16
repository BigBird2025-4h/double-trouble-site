export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        <p className="text-sm">
          © {new Date().getFullYear()} Double Trouble FTC
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="/blog" className="hover:text-white">
            Blog
          </a>
          <a href="/portfolio" className="hover:text-white">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Built with Next.js + Vercel
        </p>
      </div>
    </footer>
  );
}