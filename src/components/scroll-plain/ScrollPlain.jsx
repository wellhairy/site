import React, { Component } from "react";

import "./scroll-plain.scss"

console.log('plain!')
// console.log({props});

// window.addEventListener('scroll', () => {
//   console.log(window.scrollY);
// });

console.log('relax');

const ScrollPlain = ({ children }) => (
  <div
    className="plain rellax"
    data-rellax-speed="7"
  >

    {children}
  </div>
)


export default ScrollPlain
