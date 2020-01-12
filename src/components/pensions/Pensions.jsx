import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from "./styles.module.scss"
import global from "../../global/scss/global.module.scss"

const Pensions = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/pensions/people-icons.png" }) {
        ...fluidImage
      }
      imageTwo: file(relativePath: { eq: "images/pensions/people-3.jpg" }) {
        ...fluidImage
      }
      imageThree: file(relativePath: { eq: "images/pensions/pensions-mood-board.jpg" }) {
        ...fluidImage
      }
      imageFour: file(relativePath: { eq: "images/pensions/pensions_website2.png" }) {
        ...fluidImage
      }
    }
  `)
  return(
  <>
  <div className={styles.container}>
    <div className={`${styles.content} ${styles.content_one}`}>
      <h3 className={styles.section_title}>Kent pensions fund</h3>
      <h4 className={styles.content_heading}>Graphics</h4>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid quos, enim voluptates, magnam ducimus itaque autem molestias, commodi animi optio beatae! Animi, et a odit dignissimos ex illum distinctio!</p> */}
    </div>

    <Img fluid={data.imageTwo.childImageSharp.fluid} className={`${styles.img__two} ${global.no_margin_bottom}`} />
    <Img fluid={data.imageOne.childImageSharp.fluid} className={`${styles.img__one} ${global.no_margin_bottom}`} />
    <Img fluid={data.imageThree.childImageSharp.fluid} className={`${styles.img__three} ${global.no_margin_bottom}`} />

    <div className={`${styles.content} ${styles.content_two}`}>
      <h4 className={styles.content_heading}>Website</h4>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid quos, enim voluptates, magnam ducimus itaque autem molestias, commodi animi optio beatae! Animi, et a odit dignissimos ex illum distinctio!</p> */}
    </div>

    <Img fluid={data.imageFour.childImageSharp.fluid} className={`${styles.img__four} ${global.no_margin_bottom}`} />
  </div>
  </>
)}

export default Pensions;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

