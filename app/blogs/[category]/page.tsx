/**
 * @param {string} category
 * This page only return the blogs category
 */

import { getMetadata, getSupportedCategory } from "@/lib/posts";
import Latest from "@components/Latest";
import { Metadata } from "next";

interface Params {
  params: {
    category: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: params.category.toUpperCase(),
  };
}
// Generates static paths for each post at build time
export async function generateStaticParams(): Promise<Params[]> {
  const paths = getSupportedCategory();
  return paths.map((path) => ({
    params: {
      category: path
    },
  }));
}

export default function CategoryPage({ params }: Params) {
  const blogMetaData = getMetadata(params.category);
  return <Latest blogMetaData={blogMetaData} />;
}
