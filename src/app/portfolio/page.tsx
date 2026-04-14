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
            Robot Design v1
          </h2>
          <p className="text-gray-400 text-sm">
            Early drivetrain and chassis development focused on stability and speed.
          </p>
        </div>

        <div className="border border-[#30363d] p-6 rounded-xl hover:shadow-[0_0_25px_rgba(0,0,255,0.25)] transition">
          <h2 className="text-xl font-bold text-blue-500 mb-2">
            Autonomous System
          </h2>
          <p className="text-gray-400 text-sm">
            Vision-assisted autonomous routines and path planning experiments.
          </p>
        </div>

      </div>
    </div>
  );
}