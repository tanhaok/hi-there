// lib/types.ts
export interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

interface MappingData {
  title: string;
  slug: string;
}

export interface Metadata {
  category: string;
  mappingData: MappingData[];
}
