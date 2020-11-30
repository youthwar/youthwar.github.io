import React from 'react'
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import PageWrap from './layout/primitives/pageWrap';
import FixedWrap from './layout/primitives/fixedWrap';
import HeaderWrap from './layout/primitives/headerWrap';
import ContentWrap from './layout/primitives/mainPageWrap';
import FooterWrap from './layout/primitives/footerWrap';
import GlobalStyle from './globalStyles';
import Search from './search';


class Layout extends React.Component {
  render() {
    const { location, title, children, allPosts } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <PageWrap>
        <GlobalStyle />
        <FixedWrap>
          <HeaderWrap>
            <Link to={'/'}>{title}</Link>
            <Search allPosts={allPosts} />
          </HeaderWrap>
        </FixedWrap>
        <ContentWrap>{children}</ContentWrap>
        <FooterWrap>
          {title} by @youthwar © {new Date().getFullYear()}
        </FooterWrap>
      </PageWrap>
    )
  }
}

export default Layout
