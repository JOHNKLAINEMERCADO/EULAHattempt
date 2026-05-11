import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalysisProvider } from "@/components/AnalysisProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EULAH - Never Get Blindsided By Legal Fine Print",
  description:
    "AI-powered browser extension that detects risky clauses in Terms of Service, Privacy Policies, and legal documents before you click 'I Agree'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AnalysisProvider>{children}</AnalysisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
