import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
  { href: "/outreach", label: "Outreach" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-charcoal bg-cream/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-6 p-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.webp"
            alt="Double Trouble robot mascot"
            width={44}
            height={44}
            className="rounded-full border-2 border-charcoal"
            priority
          />
          <span className={`font-display text-lg sm:text-xl leading-none`}>
            <span className="text-punch-red">DOUBLE</span>{" "}
            <span className="text-steel-blue">TROUBLE</span>
          </span>
        </Link>

        <div className="flex flex-wrap gap-x-1 gap-y-1 text-sm font-semibold justify-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md border-2 border-transparent hover:border-charcoal hover:bg-mustard-gold/40 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
