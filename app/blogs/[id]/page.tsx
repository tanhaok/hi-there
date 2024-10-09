// app/blog/[id]/page.tsx
import { getAllPostIds, getPostDataWithContent } from "../../../lib/posts";
import { PostData } from "../../../lib/type";

interface Params {
  params: {
    id: string;
  };
}

// Generates static paths for each post at build time
export async function generateStaticParams(): Promise<Params[]> {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id, 
  }));
}

// Fetches the content for each post based on the ID
export default async function Post({ params }: Params) {
  const postData: PostData = await getPostDataWithContent(params.id);

  return (
    <article>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
