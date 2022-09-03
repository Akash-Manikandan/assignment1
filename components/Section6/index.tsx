import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./Section6.module.scss";
const Section6 = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          className={styles.image}
          src="/images/tiger.jpg"
          alt="tiger"
          width={2400}
          height={2400}
          loading="lazy"
        />
      </motion.div>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Testimonials
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.star}
          >
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </motion.div>
        </div>
        <motion.div
          className={styles.content}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae”
        </motion.div>
        <div className={styles.bottomContainer}>
          <motion.div
            className={styles.bottomImageContainer}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div>
              <Image src="/images/man.png" alt="man" width={50} height={50} />
            </div>
            <div className={styles.nameUniv}>
              <div>vitae dicta</div>
              <div>sunt explicabo</div>
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
