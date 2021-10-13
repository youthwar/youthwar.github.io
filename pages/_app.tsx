import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { posts } from "../getAllPosts";
import GlobalStyle from 'styles/globalStyles';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageInfo = posts.reduce((acc: any, curr: any) => {
    const newRouteName = `/articles${curr.link}`;
    const { module: { meta: { title, description }} } = curr;
    if (!acc[newRouteName]) {
      acc[newRouteName] = { title: `Exploratorium: ${title}`, description};
    }
    return acc;
  }, {
    '/': { 
      title: 'Exploratorium: Home', 
      description: "Welcome to the Exploratorium, or colloquially known as Youthwar's knowledge transfer."
    },
    '/404': {
      title: 'Not Found',
      description: 'Whatever you are after, it is not here bud'
    },

    '/500': {
      title: 'WHOA',
      description: 'This is definitely my bad, sorry bud!'
    }
  });

  const { title, description } = pageInfo[router.pathname];
  return (
    <>
      <GlobalStyle />
      <Layout posts={posts} pageTitle={title} description={description}>
        <Component {...pageProps } />
      </Layout>
    </>
  )
}
export default MyApp
