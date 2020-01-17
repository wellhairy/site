import React from 'react';
import {Helmet} from "react-helmet";

import "../../global/scss/style.scss";

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Wellhairy design - Allan King</title>
      {/* <link rel="icon" href="favicon.png" /> */}
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One" rel="stylesheet"></link>
    </Helmet>

    <div className="container">
      <div className="site-container">
        <main id="skip-to-content" className="page-content">

          {children}
        </main>
      </div>
    </div>
  </>
);
