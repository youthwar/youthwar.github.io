import type { NextPage } from 'next'
import { posts } from "../getAllPosts";
import Link from 'next/link';
import { PostList } from '@components/layout';

const Home: NextPage = () => {
  const builtPosts = posts.filter((post: any) => {
    const { module: { meta } } = post;
    return meta.published;
  }).map((post: any, i: number) => {
    const {
      link,
      module: { meta }
    } = post;

    const {
      title,
      description
    } = meta;

    return (
      <PostList key={i}>
        <Link href={`/articles${link}`} passHref={ true }>
          <div className="list-group-item list-group-item-action py-3 lh-tight post-row">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{ title }</strong>
            </div>
            <div className="col-10 mb-1 small">{description}</div>
          </div>
        </Link>
      </PostList>
    );
  });

  return (
    <div className="list-group list-group-flush border-bottom scrollarea full-width">
      {builtPosts}
    </div>
  );
}

export default Home
