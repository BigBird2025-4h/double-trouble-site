import "./globals.css";
import { Bungee, Barlow } from "next/font/google";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

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
      <body
        className={`${bungee.variable} ${barlow.variable} min-h-screen flex flex-col text-charcoal bg-cream`}
      >
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
