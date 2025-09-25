import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Plumber Farmingdale NY",
  description:
    "Expert plumbing services in Farmingdale, NY. 24/7 emergency plumbers you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
