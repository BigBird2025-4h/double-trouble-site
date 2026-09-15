export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-10 text-center paper-panel p-10 print-shadow">
      <h1 className="font-display text-2xl sm:text-3xl mb-6 text-punch-red">
        Contact Us
      </h1>

      <p className="text-charcoal/80 mb-6 font-medium">
        Reach out for sponsorships, collaboration, or questions. We&apos;d love to hear from you! If the links dont work call 423-749-3136 or email us at doubletrouble35725@gmail.com.
      </p>

      <p className="text-charcoal/80 mb-6 font-medium">
        Interested in joining? Fill out our form{" "}
        <a
          href="https://docs.google.com/forms/d/1zdhwRKNvNX1O600cyJk3JRoK40nsN6CjnS75oSoAFuY/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel-blue hover:text-punch-red underline"
        >
          here!
        </a>
      </p>

      <a
        href="mailto:doubletrouble35725@gmail.com"
        className="inline-block px-6 py-3 rounded-lg border-[3px] border-charcoal bg-mustard-gold text-charcoal font-display text-sm print-shadow hover:-translate-y-0.5 transition-transform"
      >
        Email Us!
      </a>
    </div>
  );
}
