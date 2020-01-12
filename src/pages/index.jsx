import React, {Component} from 'react';
import Layout from '../components/layouts/DefaultLayout';
import MasterHead from '../components/master-head/MasterHead';
import MyWork from '../components/my-work/MyWork';
import WellhairyFooterExtended from '../components/svgs/WellhairyFooterExtended';
// import CallOut from '../components/call-out/CallOut';
// import WellhairyFooterStrip from '../components/svgs/WellhairyFooterStrip';
import Footer from '../components/footer/Footer';

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
        <Layout>
          <MasterHead />
          
          <MyWork />

          {/* <p>A small group of people capable of online experiances</p> */}

          <WellhairyFooterExtended />

          {/* <WellhairyFooterStrip /> */}

          {/* <CallOut /> */}

          <Footer />

          {/* The evelotion of the self
          wellhairy is based on the conceptial idea that you never truly know what the conceptial idea will looklike until you've mmade it. or is it just that I've got a beard...
          Looking at the many ideas a designer has over the course of their carrer the journey to how they want to be ersived changes.
          I dont think it's a stive for perfection but more of just the aimless strides we take through a career.
          This isn't looking peering throught the forest of whats ahead but looking back at the path taken. */}
        </Layout>
      </>
    );
  }
}

export default IndexPage;
