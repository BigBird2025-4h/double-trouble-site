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
            <li>• Fusion 360 (Advanced Design)</li>
            <li>• Basic Mechanical Sketching</li>
          </ul>
        </div>

        {/* Software */}
        <div className="border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Software
          </h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Java / Kotlin (FTC SDK)</li>
            <li>• Road Runner / Motion Planning</li>
            <li>• Git & GitHub Version Control</li>
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

        {/* Learning */}
        <div className="border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Learning Resources
          </h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• FIRST Tech Challenge Docs</li>
            <li>• FTC Discord Community</li>
            <li>• YouTube Engineering Breakdowns</li>
          </ul>
        </div>

      </div>
    </div>
  );
}