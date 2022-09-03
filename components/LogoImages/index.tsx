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
          alt="fog"
        />
        <Image
          className={styles.image}
          src="/images/haze.gif"
          width={50}
          height={50}
          alt="haze"
        />
        <Image
          className={styles.image}
          src="/images/light-snow.gif"
          width={50}
          height={50}
          alt="light-snow"
        />
        <Image
          className={styles.image}
          src="/images/rain-cloud.gif"
          width={50}
          height={50}
          alt="rain-cloud"
        />
        <Image
          className={styles.image}
          src="/images/storm.gif"
          width={50}
          height={50}
          alt="storm"
        />
        <Image
          className={styles.image}
          src="/images/rainbow.gif"
          width={50}
          height={50}
          alt="rainbow"
        />
        <Image
          className={styles.image}
          src="/images/rainy-snowy.gif"
          width={50}
          height={50}
          alt="rainy-snowy"
        />
      </div>
    </div>
  );
};

export default LogoImages;
