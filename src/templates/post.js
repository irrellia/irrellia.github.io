import React from "react"
import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/post.module.css"
import tempe from "tempe"
import "../styles/link.css"

function BlogPage({ data }) {
  const { title, date, cover, tags } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO
        url={`https://irrellia.github.io/${data.markdownRemark.fields.slug}`}
        title={title}
        description={data.markdownRemark.snippet.replace(/(<([^>]+)>)/gi, "")}
        image={cover.childImageSharp.fixed.src}
      />
      <div className={Styles.container}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.date}>
          Posted on {tempe(date).format("dd, DD MMMM YYYY")}
        </p>
        {data.markdownRemark.timeToRead === 1 ? (
          <p className={Styles.time}>
            {data.markdownRemark.timeToRead} minute to read
          </p>
        ) : (
          <p className={Styles.time}>
            {data.markdownRemark.timeToRead} minutes to read
          </p>
        )}

        <div className={Styles.toc}>
          <span className={Styles.tocTitle}>Table Of Contents</span>
          <hr className={Styles.divider} />
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.tableOfContents,
            }}
          ></div>
        </div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <hr className={Styles.tagDivider} />
        <Disqus />
        {tags.map(tag => (
          <Link key={tag} to={`/tags/${tag}`}>
            <span className={Styles.tag}>{tag}</span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 640, height: 360) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      html
      timeToRead
      tableOfContents
      snippet
    }
  }
`
