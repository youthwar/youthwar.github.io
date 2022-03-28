export type SearchResult = {
  data?: {
    title: string;
    link: string;
  };
  key: string | null;
  query: {
    nGrams: string[];
    query: string;
  };
  score: number;
};