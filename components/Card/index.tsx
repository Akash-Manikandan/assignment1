import { motion } from "framer-motion";
import React from "react";
import styles from "./Card.module.scss";
const Card = ({ title, content }: { title: string; content: string }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileTap={{ scale: 0.5 }}
      className={styles.container}
      viewport={{ once: true }}
    >
      <div className={styles.title}>{title}</div>
      <article>{content}</article>
    </motion.main>
  );
};

export default Card;
