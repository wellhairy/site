import React from 'react';
import WallGraphics from '../wall-graphics/WallGraphics';
import WorkSVG from '../svgs/Work';
import Kempella from '../kempella/Kempella';
import Pensions from '../pensions/Pensions';
// import JourneyIllustrations from '../journey-illustrations/JourneyIllustrations';

import styles from './styles.module.scss'

export default ({ data }) => {
  console.log(data)
  return (
    <>
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.heading__title}>and here's some "flavour"</h2>
        {/* <p className={styles.heading__faux_title} aria-hidden>Work</p> */}
        <WorkSVG className={styles.heading__faux_title}/>

      </div>

      <div className={styles.container__items}>
        <WallGraphics />        
        
        <Kempella />

        <Pensions />

        {/* <JourneyIllustrations /> */}
      </div>
    </div>
    </>
  );
}
