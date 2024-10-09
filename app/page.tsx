import { getSupportedCategory } from "@/lib/posts";
import Blog from "./blog";


export default function Home() {
  const supportedCategory = getSupportedCategory();
  return (
    <Blog supportedCategory={supportedCategory} />    
  );
}
