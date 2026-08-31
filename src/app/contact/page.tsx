export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-20 text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-400">Contact
        <span className="text-blue-400"> Us</span>
      </h1>

      <p className="text-white mb-6">
        Reach out for sponsorships, collaboration, or questions. We'd love to hear from you! Email at doubletroubleftc@gmail.com or call 423-749-3136.
      </p>

      <p className="text-white mb-6">
        Interested in joining? Fill out our form &nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScOhhXf0-mxo7Gzb8OgqeeWJu6_c34c3Hwn1MBDSP1LNSLOZw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white- hover:text gradient-to-r from-red-500 to-blue-500 font-semibold"
        >
          here!
        </a>
      </p>

      <a
        href="mailto:doubletroubleftc@gmail.com"
        className="px-6 py-3 bg-white text-black rounded-lg"
      >
        Email Us or call 423-759-3136!
      </a>
    </div>
  );
}