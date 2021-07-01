/* eslint-disable require-jsdoc */
import React from "react";
import Header from './header';
/**
 * Layout: The Main Layout component
 * @return {JSX.Element} The JSX Code for the Header Component
 */
type Props={
    children:React.ReactNode;
}

export default function Layout({children}:Props) {
  return (
    <>
    <Header />
    {children}
    </>
  );
}

