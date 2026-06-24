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
      <body className="min-h-screen flex flex-col text-white">
        <Background />
        <Navbar />

        <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-20">          
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}