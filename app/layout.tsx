import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurukshetra Women Entrepreneurs | Members, Events & Community",
  description:
    "Meet the women entrepreneurs of Kurukshetra, explore KWE member stories, community photographs, partner opportunities and Own Your Spotlight 2026.",
  openGraph: {
    title: "Kurukshetra Women Entrepreneurs | Connect. Inspire. Network.",
    description: "Explore the KWE community, meet its members, discover event moments and learn about partner opportunities.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
