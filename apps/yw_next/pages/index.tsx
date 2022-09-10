import type { NextPage } from "next";
import { posts } from "../getAllPosts";
import Link from "next/link";
import { PostList } from "@components/layout";
import { Article } from "@components/types/index";

const Home: NextPage = () => {
  const builtPosts = posts
    .filter(
      (post: {
        module: {
          meta: {
            published: boolean;
          };
        };
      }) => {
        const {
          module: { meta },
        } = post;
        return meta.published;
      }
    )
    .sort((a: Article, z: Article) => {
      const aDate: number = new Date(a.module.meta.date).getTime();
      const zDate: number = new Date(z.module.meta.date).getTime();
      return zDate - aDate;
    })
    .map(
      (
        post: {
          link: string;
          module: {
            meta: {
              title: string;
              description: string;
              date: Date;
            };
          };
        },
        i: number
      ) => {
        const {
          link,
          module: { meta },
        } = post;

        const { title, description, date } = meta;

        return (
          <PostList key={i}>
            <Link href={`/articles${link}`} passHref={true}>
              <div>
                <div>
                  <strong className="mb-1">
                    {title} {date}
                  </strong>
                </div>
                <div>{description}</div>
              </div>
            </Link>
          </PostList>
        );
      }
    );

  return <>{builtPosts}</>;
};

export default Home;
