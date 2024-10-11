// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Metadata, Params, PostData } from "./type";
import MappingData from "../posts/config.json";
const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds(): Params[] {
  const results: Params[] = [];
  MappingData.forEach((data) => {
    data.posts.forEach((post) => {
      results.push({
        params: {
          slug: post.slug,
          category: data.name,
        },
      });
    });
  });
  return results;
}

const getFileContent = (category: string, slug: string): string => {
  const fullPath = path.join(postsDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
};

export async function getPostDataWithContent(
  category: string,
  slug: string
): Promise<PostData> {
  const fileContents = getFileContent(category, slug);

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    author: matterResult.data.authors,
    contentHtml: contentHtml,
  };
}

export const getMetadata = (): Metadata[] => {
  const results: Metadata[] = [];
  MappingData.forEach((data) => {
    data.posts.forEach((post) => {
      const fileContent = getFileContent(data.name, post.slug);
      const matterResult = matter(fileContent);
      results.push({
        title: post.title,
        description: matterResult.data.description,
        slug: post.slug,
        tag: data.name,
        date: matterResult.data.date,
        authors: matterResult.data.authors,
      });
    });
  });
  return results;
};

export function getPostTitle(category: string, slug: string): string {
  const associatedPost = MappingData.find(
    (data) => data.name === category
  )?.posts.find((post) => post.slug === slug);
  if (associatedPost) {
    return associatedPost.title;
  }
  return "Hi There";
}

export function getSupportedCategory(): string[] {
  const categories: string[] = [];
  MappingData.forEach((data) => {
    categories.push(data.name);
  });

  return categories;
}
