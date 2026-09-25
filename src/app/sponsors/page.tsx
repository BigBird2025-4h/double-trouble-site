import Image from "next/image";

const sponsors = [
  {
    name: "Scenic City Orthodontics",
    logo: "/sponsors/SCO-LOGO-2.png",
    url: "https://www.sceniccityortho.com/",
  },

];

export default function SponsorsPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-6">
        <span className="text-steel-blue">Sponsors</span>
      </h1>

      <p className="text-charcoal/80 max-w-2xl mb-10 font-medium">
        {sponsors.length === 0
          ? "We haven't been sponsored by anyone yet; your support would be much appreciated!"
          : "Thank you to the sponsors who make it possible for our team to compete!"}
      </p>

      {/* Sponsor Grid */}
      {sponsors.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {sponsors.map((sponsor, i) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`paper-panel p-6 flex items-center justify-center hover:-translate-y-1 transition ${
                i % 2 === 0 ? "print-shadow-blue" : "print-shadow-red"
              }`}
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={200}
                height={100}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      )}

      {/* Sponsorship Levels */}
      <div className="mb-16">
        <h2 className="font-display text-2xl sm:text-3xl mb-8">
          <span className="text-punch-red">Sponsorship</span>
          <span className="text-steel-blue"> Levels</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Tier 1 */}
            <div 
               className="paper-panel p-6 print-shadow-red"
               style={{ borderColor: "var(--color-punch-red)" }}
            >            <h3 className="font-display text-lg text-charcoal mb-2">
              Featherweight level
            </h3>
            <p className="text-steel-blue font-bold mb-4">$100+</p>
            <ul className="space-y-2 text-charcoal/80 list-disc list-inside font-medium text-sm">
              <li>Name and logo displayed on our website and team shirts.</li>
            </ul>
          </div>

          {/* Tier 2 */}
            <div 
               className="paper-panel p-6 print-shadow-red"
               style={{ borderColor: "var(--color-steel-blue)" }}
            >            
            <h3 className="font-display text-lg text-charcoal mb-2">
              Heavyweight level
            </h3>
            <p className="text-steel-blue font-bold mb-4">$500+</p>
            <ul className="space-y-2 text-charcoal/80 list-disc list-inside font-medium text-sm">
              <li>Name and logo displayed on our website, shirts and team banner.</li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div 
               className="paper-panel p-6 print-shadow-blue"
               style={{ borderColor: "var(--color-steel-blue)" }}
            >
            <h3 className="font-display text-lg text-charcoal mb-2">
              Knockout level
            </h3>
            <p className="text-steel-blue font-bold mb-4">$1,000+</p>
            <ul className="space-y-2 text-charcoal/80 list-disc list-inside font-medium text-sm">
              <li>Name and logo displayed on our website, shirts, team banner, and robot.</li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div
            className="paper-panel p-6 print-shadow-gold bg-mustard-gold/10"
            style={{ borderColor: "var(--color-mustard-gold)" }}
          >
            <h3 className="font-display text-lg text-charcoal mb-2">
              Champion level
            </h3>
            <p className="text-gold-dark font-bold mb-4">$2,500+</p>
            <ul className="space-y-2 text-charcoal/80 list-disc list-inside font-medium text-sm">
              <li>Name and logo displayed on our website, shirts, team banner, and robot, as well as outreach event at your business/venue of choice.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-charcoal/70 mb-4 font-medium">
          Interested in supporting our team?
        </p>

        <a
          href="https://hcb.hackclub.com/donations/start/double-trouble"
          className="inline-block px-6 py-3 rounded-lg border-[3px] border-charcoal bg-mustard-gold text-charcoal font-display text-sm print-shadow hover:-translate-y-0.5 transition-transform"
        >
          Become a Sponsor
        </a>
      </div>
    </div>
  );
}
