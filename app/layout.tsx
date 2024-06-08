import type { Metadata } from "next";
import { jetbrain } from "@/components/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derren | Fullstack Developer",
  description: "Make your ideo to be real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrain.className} `}>{children}</body>
    </html>
  );
}
