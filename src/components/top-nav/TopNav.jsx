import React from 'react'
import Link from 'gatsby-link'

import "./top-nav.scss"

const SiteNavigation = (array, componentName = "site-navigation") => (
  <div className={componentName}>
    <ul className={componentName + "__list"}>
      {array.map((item) =>
        <ListLink
          key={item.nameSpace}
          className={componentName + "__item"}
          to={item.linkTo} >

          {item.nameSpace}
        </ListLink>
      )}
    </ul>
  </div>
);

const ListLink = (props) => (
  <li className={props.className}>
    <Link
      to={props.to}
      className={props.className}
    >
      {props.children}
    </Link>
  </li>
);

export default SiteNavigation;
