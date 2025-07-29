import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ClerkThemeProvider from "@/components/ClerkThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ai Expense Tracker",
  description: "Track your expenses with AI Advice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <ClerkThemeProvider>
        <html lang="en">
          <body className={`${inter.className} ${poppins.className}`}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkThemeProvider>
    </ThemeProvider>
  );
}
