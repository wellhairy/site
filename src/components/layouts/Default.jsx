import React from 'react';
import TopNav from '../top-nav/TopNav';
import SiteFooter from '../site-footer/SiteFooter';

// import "/src/global/scss/style.scss";


const DefaultWrapper = ({children}) => (
  <>
  <div className="container">
    <div className="site-container">
      <main id="skip-to-content" className="page-content">
        <TopNav />

        {children()}
      </main>
    </div>

    <SiteFooter />
  </div>
  </>
);

export default DefaultWrapper;
