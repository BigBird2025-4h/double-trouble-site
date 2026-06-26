export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-red-500">Portfolio</span>
      </h1>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Our robotics builds, engineering work, and software systems developed
        for FIRST Tech Challenge.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border border-[#30363d] p-6 rounded-xl hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transition">
          <h2 className="text-xl font-bold text-red-500 mb-2">
            2026 CC portfolio
          </h2>
          <p className="text-gray-400 text-sm">
            Our FTC Discord CAD Competition 2026 portfolio 
          </p>
        </div>

        <div className="border border-[#30363d] p-6 rounded-xl hover:shadow-[0_0_25px_rgba(0,0,255,0.25)] transition">
          <h2 className="text-xl font-bold text-blue-500 mb-2">
            Github
          </h2>
          <p className="text-gray-400 text-sm">
            <a>href=https://github.com/Double-Trouble-FTC-35725 </a>
            Access our Github here! 
          </p>
        </div>

      </div>
    </div>
  );
}