import Image from "next/image";

// Add your sponsors here. Put logo files in /public/sponsors/
// and reference them as "/sponsors/filename.png"
const sponsors = [
  {
    name: "Scenic City Orthodontics",
    logo: "public/sponsors/SCO-LOGO-2.png",
    url: "https://www.sceniccityortho.com/",
  },
  // { name: "...", logo: "/sponsors/...", url: "..." },
];

export default function SponsorsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-blue-500">Sponsors</span>
      </h1>

      {sponsors.length === 0 ? (
        <p className="text-gray-200 max-w-2xl mb-10">
          We haven't been sponsored by anyone yet; your support would be much
          appreciated!
        </p>
      ) : (
        <p className="text-gray-200 max-w-2xl mb-10">
          Thank you to the sponsors who make it possible for our team to compete!
        </p>
      )}

      {/* Sponsor Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#30363d] rounded-xl p-6 flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,0,255,0.2)] transition bg-white/5"
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={200}
              height={100}
              className="object-contain max-h-24 w-auto"
            />
          </a>
        ))}
      </div>

      {/* Sponsorship Levels */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-red-500">Sponsorship</span>
          <span className="text-blue-500"> Levels</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Tier 1 */}
          <div className="rounded-xl border-2 border-red-500 p-6 bg-red-500/5 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              Rookie level
            </h3>
            <p className="text-blue-400 font-medium mb-4">$100+</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Name listed on our website.</li>
              <li>Thank-you on our social media.</li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="rounded-xl border-2 border-blue-500 p-6 bg-blue-500/5 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              heavyweight level
            </h3>
            <p className="text-blue-400 font-medium mb-4">$500+</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Everything in Rookie Level.</li>
              <li>Small logo displayed on our website.</li>
              <li>Recognition on team promotional materials.</li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="rounded-xl border-2 border-red-500 p-6 bg-red-500/5 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              Knockout level
            </h3>
            <p className="text-blue-400 font-medium mb-4">$1,000+</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Everything in heavyweight level.</li>
              <li>Large logo on our website.</li>
              <li>Logo featured on our team banner.</li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div className="rounded-xl border-2 border-blue-500 p-6 bg-blue-500/5 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Champion level
            </h3>
            <p className="text-blue-300 font-medium mb-4">$2,500+</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Everything in Knockout level.</li>
              <li>Premier logo placement on our website.</li>
              <li>Featured on the robot.</li>
              <li>Special recognition as a major team sponsor.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">
          Interested in supporting our team?
        </p>
        <a
          href="https://hcb.hackclub.com/donations/start/double-trouble"
          className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition"
        >
          Become a Sponsor
        </a>
      </div>
    </div>
  );
}