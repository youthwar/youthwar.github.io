import lunr from "lunr";
import { useLunr } from "react-lunr";
import React, { useState } from 'react';
import { Link } from 'gatsby';

import SearchWrap from './primitives/searchWrap';
import InputWrap from './primitives/inputWrap';
import ResultsTitle from './primitives/resultsTitle';
import ResultsWrap from './primitives/resultWrap';

const search = ({ allPosts }) => {
  const [ query, setQuery ] = useState(null);

  const index = lunr(function() {
    this.ref("id");
    this.field("title");
    this.field("body");
    this.field("tags");

    if (allPosts && allPosts.length > 0) {
      allPosts.forEach(({ node }, idx) => {
        this.add({
          title: node.frontmatter.title,
          body: node.excerpt,
          tags: node.frontmatter.tags.join(' '),
          id: idx,
        });
      });  
    }
  });

  const formSubmit = (e) => {
    const { currentTarget } = e;
    const { value: query } = currentTarget;
    const cleanQuery = `${query.trim()}*`;

    if (cleanQuery.length > 2) {
      setQuery(cleanQuery);
    } else {
      setQuery(null)
    }
  };

  const results = useLunr(query, index, allPosts);

  const formatResults = (res) => {
    if ( res.length > 0 ) {
      const results = res.map(( post ) => {
        return (
          <ResultsWrap key={post.node.id}>
            <Link to={post.node.fields.slug}>
              { post.node.frontmatter.title}
            </Link>
          </ResultsWrap>
        );
      });

      return (
        <>
          <ResultsTitle>Search Results:</ResultsTitle>
          { results }
        </>
      );

    } else {
      return false;
    }

  };
  
  return (
    <SearchWrap>
      <InputWrap type="text" placeholder="search" onKeyUp={formSubmit}></InputWrap>
      { formatResults(results)}
    </SearchWrap>
  );


}

export default search;