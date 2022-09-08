import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./CoverImage.module.scss";
const CoverImage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        viewport={{ once: true }}
      >
        <Image
          className={styles.image}
          src="/images/pic1.jpg"
          width={4000}
          height={1600}
          alt="pic1"
          priority
        />
      </motion.div>
      <motion.div
        className={styles.logoList}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          className={styles.image}
          src="/images/alpaca.gif"
          width={50}
          height={50}
          alt="alpaca"
        />
        <Image
          className={styles.image}
          src="/images/bee.gif"
          width={50}
          height={50}
          alt="bee"
        />
        <Image
          className={styles.image}
          src="/images/butterfly.gif"
          width={50}
          height={50}
          alt="butterfly"
        />
        <Image
          className={styles.image}
          src="/images/crab.gif"
          width={50}
          height={50}
          alt="crab"
        />
        <Image
          className={styles.image}
          src="/images/unicorn.gif"
          width={50}
          height={50}
          alt="unicorn"
        />
        <Image
          className={styles.image}
          src="/images/fox.gif"
          width={50}
          height={50}
          alt="fox"
        />
        <Image
          className={styles.image}
          src="/images/hedgehog.gif"
          width={50}
          height={50}
          alt="hedgehog"
        />
        <Image
          className={styles.image}
          src="/images/squirrel.gif"
          width={50}
          height={50}
          alt="squirell"
        />
        <Image
          className={styles.image}
          src="/images/linux.gif"
          width={50}
          height={50}
          alt="linux"
        />
      </motion.div>
    </div>
  );
};

export default CoverImage;
//04440284028
