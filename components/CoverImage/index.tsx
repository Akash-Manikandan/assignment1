import Image from "next/image";
import React from "react";
import styles from "./CoverImage.module.scss";
const CoverImage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/images/pic1.jpg"
        width={4000}
        height={1600}
      />
      <div className={styles.logoList}>
        <Image
          className={styles.image}
          src="/images/javascript.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/ruby.png"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/c++.png"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/github.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/svelte.png"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/python.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/mongo.png"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/postgres.png"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/linux.gif"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default CoverImage;
//04440284028
