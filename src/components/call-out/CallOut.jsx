import React from 'react'
import CallOutStyles from './callOut.module.scss'

const CallOut = (props) => (
  <>
  <div className={CallOutStyles.callOut}>
    <p className={CallOutStyles.callOut__sansSerif}>HONEST BRANDS</p>
    <p className={CallOutStyles.callOut__serif}>ARE SEXY BRANDS</p>
  </div>
  </>
);

export default CallOut;
