import type { NextPage } from 'next'
import { posts } from "../getAllPosts";
import Link from 'next/link';
import { PostList } from '@components/layout';
import {Article} from '@components/types/index';

const Home: NextPage = () => {
  const builtPosts = posts.filter((post: any) => {
    const { module: { meta } } = post;
    return meta.published;
  })
  .sort((a: Article, z: Article) => {
    const aDate = new Date(a.module.meta.date);
    const zDate = new Date(z.module.meta.date);
    // @ts-ignore
    return zDate - aDate;
  })
  .map((post: any, i: number) => {
    const {
      link,
      module: { meta }
    } = post;

    const {
      title,
      description,
      date
    } = meta;

    return (
      <PostList key={i}>
        <Link href={`/articles${link}`} passHref={true}>
          <div>
            <div>
              <strong className="mb-1">{title} {date}</strong>
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
