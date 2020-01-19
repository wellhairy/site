import React from 'react';
import {Helmet} from "react-helmet";

import "../../global/scss/style.scss";

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Wellhairy design - Allan King</title>
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
