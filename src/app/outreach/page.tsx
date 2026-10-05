export default function OutreachPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-6">
        <span className="text-steel-blue">Outreach</span>
      </h1>

      <p className="text-charcoal/80 max-w-2xl mb-10 font-medium">
        Bringing STEAM to everyone in our community, Pre-K through college, is at the core of what we do. Here are some of the ways
        we engage with the Chattanooga community.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="paper-panel p-6">
          <h2 className="font-display text-lg text-punch-red mb-2">
            <a href="https://4-h.org/" className="text-punch-red hover:underline">
              4-H
            </a>
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            We volunteer with Tennessee 4-H, teaching students in grades K-12 about STEM. Some of our initiatives iclude: 
            <ul className="list-disc list-inside mt-2">
              <li>Volunteering at Hamilton County's 
                <a href="https://hamilton.tennessee.edu/4-h-stem-2/" className="text-punch-red hover:underline">
                  STEM Club,
                </a>
              </li>
              <li>Electric Camp, Academic Conference, Junior Camp, and Junior High Camp</li>
              <li>Leading workshops using Sphero robots at state level events</li>
            </ul>
          </p>
        </div>

        <div className="paper-panel p-6">
          <h2 className="font-display text-lg text-steel-blue mb-2">
            FRC Mentorship
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            We mentor FRC #9073 
            <a href="https://www.frc9073.org/" className="text-punch-red hover:underline">
              Skol Robotics
            </a>
            located in Memphis, TN on Software and CAD. We are also currently in the process of creating a community-based FRC team for Chattanooga. If you'd be interested in that, please reach out to us. The more interest we have in that initiative the more likely it is that we'll be able to create it.
          </p>
        </div>
      </div>

      <div className="paper-panel p-6">
          <h2 className="font-display text-lg text-steel-blue mb-2">
            <a href="https://www.chattanoogastate.edu/" className="text-steel-blue hover:underline">
              Chattanooga State Community College
            </a>
          </h2>
          <p className="text-charcoal/80 text-sm font-medium">
            We started the Aerospace and Rocketry club at 
            <a href="https://csccarc.vercel.app/" className="text-punch-red hover:underline">
              Chattanooga State Community College
            </a>
            to provide students with hands-on experience in engineering, something that was unavailable to the college. We have led over 19 workshops on software, CAD, electronics, and engineering and are currently building a thrust vectoring rocket. We submitted a proposal to compete in the NASA University Student Launch Initiative, however we were not selected this year.
          </p>
        </div>

      <div className="mt-12 text-center">
        <p className="text-charcoal/70 mb-4 font-medium">
          if you would like us at your event or are interested in partnering with us please contact us.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg border-[3px] border-charcoal bg-mustard-gold text-charcoal font-display text-sm print-shadow hover:-translate-y-0.5 transition-transform"
        >
          Reach Out
        </a>
      </div>
    </div>
  );
}
