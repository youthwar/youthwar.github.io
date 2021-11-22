enum ArticleCategories {
  js,
  algorithm,
  datastructures,
  leetcode,
}

export type Article = {
  link: string;
  
  module: {
    meta: {
      title: string;
      date: Date;
      description: string;
      categories: [keyof ArticleCategories];
      published: boolean;
    }
  },
}
