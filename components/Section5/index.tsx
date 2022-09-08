import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Section5.module.scss";
const Section5 = () => {
  const [id, setId] = useState(0);
  const list = [
    {
      color: "#3c43eb",
    },
    {
      color: "#12adde",
    },
    {
      color: "#c11ecf",
    },
    {
      color: "#e50041",
    },
    {
      color: "#004e8a",
    },
  ];
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.select}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <select name="Select service category" id="Select service category">
          <option value="">Select service category</option>
          <option value="Tackle Climate Change">
            Tackle Climate Change
          </option>
          <option value="Protect Land">
            Protect Land &amp; Water
          </option>
          <option value="Provide Food">
            Provide Food &amp; Water Sustainably
          </option>
          <option value="Build Healthy">Build Healthy Cities</option>
        </select>
      </motion.div>
      <div className={styles.list}>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onClick={() => setId(0)}
          style={{
            backgroundColor: id == 0 ? list[id].color : "transparent",
            color: id == 0 ? "white" : "black",
          }}
        >
          Bengal Tiger
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={() => setId(1)}
          style={{
            backgroundColor: id == 1 ? list[id].color : "transparent",
            color: id == 1 ? "white" : "black",
          }}
        >
          Asiatic Lion
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          onClick={() => setId(2)}
          style={{
            backgroundColor: id == 2 ? list[id].color : "transparent",
            color: id == 2 ? "white" : "black",
          }}
        >
          Nilgiri Tahr
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          onClick={() => setId(3)}
          style={{
            backgroundColor: id == 3 ? list[id].color : "transparent",
            color: id == 3 ? "white" : "black",
          }}
        >
          Red Panda
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onClick={() => setId(4)}
          style={{
            backgroundColor: id == 4 ? list[id].color : "transparent",
            color: id == 4 ? "white" : "black",
          }}
        >
          Hangul
        </motion.a>
      </div>
    </section>
  );
};

export default Section5;
