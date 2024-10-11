import { getMetadata, getSupportedCategory } from "@/lib/posts";
import Blog from "./blog";



export default function Home() {
  const supportedCategory = getSupportedCategory();
  const blogMetaData = getMetadata();
  return (
    <Blog supportedCategory={supportedCategory} blogMetaData = {blogMetaData} />    
  );
}
