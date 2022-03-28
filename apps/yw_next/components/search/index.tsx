import React, { useState } from "react";
import { SearchBar } from "./primitives/searchBar";
import { SearchResults } from "./primitives/resultItem";
import Link from "next/link";
import Searcher from "./searcher";
import { Article } from "@components/types";
import { SearchResult } from "./types";
const SearchEngine = new Searcher();

const Search = ({ posts }: { posts: Article[] }): JSX.Element => {
  const [results, saveResults] = useState<SearchResult[] | undefined>();
  SearchEngine.add(posts);

  const runQuery = (query: string) => {
    const results = SearchEngine.query(query);
    saveResults(results);
  };

  const returnResults = (articles: SearchResult[] | undefined) => {
    if (articles && articles.length) {
      const items = articles.map((article: SearchResult, i) => {
        if (!article.data) return null;

        return (
          <Link key={i} href={article.data.link} passHref={true}>
            <SearchResults>{article.data.title}</SearchResults>
          </Link>
        );
      });
      return items;
    }
  };

  return (
    <>
      <SearchBar
        placeholder="Search"
        onKeyUp={(e: {
          target: {
            value: string;
          };
        }) => runQuery(e.target.value)}
      />
      <hr />
      <>{returnResults(results)}</>
    </>
  );
};

export default Search;
