import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import MasterHead from '../components/master-head/MasterHead';

import "../global/scss/_typography.scss";
import "../global/scss/style.scss";

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render () {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wellhairy design - Allan King</title>
          <link rel="icon" href="favicon.png"></link>
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One" rel="stylesheet"></link>
        </Helmet>

        <MasterHead />

          {/* <div className="text-quote">
            <p className="text-quote__sans-serif">HONEST BRANDS</p>
            <p className="text-quote__serif">ARE SEXY BRANDS</p>
          </div>
          
          {/* <p>A small group of people capable of online experiances</p> */}

          {/* The evelotion of the self
          wellhairy is based on the conceptial idea that you never truly know what the conceptial idea will looklike until you've mmade it. or is it just that I've got a beard...
          Looking at the many ideas a designer has over the course of their carrer the journey to how they want to be ersived changes.
          I dont think it's a stive for perfection but more of just the aimless strides we take through a career.
          This isn't looking peering throught the forest of whats ahead but looking back at the path taken. */}
      </>
    );
  }

}

export default IndexPage
