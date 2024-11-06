import type { Metadata } from "next";
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
      {/* <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head> */}
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
