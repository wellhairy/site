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

        </Layout>
      </>
    );
  }
}

export default IndexPage;
