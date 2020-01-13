import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from "./styles.module.scss"

const WallGraphics = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/wall-graphics/4S2A6910.jpg" }) {
        ...fluidImage
      }
      imageTwo: file(relativePath: { eq: "images/wall-graphics/large-wall.jpg" }) {
        ...fluidImage
      }
      imageThree: file(relativePath: { eq: "images/wall-graphics/contact-hall-2.png" }) {
        ...fluidImage
      }
    }
  `)
  return (
  <>
  <div className={styles.container}>
    <div className={styles.content}>
      <h3 className={styles.content__heading}>Kent contact centre wall graphics</h3>
      <p>A super fun piece of work - large format wall graphics designed to inspire employes after the re-commissioning of the Kent contact centre. These graphics where produced in partnership with contact centre staff. The idea used Kent landmarks and historical buildings to create a unique design individual to kent and the people who worked in the contact centre.</p>
    </div>

    <Img fluid={data.imageOne.childImageSharp.fluid} className={`${styles.img} ${styles.img__one}`} />
    <Img fluid={data.imageTwo.childImageSharp.fluid} className={`${styles.img} ${styles.img__two}`} />
    <Img fluid={data.imageThree.childImageSharp.fluid} className={`${styles.img} ${styles.img__three}`} />
  </div>
  </>
)}

export default WallGraphics;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
