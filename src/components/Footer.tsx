import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-charcoal bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-30 mix-blend-overlay" />
      <div className="max-w-6xl mx-auto px-6 py-8 text-center relative">
        <p className="text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} Noah H | Double Trouble | FTC Team #35725
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm font-semibold">
          <Link href="/blog" className="hover:text-mustard-gold transition-colors">
            Blog
          </Link>
          <Link href="/portfolio" className="hover:text-mustard-gold transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-mustard-gold transition-colors">
            Contact
          </Link>
        </div>

        <p className="mt-4 text-xs text-cream/60">
          made with ❤️ by Noah H
        </p>
      </div>
    </footer>
  );
}
