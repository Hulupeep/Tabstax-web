export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  author: string;
  kicker: string;
  excerpt: string;
  keywords: string[];
  faq: Array<{ q: string; a: string }>;
  content: string;
}
