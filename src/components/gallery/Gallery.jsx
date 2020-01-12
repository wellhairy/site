import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from './gallery.module.scss'

export default ({ data }) => {
  console.log(data)
  return (
    <>
    <div className={styles.gallery}>
      <div className={styles.heading}>
        <h2 className={styles.heading__title}>and here's some "flavour"</h2>
        {/* <p className={styles.heading__title}>and here's some "cool" stuff</p> */}
        <p className={styles.heading__inner} aria-hidden>Work</p>
      </div>

      <div className={styles.gallery__items}>
        <StaticQuery query={ graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    featuredImage {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}

        render={data => (
          data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div key={node.id} className={styles.gallery__image}>
              {node.frontmatter.featuredImage ? <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} /> : ''}

              <h2>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                <span> — {`00${index}`}</span>
              </h2>
            </div>
          ))
        )}/>
      </div>
    </div>
    </>
  );
}
