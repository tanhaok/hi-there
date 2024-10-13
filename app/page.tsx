import { getMetadata } from "@/lib/posts";
import Latest from "@components/Latest";

export default function Home() {
  const blogMetaData = getMetadata(null);
  return <Latest blogMetaData={blogMetaData} />;
}
