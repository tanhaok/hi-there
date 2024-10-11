import type { Metadata } from "next";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/Inter_28pt-Thin.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hi There",
  description: "My website to take notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
