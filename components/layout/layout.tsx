import Head from "next/head";
import Link from "next/link";
import { Col, Logo, Grid, Row, LeftNav, Main } from './';

export default function Layout({ children, pageTitle, description, posts }: any) {
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
              <input type="text" placeholder="Search"/>
              <hr />
            </LeftNav>
          </Col>

          <Col size={10}>
            <Main>
              { children }
            </Main>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

