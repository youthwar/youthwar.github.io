import { SearchBar } from './primitives/searchBar';

const Search = ({ posts }: { posts: [any] }) => {

  console.log(posts);

  return (
    <>
      <SearchBar placeholder="Search"/>
    </>
  )
};

export default Search;
