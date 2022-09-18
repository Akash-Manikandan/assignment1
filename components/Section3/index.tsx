import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styles from "./Section3.module.scss";
const Section3 = () => {
  const [progress, setProgress] = useState(0);

  return (
    <ParallaxProvider>
      <section className={styles.container}>
        <Parallax
          speed={50}
          onProgressChange={(progress) => setProgress(progress)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: progress >= 0.45 && progress <= 0.55 ? 1 : 0.5,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
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
        </Parallax>
        <Parallax speed={0}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
        </Parallax>
        <Parallax
          speed={-50}
          onProgressChange={(progress) => setProgress(progress)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: progress >= 0.45 && progress <= 0.55 ? 1 : 0.5,
            }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
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
        </Parallax>
      </section>
    </ParallaxProvider>
  );
};

export default Section3;
