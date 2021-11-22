import React from 'react';
import Head from "next/head";
import Link from "next/link";
import { Col, Logo, Grid, Row, LeftNav, Main } from './';
import Search from '../search';

type Props = {
  children?: JSX.Element;
  pageTitle: string;
  description: string;
  posts: any[];
}

const Layout: React.FC<Props> = ({ children, pageTitle, description, posts }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <Grid>
        <Row>
          <Col size={1}>
            <LeftNav>
              <Link href="/" passHref>
                <Logo>
                  Exploratorium
                </Logo>
              </Link>
              <Search posts={posts} />
            </LeftNav>
          </Col>

          <Col size={10}>
            <Main>
              {children}
            </Main>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default Layout;
