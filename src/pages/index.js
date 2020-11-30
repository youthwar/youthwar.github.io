import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import ArticleWrap from '../components/homepage/primitives/articleWrap'
import DateWrap from '../components/homepage/primitives/date'
import TitleWrap from '../components/homepage/primitives/title'
import TagWrap from '../components/homepage/primitives/tag'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    let morePosts = [...posts];
    return (
      <Layout location={this.props.location} title={siteTitle} allPosts={posts}>
        <SEO
          title="All posts"
          keywords={[`blog`, `youthwar`, `javascript`, `react`]}
        />
        {morePosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <ArticleWrap key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <DateWrap>{node.frontmatter.date}</DateWrap>
                <TitleWrap>{title}</TitleWrap>
                <TagWrap> {node.frontmatter.tags.join(', ')} </TagWrap>
              </Link>
            </ArticleWrap>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100000)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM-DD-YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
