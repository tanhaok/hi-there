// lib/types.ts
export interface PostData {
  title: string;
  date: string;
  contentHtml: string;
  author: string[];
  next: {
    title: string;
    slug: string;
  };
  prev: {
    title: string;
    slug: string;
  };
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