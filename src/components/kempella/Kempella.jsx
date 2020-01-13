import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from "./styles.module.scss"
import global from "../../global/scss/global.module.scss"

import img1 from '../../images/kempella-consultancy/build-zambia.svg'
import img3 from '../../images/kempella-consultancy/kempella_logo.svg'

const Kempella = () => {
  const data = useStaticQuery(graphql`
    query {
      imageTwo: file(relativePath: { eq: "images/kempella-consultancy/kempella.jpg" }) {
        ...fluidImage
      }
    }
  `)
  return (
  <>
  <div className={styles.container}>
    <div className={styles.content}>
      <h3 className={styles.content__heading}>Kempella consultancy Zambia</h3>
      <p>Logo & brand identity, visual style, web design and development. <Link to="https://web.archive.org/web/20161113132353/http://kempellaconsultancy.com/">Kempella</Link>, a small start up focussing on sustainable Corporate Social Responsibility through applied critical thinking in Southern Africa</p>
    </div>

    <Img fluid={data.imageTwo.childImageSharp.fluid} className={`${styles.img__two} ${global.no_margin_bottom}`} />
    <img className={`${styles.img__three} ${global.no_margin_bottom}`} src={img3} alt="" />
    <img className={`${styles.img__one} ${global.no_margin_bottom}`} src={img1} alt="" />
  </div>
  </>
)}

export default Kempella;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
