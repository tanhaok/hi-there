"use client";
import React from "react";
import Box from "@mui/material/Box";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";
import java from "highlight.js/lib/languages/java";
import python from "highlight.js/lib/languages/python";
import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);
hljs.registerLanguage("go", go);

export default function ShowBlogContent({ content }: { content: string }) {
  React.useEffect(() => {
    document.querySelectorAll<HTMLElement>("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [content]);
  return (
    <Box sx={{ display: "flex", justifyContent: "left" }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}
