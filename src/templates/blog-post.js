import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import BlogWrap from '../components/blogLayout/blogWrap';
import PostDate from '../components/blogLayout/postDate';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const allPosts = this.props.data.allMdx.edges;
    
    return (
      <Layout location={this.props.location} title={siteTitle} allPosts={allPosts}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <BlogWrap>
          <PostDate>{post.frontmatter.date}</PostDate>
          <h1>{post.frontmatter.title}</h1>

          <MDXRenderer>{post.body}</MDXRenderer>
        </BlogWrap>

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 100000)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
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
