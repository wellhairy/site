import React from 'react';
import LogoImage from "../svgs/LogoImage";

import "./master-head.scss";
import "./logo-area.scss";

const MasterHead = () => (
  <div className="master-head">
    <div className="master-head__area-one">
      <div className="master-head__logo">
        <LogoImage />
      </div>
    </div>

    <div className="master-head__area-two">
      <div className="master-head__heading">
        <div class="master-head__name">Allan King</div>
        <div class="master-head__title">wellhairy design</div>
      </div>
    </div>

    <div className="master-head__area-three">
      <div className="master-head__img">
        <img className="master-head__img-inner" src="profile.svg" alt=""/>
      </div>  
    </div>

    <div className="master-head__area-four">   
      <div className="master-head__link-list">
        <p>You can find me the list of links below or if you want to talk feel free to <a href="mailto:me@wellhairy.com">send me an email</a></p>

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
    
    
    {/* <div className="master-head__strap">
      <p>Research, design & front-end development. I try to stick to a basic tenet</p>
      <p className="master-head__strap-heading"><span>Research</span> makes good ideas truly <span>great ideas</span></p>
      
      {/* <span>Take a bath</span>
      <br/>
      Design as you've never known it before */}
      {/* research great design */}
      {/* <p className="master-head__strap-heading">Where good <span>reserch</span> leads to <span>great ideas</span></p> */}
      {/* <p className="master-head__strap-heading"><span>Research</span> can make those good ideas truly <span>great ideas</span></p> */}
      {/* <p className="master-head__strap-sub-heading">Corny I know, but we're just going to own it</p> */}
      {/* <p className="master-head__strap-sub-heading">Together we can find out what makes your idea truely great</p> */}
      {/* <p>Real people make real brands. It starts with an idea, we start with an emaotion and use research & comunication to engage with your audiances.</p> */}
    {/* </div> */}
  </div>
);

export default MasterHead;
