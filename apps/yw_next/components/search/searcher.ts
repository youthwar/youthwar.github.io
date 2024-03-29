import { Article } from '@components/types'
import { SearchResult } from './types';
type NGrams = string[];
type DBEntry =  {
  id: number;
  fullStr: string;
  link: string;
  title: string;
  nGrams: NGrams;
};

type DB = {
  [key: string]: DBEntry
}

class Search{
  cache:{
    [key: string]: SearchResult[]
  } = {};
  DB: DB = {};
  nGramSize = 2;

  createNGrams(s: string): NGrams {
    const nGramPadding = this.nGramSize - 1;
    s = `${' '.repeat(nGramPadding)}${s.toLowerCase()}${' '.repeat(nGramPadding - 1)}`;

    const ngrams = new Array((s.length - this.nGramSize) + 1);

    for (let i = 0; i < ngrams.length; i++) {
      ngrams[i] = s.slice(i, i + this.nGramSize);
    }
    return ngrams;
  }

  calculateDistance(query: string): SearchResult[] {

    if (!query) { return [{ key: null, query: { nGrams: [], query}, score: 0.0}]; }

    if (this.cache[query]) return this.cache[query];

    const queryNGrams = this.createNGrams(query);
    const scores: {
      key: string;
      query: {
        nGrams: string[];
        query: string;
      };
      score: number;
      data?: {
        nGrams: string[]
      }[]
    }[] = [];

    Object.keys(this.DB).forEach(key => {
      const { nGrams } = this.DB[key];
      let querySet = new Set(queryNGrams);
      let total = nGrams.length;
      let hits = 0;

      for (let item of nGrams) {
        if (querySet.delete(item)) {
          hits++;
        }
      }

      if (hits >= query.length) {
        scores.push({
          key,
          query: {
            nGrams: queryNGrams,
            query
          },
          score: hits / total
        });
      }
    });

    const hydratedResults: SearchResult[] = scores
      .sort((a, z) => z.score - a.score)
      .map((result) => {
        const resultData = this.DB[result.key];
        return {
          ...result,
          data: resultData
        };
      });

    this.cache[query] = hydratedResults;
    return this.cache[query];
  }

  query(queryString: string): SearchResult[] {
    return this.calculateDistance(queryString)
  }

  generateUUID(str: string): number {
    let hash = 0;
    let i = 0;
    let len = str.length;
    while ( i < len ) {
      hash  = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
    }
    return (hash + 2147483647) + 1;
  }

  add(articles: Article[]) {
    const filteredSearch = articles.filter((article) => article.module.meta.published);

    filteredSearch.forEach((article) => {
      const { link, module: { meta: { title, description, categories }} } = article;
      const fullStr = `${title} ${description} ${categories.join(' ')}`;
      const nGrams = this.createNGrams(fullStr);
      const id = this.generateUUID(link);
      const Obj: DBEntry = {
        id,
        fullStr,
        link: `/articles${link}`,
        title,
        nGrams
      };

      this.DB[id] = Obj;
    });
  }
}

export default Search;
