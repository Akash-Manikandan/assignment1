import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./Section3.module.scss";
const Section3 = () => {
  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          className={styles.image}
          loading="lazy"
          src="/images/catpic.jpg"
          width={3648}
          height={5472}
          alt="cat"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once:true}}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          src="/images/peacock.jpg"
          width={1348}
          height={3700}
          alt="peacock"
          className={styles.image}
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        viewport={{once:true}}
      >
        <Image
          src="/images/bunny.jpg"
          width={3456}
          height={5184}
          alt="bunny"
          className={styles.image}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Section3;
