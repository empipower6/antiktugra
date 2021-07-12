/* eslint-disable require-jsdoc */
import styles from "../../styles/common/Header.module.scss";
import React, { useState } from "react";
import Hamburger from "./hamburger";
import LogoText from '../svgs/logoText'
import InstagramIcon from '../svgs/instagramSVG'
import FacebookIcon from '../svgs/facebookSVG'
import Menu from './menu';
/**
 * Header: The Main Header component
 * @return {JSX.Element} The JSX Code for the Header Component
 */
type Props={
  logoText:any
}

export default function Header({logoText}:Props) {

  const [toggleMenu,setToggle] = useState(false);

  console.log(logoText.fields.file.url);
  return (
    <>
    <Menu toggle={toggleMenu} toggleFunc={setToggle} />
    <div className={styles.header}>
      <div className={styles.burger} onClick={()=>{setToggle(!toggleMenu)}}>

        <Hamburger />

      </div>
      <div className={styles.logo}>
        <LogoText />
      </div>
      <div className={styles.socials}>
        <div className={styles.insta}>
          <a href="https://www.instagram.com/antiktugra/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
        <div className={styles.face}>
          <a href="https://www.facebook.com/antiktugra/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

