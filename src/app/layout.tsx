import "./globals.css";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

export const metadata = {
  title: "Double Trouble FTC Robotics Team",
  description: "FIRST Tech Challenge robotics team. Engineering, programming, and competition updates.",
};

import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <meta
    name="google-site-verification"
    content="f8bf2slfUDKRHI2AqKArWp81O-UOy2PtBa4fVOQdVFM"
  />
</head>

      <body>
        <Background />
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}