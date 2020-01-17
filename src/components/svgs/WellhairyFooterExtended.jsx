import React from 'react'
import { useSpring, animated } from 'react-spring'

import styles from './WellhairyFooterExtended.module.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const transition = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

const WellhairyFooterExtended = () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return(
    <>
    <div className={styles.container}>
      <svg id="extended_footer" width="100%" viewBox="0 0 608 849" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <path className={styles.cls1} d="M-8.95,127.59.19,3s0,118.86,41.48,159.1,14,76.46,14,76.46,44.69-54.13,109.35-7.23-21.83,128.5-21.83,128.5,92.66-45.93,121.87,7.11-30.37,125.19-30.37,125.19S145,561.83,286.44,607C358.93,630.11,335.87,862.6,123,838.59-51.1,818.94-44.81,616.34-44.81,616.34l.38-5.17C-112.71,447.14-71.18,198.29-8.95,127.59Z"/>
        <path className={styles.cls1} d="M615.43,240.34l-7.66-104.45s0,99.66-34.78,133.41-11.74,64.11-11.74,64.11-37.47-45.39-91.69-6.07,18.3,107.75,18.3,107.75-77.69-38.51-102.18,6,25.47,105,25.47,105,75.17,58.42-43.4,96.27c-60.78,19.4-41.44,214.34,137,194.21C650.78,820,645.5,650.15,645.5,650.15l-.31-4.33C702.44,508.28,667.62,299.62,615.43,240.34Z"/>
        <path className={styles.cls2} d="M551.82,787l105.5-1.7S557.08,779,525.18,739.08s-63.79-16.8-63.79-16.8,47.85-37.78,11.48-99.1-109.44,13-109.44,13,43.29-81.86,0-111.25-107.08,21-107.08,21-63.16,77.87-94.28-53.18C146.13,425.61-51.07,434.25-41.29,629.15c8,159.48,179.17,164.5,179.17,164.5l4.38-.07C277.23,864.41,489.14,839.84,551.82,787Z"/>
        <path className={styles.cls3} d="M349.74,839.6l73.09-1.18s-69.44-4.36-91.54-32S287.1,794.8,287.1,794.8s33.14-26.18,7.95-68.66-75.82,9-75.82,9,30-56.71,0-77.07-74.18,14.54-74.18,14.54-43.76,54-65.32-36.84c-11-46.54-141.45-40.72-140.88,94.48.57,136.89,125.87,97.94,125.87,97.94l3-.05C125.08,884.83,270.75,887.83,349.74,839.6Z"/>
        <g>
          <path className={styles.cls4} d="M508,344.36c-17.06,2-14.4,30.32-17.5,60s-20.14,83.39-43.9,79.67-9.91-48.06-7.6-124.37c1.52-50.4-1.35-112.49-39.36-107.1-18.44,2.61-5,74-5.29,104.3-.63,59.85-11.66,111.49-32.81,116.77s-17.27-31.77-11-74.17-5.14-165.67-8.87-201.64-45.84-27.26-40.06,7.05-4.49,257.92-34.51,258.53c-14.61.29-21.07-34.92-23.93-74.61L242.55,257c.75-8.14,1.19-15.49-.1-21.41a20.63,20.63,0,0,0-1.78-5.18c-2.34-4.6-6.57-7.8-13.82-9.08-22.59-4-39.71,55.41-36.62,198.08.38,17.5-6,34.77-6.41,53.93h-.16l.14,1.65c0,2,0,4.1.19,6.19l.32,0,1.58,18.91c1.1,11.69-1.65,20.11-5.07,25.88A47.79,47.79,0,0,0,171,536.41h0A47.55,47.55,0,0,0,163.08,556c-12.3-9-28.57-29.18-38.19-75.7-8.71-42.11-5-64.29-32.92-70.75C76.48,406,79.21,460.31,78.88,490.5c-.63,59.85,76.24,148.4,81.66,166s42.51,79.2,73,110.47,85.42,42.63,130.34,24.86c33.95-13.43,62.45-89.4,74.36-125.74L499.8,512c23.25-61.23,23.7-83.45,27.4-118.84C531.26,354.28,525,342.4,508,344.36Z"/>
          <g>
            <path className={styles.cls5} d="M412.76,571.37a13.92,13.92,0,0,0-2.61.25,23,23,0,0,0-18.81-29.06A23,23,0,0,0,379,534.72c-3.07-3.11-2.32-12.35-2.32-12.35a13.82,13.82,0,0,0-7,2.36A30.09,30.09,0,0,0,323.78,508a23,23,0,0,0-32.35,1.79,23,23,0,0,0-31.62,16.95,21.09,21.09,0,0,0-29.4,18.61,5.37,5.37,0,0,0-.7,0,6.52,6.52,0,0,0-6.51,6.51,6.34,6.34,0,0,0,.23,1.7,30.1,30.1,0,0,0-2.6,57.86,35.65,35.65,0,0,0-.39,5.3h0c-1.61,1.82-2.57,3.81-1.29,5.42,3.18,4-5.51,12.75-5.51,12.75,3.48,2.95,9.45,3.23,13.78,3a35.45,35.45,0,0,0,28.48,14.33,35.9,35.9,0,0,0,4.79-.32c0,.21,0,.42,0,.63a13.37,13.37,0,0,0,24.69,7.12,21,21,0,0,0,4.23.42c.72,0,1.44,0,2.14-.1a35.48,35.48,0,0,0,58.6-7.3,28.59,28.59,0,0,0,38-20.94A21.09,21.09,0,0,0,403,611.58a20.53,20.53,0,0,0-.24-3.16,13.38,13.38,0,0,0,9.58-10.32h.43a13.37,13.37,0,0,0,0-26.74Z"/>
            <g>
              <g>
                <path className={styles.cls6} d="M251.76,587.46a16.73,16.73,0,0,1-3.72,3.09c-.28.44,6.83,5.16,4.72,8.43-1.57,2.42-7.32,2.56-7.32,2.56s4.44,2,3.37,4.27-4.71,3.41-6.19,3.41c-4,0-7.09-1.89-10.1-3.64a28,28,0,0,1-.41-4.28c3.66,1.89,7.35,4.21,12.19,4.28.85,0,1.56-.29,1.6-.54.46-2.51-3.9-3.6-6-4.43a80,80,0,0,1-7.7-3.4,34.73,34.73,0,0,1,.67-4.78c4.13,2.32,8.24,4.82,13.51,5.69,1.58.26,2.93-.06,3-.45.77-2.56-3.17-5.57-5.15-5.95-1.59-.3-4.76.17-6.71-.3-2.81-.69-7.06-2.51-5.67-7.23.72-2.43,2.89-3.16,5.41-2,3.79,1.73,6.49,7.19,9.51,7.22.66,0,2.67-1.42,3.71-2.87l.25-.35c-4.73-2.38-14-9.94-5.86-18.59,2.71-2.89,5.81-1.86,6.8-.79,3.23,3.48,1.7,12.94,2.49,16,.24.9,4.36,1.52,6.06.17,3.43-2.74-1-10.55,0-12.27.08-.13,2-.89,2.16-.61,1.34,2.58,5.63,12.45.71,16.54-3.47,2.89-8.7,1-10.94.22Zm-18-1.71c-.38,2.32,2.77,2.93,4.5,3.59a23.46,23.46,0,0,0,4,.71,35.75,35.75,0,0,0-7.25-4.59C234.31,585.2,233.78,585.34,233.71,585.75Zm18.64-4c.25-.16-.64-9-3.54-11.38-.6-.5-1.32-.51-1.57-.17C243.38,575.44,252.35,581.75,252.35,581.75Z"/>
                <path className={styles.cls6} d="M275.56,561.54c.1-.1,1.91-.31,2,0l0,.06c0,3.37,2,14.47-3.95,17.77-4.24,2.34-9-3.41-10.23-4.78a61.93,61.93,0,0,1-9.21-13.77c-2.6-5-5-10.27-5.08-16.53,0-2.67-.82-6.84,4.55-10.69,5.7-4.09,9.48-.2,10.06.9a24.77,24.77,0,0,1,2.7,10.13c.44,6.54-2.82,15.63-2.19,21.1.23,1.95,2.16,4,3.54,5.79.74,1,3.58,4,5.19,3.06C276.31,572.71,273.94,563,275.56,561.54Zm-18-25.41c-3.54,2.92-.82,7.21-.29,9.92,1.11,5.71,5.36,16.23,5.36,16.23s1.57-18.69-3.28-25.61A1.51,1.51,0,0,0,257.55,536.13Z"/>
                <path className={styles.cls6} d="M292.91,555.83c.12-.06,2.1.13,2.16.45v.07c-.86,3.27-1.17,15.29-8.22,17.55-5.31,1.7-8.36-5.72-9.23-7.44a79.12,79.12,0,0,1-5.71-16.85c-1.42-5.72-2.74-11.68-1.07-18.24.64-2.52,1.49-7.47,8.19-9.65,7.22-2.36,9.89,1.86,10.28,3.61.77,3.49.17,7.24-.77,11-1.7,6.79-6.92,15.31-7.67,21-.28,2.13,1.27,4.67,2.11,6.92.51,1.4,2.74,4.93,4.46,4.43C290.85,567.7,291.06,556.92,292.91,555.83Zm-10.74-30.48c-4.8,2-3.29,8-3.45,10.87-.33,5.88,1.33,17.15,1.33,17.15,2.37-8.75,5.67-18.77,3.8-27A1.56,1.56,0,0,0,282.17,525.35Z"/>
                <path className={styles.cls6} d="M305.68,570.05a13.47,13.47,0,0,1-.14-1.78c-.05-3.55,1.25-7.48,2.1-10.75,3.23-12.39,4.53-27.26,15.3-35.89,1.8-1.43,5.52-3.61,12.35-2.28,7.18,1.39,8.46,4.5,7.58,6.27-3,6-17.8,10.86-22.39,15.56a11.91,11.91,0,0,0-1.65,3.53c.06,0,7-4.86,13.07-3.41,5,1.2,4.86,4.4,4.18,6-2.6,6.05-9.7,11.07-11.32,17.43-.48,1.87.43,2.47.9,2.5,4.55.36,9.88-8.6,11.51-8.6.15,0,2,1.35,1.81,1.64-2,2.57-10.49,12.44-17.24,11.16-3.72-.7-4-4.71-3.79-6.53.68-6.24,7.6-12,9.29-18.27A1.32,1.32,0,0,0,326,545c-4.46-.44-6.87,3.59-8,5.25-4.21,6.24-5.48,13.07-6.72,19.73C309,570,307.91,570,305.68,570.05Zm29-46.38c-1.87-.16-3.1,1.22-4,2.06-3.28,3.15-7.2,10.15-7.2,10.15s10.59-6.94,12.06-11.06C335.73,524.25,335.05,523.7,334.65,523.67Z"/>
                <path className={styles.cls6} d="M362.89,555.88c2.08,1.5,3,2.25,5,3.93a75.18,75.18,0,0,0-18.23,13.69,9.15,9.15,0,0,0-1.08,1.3c-.55.79-.51,1.38-.35,1.43,3.32,1,11.24-4.78,12.75-4.26.13,0,1.26,1.79,1,2-2.23,1.39-13.4,7.59-17.76,5.26-2.61-1.4-.35-5.57.43-6.94l.37-.61s-6.44,5.19-10.64,3.46-2.22-7.5-1.45-9.36c3.82-9.27,14.19-19.08,24.51-14.31a4.57,4.57,0,0,1,2.26,6.65C361,557.19,361.59,556.75,362.89,555.88Zm-23.78,11.39c-.9,1.84-.79,3.5-.11,3.66,2.42.58,5.12-1.61,6.77-2.71a36.69,36.69,0,0,0,9.08-8c1.46-1.93,1.35-4.24.15-4.73-3-1.18-6.75,1.69-8.42,3A25.33,25.33,0,0,0,339.11,567.27Z"/>
                <path className={styles.cls6} d="M378.62,570.83c-7.6,2.36-15.07,5.37-20.07,10.26-1.27,1.24-.86,2.09-.58,2.26,2.93,1.75,11.48-2.26,12.38-1.75.08,0,.74,1.67.44,1.86l-.05,0c-3.21.62-13.25,5.07-17.2,1.92-3-2.4,0-6.59,1.39-8.25,4.35-5.31,11.53-8.93,19-11.82A58,58,0,0,1,378.62,570.83Z"/>
                <path className={styles.cls6} d="M366.68,593c2,1.75,10.47.57,11,1.08.06,0,.23,1.55-.08,1.65h-.05c-3.11-.19-12.5,1.46-15.5-1.83-1.65-1.82.41-4.09,1.58-4.83,3-1.87,7.66-1.85,10.83-3.4a7.16,7.16,0,0,0,3.12-3.12,69.27,69.27,0,0,0-6.87.91s-.84-1.59-.44-1.86l.05,0c3.07-.72,7.23-.87,9.06-2.15,1.18-.82,2.18-2.65,3.68-3.55,2-1.17,4.74-1.51,7.55-1.69a55.4,55.4,0,0,1,1.46,6.17c-3.08.83-8.21.52-9.75,1.82s-1.75,6.36-4.55,7.47c-3.09,1.22-7.64.67-10.54,2.13C366.52,592.18,366.48,592.84,366.68,593Z"/>
                <path className={styles.cls6} d="M355,605.48c.36.35,1.43.08,3-.38s3.27-.92,5-1.28a10.72,10.72,0,0,0-7.14.61C354.89,604.87,354.74,605.27,355,605.48Z"/>
              </g>
              <path className={styles.cls6} d="M376.93,608.83s-29.9,32.55-66.78,32.55-66.32-32.21-66.32-32.21,29.43-42.67,66.32-42.67S376.93,608.83,376.93,608.83Z"/>
              <path className={styles.cls7} d="M369.22,610.06s-26.45,23.23-59.07,23.23-59.07-23.23-59.07-23.23,26.44-30.2,59.07-30.2S369.22,610.06,369.22,610.06Z"/>

              <clipPath id="mask-path">  
                <path className={styles.white} d="M369.22,610.06s-26.45,23.23-59.07,23.23-59.07-23.23-59.07-23.23,26.44-30.2,59.07-30.2S369.22,610.06,369.22,610.06Z" />  
              </clipPath> 
              
              <g clip-path="url(#mask-path)">
                <animated.path style={{ transform: props.xy.interpolate(transition) }} className={styles.cls6} d="M310.54,582.87s11.27,12.38,11.27,27.65-11.27,27.66-11.27,27.66-12.06-12.38-12.06-27.66S310.54,582.87,310.54,582.87Z"/>
              </g>
              <g>
                <g>
                  <polygon className={styles.cls6} points="298.01 650.45 292.81 649.96 296.45 637.95 301.64 638.44 298.01 650.45"/>
                  <polygon className={styles.cls6} points="274.85 641.44 270.45 640.13 279.1 631.03 283.51 632.34 274.85 641.44"/>
                  <polygon className={styles.cls6} points="258.56 632.97 255.49 631.5 264.46 625.66 267.53 627.13 258.56 632.97"/>
                </g>
                <g>
                  <polygon className={styles.cls6} points="320.72 649.97 325.91 649.48 322.28 637.46 317.09 637.95 320.72 649.97"/>
                  <polygon className={styles.cls6} points="343.88 641.7 348.28 640.39 339.63 631.3 335.22 632.61 343.88 641.7"/>
                  <polygon className={styles.cls6} points="360.17 633.24 363.24 631.76 354.27 625.92 351.2 627.4 360.17 633.24"/>
                </g>
              </g>
              <path className={styles.cls6} d="M397.45,600.81a37.77,37.77,0,0,0-9,3.75c-2.92,1.64-5.75,3.55-8.57,5.52-5.62,4-11.19,8.22-17.08,12.17a159.45,159.45,0,0,1-18.38,11,91.07,91.07,0,0,1-10,4.28,87.55,87.55,0,0,1-10.57,3,74.88,74.88,0,0,1-11,1.49,59.44,59.44,0,0,1-11.23-.5,73.05,73.05,0,0,1-10.79-2.42c-1.76-.52-3.48-1.09-5.19-1.73s-3.37-1.34-5-2.09a128.14,128.14,0,0,1-18.57-10.87c-2.92-2.06-5.81-4-8.62-6.21q-2.15-1.56-4.24-3.18c-1.42-1.08-2.81-2.12-4.24-3.29l-2-1.68,1.88-1.95h0l4.36-5.44c1.46-1.81,2.87-3.65,4.52-5.36q4.8-5.2,10.12-10a113.72,113.72,0,0,1,11.37-8.86,74,74,0,0,1,12.9-7.14,56.23,56.23,0,0,1,7.11-2.6,58.77,58.77,0,0,1,7.55-1.58,45.52,45.52,0,0,1,7.82-.42c1.27.07,2.54.1,3.8.26s2.53.26,3.78.48l1.87.31,1.86.4c1.24.24,2.45.58,3.67.92s2.39.78,3.58,1.17,2.34.89,3.49,1.37a77.47,77.47,0,0,1,13,7.06,107,107,0,0,1,11.39,8.87c3.56,3.18,6.89,6.53,10.1,9.91l4.72,5c.78.8,1.55,1.62,2.31,2.34.39.37.76.69,1.12,1l.51.41.61.42a37,37,0,0,0,11.82,4.75,35.92,35.92,0,0,0,6.42.88,21.73,21.73,0,0,0,6.27-.56,11.66,11.66,0,0,0,2.78-1.09,15,15,0,0,0,2.52-1.82,14.81,14.81,0,0,0,3.75-5,19,19,0,0,0-7.62-23.31,18.65,18.65,0,0,1,9.3,10.06,19.94,19.94,0,0,1,.61,14.16,17.91,17.91,0,0,1-1.6,3.37,18.67,18.67,0,0,1-2.29,3,19,19,0,0,1-2.86,2.47,15.77,15.77,0,0,1-3.48,1.75,25.51,25.51,0,0,1-7.35,1.34,40.52,40.52,0,0,1-7.31-.33,42.26,42.26,0,0,1-14.1-4.31l-.86-.48-.9-.59c-.54-.39-1.09-.78-1.56-1.16-1-.78-1.88-1.55-2.78-2.31l-5.24-4.53c-3.46-3-6.94-5.8-10.54-8.4a98.94,98.94,0,0,0-11.14-7,67.05,67.05,0,0,0-11.77-4.93c-1-.31-2-.56-3-.82s-2-.47-3-.63-2-.4-3-.5l-1.52-.21c-.5-.06-1-.08-1.51-.13s-1-.13-1.51-.17l-1.51-.11c-1-.1-2-.08-3-.1a41.4,41.4,0,0,0-5.79.19,60.16,60.16,0,0,0-11.9,2.38c-8,2.52-15.74,6.94-23,12-3.63,2.57-7.15,5.34-10.56,8.27-1.66,1.49-3.49,2.93-5.25,4.39l-5.35,4.37h0l-.17-3.63A101.64,101.64,0,0,0,265,619.67c1.49.82,3,1.63,4.52,2.37s3.09,1.43,4.65,2.1c3.12,1.35,6.31,2.48,9.47,3.6a94.86,94.86,0,0,0,19.18,4.91,61.61,61.61,0,0,0,19.33-.62,99.94,99.94,0,0,0,19-5.9,135.45,135.45,0,0,0,18.18-9.21c5.83-3.6,11.5-7.61,17.41-11.46,3-1.92,6-3.79,9.2-5.47a42.81,42.81,0,0,1,10.33-4Z"/>
            </g>
          </g>
          <path className={styles.cls6} d="M394.53,592.19c-3.9,1-7.68,1.95-11.33,3A44.39,44.39,0,0,0,378,597.1a11.14,11.14,0,0,0-2.13,1.2,2.85,2.85,0,0,0-.58.55c-.09.15-.06.07-.08.07s0,.08.07.17.11.13.14.22a1.79,1.79,0,0,0,.54.39,6.22,6.22,0,0,0,2.14.47,23.77,23.77,0,0,0,5.36-.45,63.16,63.16,0,0,0,10.91-3.13l1.36,4.82c-3.87.71-7.71,1.54-11.68,2.09a31.43,31.43,0,0,1-6.2.34,10.22,10.22,0,0,1-3.48-.79,5.43,5.43,0,0,1-1.77-1.31,4.62,4.62,0,0,1-.66-1,4.5,4.5,0,0,1-.42-1.18,3.84,3.84,0,0,1,.52-2.7,6,6,0,0,1,1.38-1.57,17,17,0,0,1,2.81-1.81c1.84-1,3.69-1.72,5.5-2.49,3.63-1.51,7.24-2.92,10.54-4.69Z"/>
          <circle className={styles.cls6} cx="383.03" cy="563.47" r="5.03"/>
        </g>
        <path className={styles.cls8} d="M242.49,852.12l-74.89-1.21s71.16-4.47,93.8-32.78,45.28-11.92,45.28-11.92-34-26.82-8.15-70.35,77.69,9.26,77.69,9.26-30.73-58.11,0-79,76,14.9,76,14.9,44.84,55.27,66.93-37.75c11.32-47.68,151.29-41.55,144.35,96.8-5.68,113.2-127.18,116.77-127.18,116.77l-3.11,0C437.41,907.1,287,889.65,242.49,852.12Z"/>
      </svg>

      {/* <p>Research &#xb7; Design &#xb7; Develop</p> */}
    </div>
    </>
  );
}

export default WellhairyFooterExtended;
