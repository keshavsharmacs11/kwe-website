import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurukshetra Women Entrepreneurs | Connect. Inspire. Network.",
  description:
    "A community for women entrepreneurs in Kurukshetra to connect, collaborate, learn and grow. Discover KWE events, member stories and Own Your Spotlight 2026.",
  openGraph: {
    title: "Kurukshetra Women Entrepreneurs",
    description: "Connect. Inspire. Network. Be part of the KWE community.",
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
