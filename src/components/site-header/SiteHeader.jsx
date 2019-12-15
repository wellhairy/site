import React from 'react'
import Link from 'gatsby-link'
import Config from "../../../SiteConfig";
import SiteNavigation from '../site-navigation/SiteNavigation';

import "./site-header.scss"

const SiteHeader = () => (
  <div className="site-header">
    <div className="site-header__inner">
      <h1 className="site-header__heading">
        <Link
          to="/"
          className="site-header__link"
        >
         Site
        </Link>
      </h1>
      <div className="site-header__navigation">
        {SiteNavigation(Config.links)}
      </div>
    </div>
  </div>
);

export default SiteHeader;
