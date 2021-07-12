/* eslint-disable require-jsdoc */
import React, { useEffect, useRef } from "react";
import styles from "../../styles/common/Menu.module.scss";
import {gsap} from 'gsap';

/**
 * Menu: The Main Menu component
 * @return {JSX.Element} The JSX Code for the Menu Component
 */

type Props={
  toggle:boolean,
  toggleFunc:any
}

export default function Menu({toggle,toggleFunc}:Props) {

  const drawer=useRef(null);
  useEffect(()=>{

    toggle ? gsap.to(drawer.current,{x:50+'vw'}):gsap.to(drawer.current,{x:-50+'vw'});
  },[toggle])
  return (
      <div className={styles.menuDrawer} ref={drawer}>
          <h1 onClick={()=>{toggleFunc(false)}}> X </h1>
         <h1> About Us</h1>
         <h1> Contact Us</h1>
         <h1> Products</h1>
         <h1> Something</h1>

      </div>
      
  );
}

