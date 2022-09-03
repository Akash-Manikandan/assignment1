import React from "react";
import styles from "./LogoImages.module.scss";
import Image from "next/image";

const LogoImages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoImages}>
        <Image
          className={styles.image}
          src="/images/fog.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/haze.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/light-snow.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/rain-cloud.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/storm.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/rainbow.gif"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/images/rainy-snowy.gif"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default LogoImages;
