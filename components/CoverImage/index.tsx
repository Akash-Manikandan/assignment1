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
          src="/images/javascript.gif"
          width={50}
          height={50}
          alt="javascript"
        />
        <Image
          className={styles.image}
          src="/images/ruby.png"
          width={50}
          height={50}
          alt="ruby"
        />
        <Image
          className={styles.image}
          src="/images/c++.png"
          width={50}
          height={50}
          alt="c++"
        />
        <Image
          className={styles.image}
          src="/images/github.gif"
          width={50}
          height={50}
          alt="github"
        />
        <Image
          className={styles.image}
          src="/images/svelte.png"
          width={50}
          height={50}
          alt="svelte"
        />
        <Image
          className={styles.image}
          src="/images/python.gif"
          width={50}
          height={50}
          alt="python"
        />
        <Image
          className={styles.image}
          src="/images/mongo.png"
          width={50}
          height={50}
          alt="mongo"
        />
        <Image
          className={styles.image}
          src="/images/postgres.png"
          width={50}
          height={50}
          alt="postgres"
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
