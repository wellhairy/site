import React from 'react';
import LogoImage from '../svgs/LogoImage';

import "./master-head.scss";

const MasterHead = () => (
  <div className="master-head">
    <div className="master-head__area-one">
      <div className="master-head__logo">
        <LogoImage />
      </div>
    </div>

    <div className="master-head__area-two">
      <div className="master-head__heading">
        <div className="master-head__name">Allan King</div>
        <div className="master-head__title">wellhairy design</div>
      <p>Researcher, designer, Illustrator & front-end developer.</p>
      </div>
    </div>

    <div className="master-head__area-three">
      <div className="master-head__img">
        <img className="master-head__img-inner" src="profile.svg" alt=""/>
      </div>  
    </div>
 
    <div className="master-head__area-four">
      <p className="master-head__strap-heading"><span>Research</span> makes good ideas truly <span>great ideas</span></p>
    </div>

    <div className="master-head__area-five">   
      <div className="master-head__link-list">
        <p>You can find me on any of the list of links below or if you want to talk feel free to <a href="mailto:me@wellhairy.com">send me an email</a></p>

        <ul className="master-head__list">
          <li className="master-head__link">
            <a href="https://www.instagram.com/wellhairy/">instagram</a>
          </li>
          <li className="master-head__link">
            <a href="https://www.behance.net/wellhairy">behance</a>
          </li>
          <li className="master-head__link">
            <a href="https://www.linkedin.com/in/wellhairy/">linkedin</a>
          </li>
          <li className="master-head__link">
            <a href="https://github.com/wellhairy">github</a>
          </li>
        </ul>
      </div>
    </div>
    
    <svg className="master-head__bg-graphic" viewBox="0 0 442.15 235.04" aria-hidden>
      <path d="M366.26-1.21,441.15,0S370,4.47,347.35,32.78,302.07,44.7,302.07,44.7s34,26.82,8.15,70.35-77.69-9.26-77.69-9.26,30.73,58.11,0,79-76-14.9-76-14.9-44.84-55.27-66.93,37.75c-11.32,47.68-151.29,41.55-144.35-96.8C-49.07-2.39,72.43-6,72.43-6l3.11,0C171.34-56.19,321.76-38.74,366.26-1.21Z" fill="#feebd2"/>
    </svg>
  </div>
);

export default MasterHead;
