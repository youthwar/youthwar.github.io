import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { posts } from "../getAllPosts";
import GlobalStyle from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout posts={posts}>
        <Component {...pageProps } />
      </Layout>
    </>
  )
}
export default MyApp
