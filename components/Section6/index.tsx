import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import styles from "./Section6.module.scss";
const Section6 = ({id}:{id:number}) => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          className={styles.image}
          src={`/images/tiger${id}.jpg`}
          alt="tiger"
          width={2400}
          height={2400}
          priority
        />
      </motion.div>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            OUR MISSION
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={styles.star}
          >
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </motion.div>
        </div>
        <motion.aside
          className={styles.content}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          “Every acre we protect and every river mile we restore begins with
          you. Your support helps us take on the dual threats of climate change
          and biodiversity loss across 70+ countries and territories.”
        </motion.aside>
        <div className={styles.bottomContainer}>
          <motion.div
            className={styles.bottomImageContainer}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <Image src="/images/man.png" alt="man" width={50} height={50} />
            </div>
            <div className={styles.nameUniv}>
              <div>AIMEE FARNUM</div>
              <div>Science Teacher, Greenwich, CT</div>
            </div>
            <div className={styles.line}></div>
            <div>
              <Image
                src="/images/chennai.png"
                alt="chennai"
                width={100}
                height={100}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
