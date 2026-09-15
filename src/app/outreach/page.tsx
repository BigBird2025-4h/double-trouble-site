export default function OutreachPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-6">
        <span className="text-steel-blue">Outreach</span>
      </h1>

      <p className="text-charcoal/80 max-w-2xl mb-10 font-medium">
        Bringing STEAM to our community is at the core of what we do. Here are some of the ways
        we engage with our community.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="paper-panel p-6">
          <h2 className="font-display text-lg text-punch-red mb-2">
            Community Events
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            We bring our robots to local events, schools, and libraries to
            recruit and show local students what FIRST robotics is.
          </p>
        </div>

        <div className="paper-panel p-6">
          <h2 className="font-display text-lg text-steel-blue mb-2">
            Mentoring
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            We mentor FRC #9073 skol robotics and lead the Aerospace and Rocketry club at Chattanooga State Community College. We have currently led 19 Onshape and programming workshops for college students.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-charcoal/70 mb-4 font-medium">
          if you would like us at your event or are interested in partnering with us please contact us.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg border-[3px] border-charcoal bg-mustard-gold text-charcoal font-display text-sm print-shadow hover:-translate-y-0.5 transition-transform"
        >
          Reach Out
        </a>
      </div>
    </div>
  );
}
