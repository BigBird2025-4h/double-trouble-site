export default function AboutPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-6">
        <span className="text-punch-red">About</span>{" "}
        <span className="text-steel-blue">Us</span>
      </h1>

      <p className="text-charcoal/80 max-w-2xl mb-10 font-medium">
        Double Trouble is a FIRST Tech Challenge team from
        Chattanooga, TN dedicated to uncomprimising excellence.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="paper-panel p-6 print-shadow-red">
          <h2 className="font-display text-lg text-punch-red mb-3">
            Our Mission
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            We want to show kids that robotics isn't so complicated. FIRST gives students the opportunity to learn all about engineering, programming, and how to work as a team. 
          </p>
        </div>

        <div className="paper-panel p-6 print-shadow-blue">
          <h2 className="font-display text-lg text-steel-blue mb-3">
            What We Do
          </h2>
          <ul className="text-charcoal/80 space-y-2 text-sm font-medium list-disc list-inside">
            <li>use CAD to design robots</li>
            <li>use advanced manufacturing techniques to create our machines</li>
            <li>Write and test code</li>
            <li>Compete in FIRST Tech Challenge events</li>
            <li>Mentor other teams and support STEAM outreach</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-charcoal/70 mb-4 font-medium">
          Want to know more about the team?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg border-[3px] border-charcoal bg-mustard-gold text-charcoal font-display text-sm print-shadow hover:-translate-y-0.5 transition-transform"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
