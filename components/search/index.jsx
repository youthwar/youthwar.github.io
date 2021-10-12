import { useState } from 'react';
import { SearchBar } from './primitives/searchBar';
import { SearchResults } from './primitives/resultItem';
import Link from 'next/link';
import Searcher from './searcher';

const SearchEngine = new Searcher();

const Search = ({ posts }) => {

  const [ results, saveResults] = useState(false);
  SearchEngine.add(posts);

  const runQuery = (query) => {
    const results = SearchEngine.query(query);
    saveResults(results);
  }

  const returnResults = (articles) => {
    if (articles && articles.length) {
      const items = articles.map((article, i) => {
        if (!article.data) return null;
        
        return (
          <Link key={i} href={article.data.link} passHref={true}>
            <SearchResults>{article.data.title}</SearchResults>
          </Link>
        );
      });
      return items;
    }
  }

  return (
    <>
      <SearchBar placeholder="Search" onKeyUp={(e) => runQuery(e.target.value)}/>
      <hr />
      <>
        { returnResults(results) }
      </>
    </>
  )
};

export default Search;
