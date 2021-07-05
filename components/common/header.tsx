/* eslint-disable require-jsdoc */
import styles from "../../styles/common/Header.module.scss";
import React from "react";
import Hamburger from "./hamburger";
import LogoText from '../svgs/logoText'
import InstagramIcon from '../svgs/instagramSVG'
import FacebookIcon from '../svgs/facebookSVG'
/**
 * Header: The Main Header component
 * @return {JSX.Element} The JSX Code for the Header Component
 */


export default function Header() {
  return (
    <>
    <div className={styles.newOne}>
        <LogoText />
        <InstagramIcon />
        <FacebookIcon />
    </div>
    <div className={styles.header}>
      <div className={styles.burger}>

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

