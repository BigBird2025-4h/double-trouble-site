export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-20 text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-400 mb-6">
        Reach out for sponsorships, collaboration, or questions. We'd love to hear from you!
      </p>

      <p className="text-gray-400 mb-6">
        Interested in joining? Fill out our form at:
        <a
          href="https://forms.gle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          here
        </a>
      </p>

      <a
        href="mailto:doubletroubleftc@gmail.com"
        className="px-6 py-3 bg-white text-black rounded-lg"
      >
        Email Us!
      </a>
    </div>
  );
}