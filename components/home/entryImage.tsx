/* eslint-disable require-jsdoc */
import styles from "../../styles/home/EntryImage.module.scss";
import LogoWithTextSVG from '../svgs/LogoWithText';
import React from "react";

/**
 * Home Page Image Section
 * @return {JSX.Element} The JSX Code for the Image Section Component
 */
type Props={
  imageURL:string;
}

export default function EntryImage({imageURL}:Props) {
  // const styling = {
  //   backgroundImage:  `url("html:"+${imageURL})`,
  //   width:"100%",
  //   height:"100%",
  //   position: 'absolute',
  //           top:'0',
  //           right: '0',
  //           left: '0'
  // }

  return (
    <>
    <div className={styles.sliderContainer}>
      
      <div className={styles.logo}>

        <LogoWithTextSVG />

      </div>
     
    </div>
     <div className={styles.backgroundImg} >
   </div>
   </>
  );
}

