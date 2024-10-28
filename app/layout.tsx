import type { Metadata } from "next";
import localFont from "next/font/local";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "@components/Footer";
import TemplateFrame from "./TemplateFrame";
import { getSupportedCategory } from "@/lib/posts";
import "./styles.css";

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
      <head>
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap`);
        </style>
      </head>
      <body>
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
