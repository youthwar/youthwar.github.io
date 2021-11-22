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
        <Link href={`/articles${link}`} passHref={true}>
          <div>
            <div>
              <strong className="mb-1">{title}</strong>
            </div>
            <div>{description}</div>
          </div>
        </Link>
      </PostList>
    );
  });

  return (
    <div>
      {builtPosts}
    </div>
  );
}

export default Home
