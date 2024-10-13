// lib/types.ts
export interface PostData {
  title: string;
  date: string;
  contentHtml: string;
  description: string;
  author: string[];
}

export interface Params {
  params: {
    category: string;
    slug: string;
  };
}

export interface Metadata {
  title: string;
  description: string;
  slug: string,
  tag: string,
  authors: string[],
  date: string,
}