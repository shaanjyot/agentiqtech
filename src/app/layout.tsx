import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AgentIQ Technologies — Agentic AI for public systems | CivicLens",
  description:
    "AgentIQ Technologies builds agentic AI systems for the public sector. CivicLens turns a city's civic workflow — complaints, tax, fleet, field survey, approvals — into one accountable operating system, with a human deciding every outcome.",
  openGraph: {
    title: "AgentIQ Technologies — Agentic AI for public systems",
    description:
      "CivicLens: the civic operating system for local government. One command centre, four apps, and an agent that speaks Assamese, Bengali, Bodo and English.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
