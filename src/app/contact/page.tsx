export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-20 text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="text-white mb-6">
        Reach out for sponsorships, collaboration, or questions. We'd love to hear from you!
      </p>

      <p className="text-white mb-6">
        Interested in joining? Fill out our form 
        <a
          href="https://forms.gle/we221JcbqTefauhj7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white- hover:underline"
        >
          here!
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