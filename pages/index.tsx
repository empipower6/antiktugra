/* eslint-disable require-jsdoc */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

type Props = {
  productsData: any;
};

export default function Index({ productsData }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {productsData.products.map((product, index) => (
          <div key={index}>
            <Image
              src={product.image.src}
              alt={product.title + "picture"}
              height={300}
              width={300}
            />
            <h1> {product.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const productsApiHit = await fetch(
    `https://${process.env.NEXT_PUBLIC_SHOPIFY_USERNAME}:${process.env.NEXT_PUBLIC_SHOPIFY_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_STORE_NAME}.myshopify.com/admin/api/2021-04/products.json`
  );
  const productsData = await productsApiHit.json();

  return {
    props: {
      productsData,
    },
    revalidate: 300, // Time in seconds before regenerating
  };
};
