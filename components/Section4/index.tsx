import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./Section4.module.scss";

const Section4 = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.products}
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        A Future Where People and Nature Thrive
      </motion.div>
      <div className={styles.innerContainer1}>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.content1}
        >
          Our Priorities
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className={styles.content2}
        >
          <div className={styles.image1}>
            <Image
              className={styles.img}
              src="/images/parakeet.png"
              width={38}
              height={38}
              alt="parakeet"
            />
          </div>
          <motion.div
            animate={{
              rotate: Array(360)
                .fill(0)
                .map((x, i) => i),
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className={styles.image2}
          >
            <Image
              src="/images/circle.png"
              width={75}
              height={75}
              alt="circle"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={styles.innerContainer2}
      >
        By maximizing our ability to effect change between now and 2030, we can
        shape a brighter future for people and our planet.
      </motion.div>
    </section>
  );
};

export default Section4;
