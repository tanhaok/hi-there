// app/blog/[id]/page.tsx
import { Metadata } from "next";
import {
  getAllPostIds,
  getPostDataWithContent,
  getPostTitle,
} from "../../../../lib/posts";
import { PostData } from "../../../../lib/type";
import './styles.css';

interface Params {
  params: {
    category: string;
    slug: string;
  };
}

// Generates static paths for each post at build time
export async function generateStaticParams(): Promise<Params[]> {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    params: {
      category: path.params.category,
      slug: path.params.slug,
    },
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data: string = getPostTitle(params.category, params.slug);
  return {
    title: data,
  };
}

// Fetches the content for each post based on the ID
export default async function Post({ params }: Params) {
  const postData: PostData = await getPostDataWithContent(
    params.category,
    params.slug
  );

  return (
    <article>
      <p>{postData.date}</p>
      {/* <Typography variant="body2">{postData.title}</Typography> */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
