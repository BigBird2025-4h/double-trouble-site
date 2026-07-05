export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-red-500">Resources</span>
      </h1>

      <p className="text-gray-400 max-w-2xl mb-10">
        Tools, guides, and systems we use to design, build, and program our FTC robots.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* CAD */}
        <div className="border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            CAD & Design
          </h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Onshape (3D Modeling)</li>
          </ul>
        </div>

        {/* Software */}
        <div className="border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Software
          </h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Java / Kotlin (FTC SDK)</li>
            <li>• Our custom pathing software</li>
            <li>• Team Github</li>
          </ul>
        </div>

        {/* Strategy */}
        <div className="border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Competition Strategy
          </h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Game manual analysis</li>
            <li>• Autonomous scoring planning</li>
            <li>• Driver practice routines</li>
          </ul>
        </div>

        {/* Learning links*/}
        <div className="border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Learning Resources
          </h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Java for FTC</li>
            <li><a href="https://github.com/alan412/LearnJavaForFTC/blob/master/LearnJavaForFTC.pdf" className="text-blue-400 hover:text-blue-300">Learn Java for FTC (PDF)</a></li>
            <li>• FTC Discord</li>
            <li><a href="https://discord.com/invite/ftc" className="text-blue-400 hover:text-blue-300">FTC Discord Server</a></li>
            <li>• Best Youtube Resources</li>
            <li><a href="https://www.youtube.com/channel/UCTvd5lUSLtTH8Qcd7Pl1nQg" className="text-blue-400 hover:text-blue-300">Official Onshape YouTube Channel</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}