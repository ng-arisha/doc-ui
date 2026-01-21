import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700","100","200","300","500","600","800","900"],
 
})

export const metadata: Metadata = {
  title: "Global Medical Outsourcing Solutions",
  description: "medical staffing, doctor outsourcing, healthcare recruitment, Africa medical staffing, Middle East healthcare, emergency doctors, medical consultants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
