export default function SponsorsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-blue-500">Sponsors</span>
      </h1>

      <p className="text-gray-200 max-w-2xl mb-10">
        We are grateful for the support of our sponsors who help make our FTC robotics program possible.
      </p>

      {/* Sponsor Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="border border-[#30363d] rounded-xl p-6 flex items-center justify-center text-gray-400 hover:shadow-[0_0_20px_rgba(0,0,255,0.2)] transition">
          Sponsor Logo
        </div>

        <div className="border border-[#30363d] rounded-xl p-6 flex items-center justify-center text-gray-400 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition">
          Sponsor Logo
        </div>

        <div className="border border-[#30363d] rounded-xl p-6 flex items-center justify-center text-gray-400 hover:shadow-[0_0_20px_rgba(0,0,255,0.2)] transition">
          Sponsor Logo
        </div>

      </div>

      {/* Thank you section */}
      <div className="border border-[#30363d] rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Thank You
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Your support helps us design, build, and compete with high-performance robots.
          We appreciate every organization that believes in student engineering and STEM education.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">
          Interested in supporting our team?
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition"
        >
          Become a Sponsor
        </a>
      </div>
    </div>
  );
}