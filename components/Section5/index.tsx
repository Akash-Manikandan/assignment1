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
        viewport={{once:true}}
        transition={{ duration: 1 }}
      >
        <select name="Lorem ipsum dolor" id="Lorem ipsum dolor">
          <option value="">Select service category</option>
          <option value="omnis voluptas assumenda est, omnis dolor">
            omnis voluptas assumenda est, omnis dolor
          </option>
          <option value="Temporibus autem quibusdam">
            Temporibus autem quibusdam
          </option>
          <option value="praesentium voluptatum deleniti ">
            praesentium voluptatum deleniti{" "}
          </option>
          <option value="alias consequatur aut">alias consequatur aut</option>
        </select>
      </motion.div>
      <div className={styles.list}>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 1, delay: 0.2 }}
          onClick={() => setId(0)}
          style={{
            backgroundColor: id == 0 ? list[id].color : "transparent",
            color: id == 0 ? "white" : "black",
          }}
        >
          Autem
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={() => setId(1)}
          style={{
            backgroundColor: id == 1 ? list[id].color : "transparent",
            color: id == 1 ? "white" : "black",
          }}
        >
          Deleniti
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{once:true}}
          onClick={() => setId(2)}
          style={{
            backgroundColor: id == 2 ? list[id].color : "transparent",
            color: id == 2 ? "white" : "black",
          }}
        >
          Tempo
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{once:true}}
          onClick={() => setId(3)}
          style={{
            backgroundColor: id == 3 ? list[id].color : "transparent",
            color: id == 3 ? "white" : "black",
          }}
        >
          Autum
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{once:true}}
          onClick={() => setId(4)}
          style={{
            backgroundColor: id == 4 ? list[id].color : "transparent",
            color: id == 4 ? "white" : "black",
          }}
        >
          Omnis
        </motion.a>
      </div>
    </section>
  );
};

export default Section5;
