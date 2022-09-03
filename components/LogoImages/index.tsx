import React from "react";
import styles from "./LogoImages.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoImages = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.logoImages}
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >
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
      </motion.div>
    </div>
  );
};

export default LogoImages;
