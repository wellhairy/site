import React from 'react'
// import Img from "gatsby-image"
import styles from "./styles.module.scss"
import global from "../../global/scss/global.module.scss"

import img1 from '../../images/journey-illustrations/car.png'
import img2 from '../../images/journey-illustrations/plain.png'
import img3 from '../../images/journey-illustrations/boat.png'

const Pensions = () => (
  <>
  <div className={styles.container}>
    <div className={styles.content}>
      <h3 className={styles.content__heading}>Kent pensions fund website</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid quos, enim voluptates, magnam ducimus itaque autem molestias, commodi animi optio beatae! Animi, et a odit dignissimos ex illum distinctio!</p>
    </div>

    <img className={`${styles.img__one} ${global.no_margin_bottom}`} src={img1} alt="" />
    <img className={`${styles.img__two} ${global.no_margin_bottom}`} src={img2} alt="" />
    <img className={`${styles.img__three} ${global.no_margin_bottom}`} src={img3} alt="" />
  </div>
  </>
)

export default Pensions;
