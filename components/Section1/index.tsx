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
          viewport={{once:true}}
        >
          <Image src="/images/cat.png" alt="cat" width={60} height={60} />
        </motion.div>
        <motion.div
          className={styles.highlighedText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </motion.div>
      </div>
      <div></div>
      <div className={styles.downLeft}>
        <div>
          <motion.div
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{once:true}}
          >
            Except sint occaecat
          </motion.div>
          <motion.div
            initial={{ x: -320 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{once:true}}
            className={styles.colorText}
          >
            cupidatat
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.rightContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once:true}}
        transition={{ duration: 1, delay: 1 }}
      >
        Sed ut perspiciatis unde omnis iste natus error accusantium doloremque
        laudantium, totam rem aperiam illo inventore veritatis et.
      </motion.div>
      <CoverImage />
    </section>
  );
};

export default Section1;
