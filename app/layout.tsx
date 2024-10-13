import type { Metadata } from "next";
import localFont from "next/font/local";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "@components/Footer";
import TemplateFrame from "./TemplateFrame";
import { getSupportedCategory } from "@/lib/posts";
import "./styles.css";

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
  const supportedCategory = getSupportedCategory();

  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TemplateFrame supportedCategory={supportedCategory}>
          <CssBaseline enableColorScheme />
          <Container
            maxWidth="lg"
            component="main"
            sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
          >
            {children}
          </Container>
          <Footer />
        </TemplateFrame>
      </body>
    </html>
  );
}
