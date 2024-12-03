export interface TAuthor {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    image: string;
    description: string;
    social: {
      youtube: string;
      twitter: string;
      bluesky: string;
    }
  };
  render: () => Promise<{ Content: any }>;
}

export interface TPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    date: any;
    image: string;
    authors: string[];
    categories: string[];
    tags: string[];
    draft: boolean;
  };
  render: () => Promise<{ Content: any }>;
}
