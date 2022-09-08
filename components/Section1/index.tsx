import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import CoverImage from "../CoverImage";
import styles from "./Section1.module.scss";

const Section1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.highlighedTextAndIcon}>
        <motion.div
          className={styles.highlighedLogo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: [1.3, 1] }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/images/cat.png" alt="cat" width={60} height={60} />
        </motion.div>
        <motion.div
          className={styles.highlighedText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Restoring Nature, Building Community
        </motion.div>
      </div>
      <div></div>
      <div className={styles.downLeft}>
        <div>
          <motion.div
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            We Can&apos;t Save Nature Without 
          </motion.div>
          <motion.div
            initial={{ x: -320 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className={styles.colorText}
          >
            You
          </motion.div>
        </div>
      </div>
      <motion.article
        className={styles.rightContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        With 8% of the Earth&apos;s biodiversity, India is home to spectacular and
        diverse natural places, and unique wildlife. India recognizes the need
        to protect its natural heritage for its intrinsic values, and the
        well-being of its people. 
      </motion.article>
      <CoverImage />
    </section>
  );
};

export default Section1;
