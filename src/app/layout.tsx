import "./globals.css";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

export const metadata = {
  title: "Double Trouble FTC",
  description:
    "FIRST Tech Challenge robotics team. Engineering, programming, and competition updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}