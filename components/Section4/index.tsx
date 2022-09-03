import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./Section4.module.scss";

const Section4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>Optio Cumque</div>
      <div className={styles.innerContainer1}>
        <div className={styles.content1}>aut rerum</div>
        <div className={styles.content2}>
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
        </div>
      </div>
      <div className={styles.innerContainer2}>
        et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
        deleniti atque of real estate.
      </div>
    </div>
  );
};

export default Section4;
