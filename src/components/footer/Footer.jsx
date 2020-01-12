import React from 'react'
import styles from "./footer.module.scss"

const Footer = () => (
  <>
  <div className={styles.footer}>
    <div className={styles.footer__inner}>
      {/* <div className={styles.footer__border}></div> */}
      
      <div className={styles.footer__content}>
        <h2>
          <div className={styles.footer__text}>Feel free to</div>

          <div className={styles.footer__heading}>
              Get in touch <span aria-hidden>Get in touch</span>
          </div>
        </h2>

        <p className={styles.footer__text}>
          Say <a href="mailto:hi@wellhairy.com">hi@wellhairy.com</a>. 
        </p>
        <p className={styles.footer__text}>
          I'm avalible for freelance work but if you just want to talk or need some advice feel free drop me a line.
        </p>
      </div>

      {/* <div className={`${styles.footer__border} ${global.no_margin_bottom} ${global.margin_top}`}></div> */}
    </div>
  </div>

  <nav className={styles.list}>
    <ul className={styles.list__inner}>
      <li className={styles.list__item}>
        <a href="https://www.instagram.com/wellhairy/">instagram</a>
      </li>
      <li className={styles.list__item}>
        <a href="https://www.behance.net/wellhairy/">behance</a>
      </li>
      <li className={styles.list__item}>
        <a href="https://www.linkedin.com/in/wellhairy/">linkedin</a>
      </li>
      <li className={styles.list__item}>
        <a href="https://github.com/wellhairy/">github</a>
      </li>
    </ul>
  </nav>
  </>
)

export default Footer;
