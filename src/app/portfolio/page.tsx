export default function PortfolioPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-6">
        <span className="text-punch-red">Portfolio</span>
      </h1>

      <p className="text-charcoal/80 mb-10 max-w-2xl font-medium">
        Our robotics builds, engineering work, and software systems developed
        for FIRST Tech Challenge.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="paper-panel p-6 print-shadow-red transition hover:-translate-y-1">
          <h2 className="font-display text-lg text-punch-red mb-2">
            2026 CC portfolio
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            Our FTC Discord CAD Competition 2026 portfolio
          </p>
        </div>

        <div className="paper-panel p-6 print-shadow-blue transition hover:-translate-y-1">
          <h2 className="font-display text-lg text-steel-blue mb-2">
            Github
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            <a
              href="https://github.com/Double-Trouble-FTC-35725"
              className="text-steel-blue hover:text-punch-red underline"
            >
              Access our Github here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
