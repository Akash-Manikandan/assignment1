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
    <div className={styles.container}>
      <div className={styles.select}>
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
      </div>
      <div className={styles.list}>
        <a
          onClick={() => setId(0)}
          style={{
            backgroundColor: id == 0 ? list[id].color : "transparent",
            color: id == 0 ? "white" : "black",
          }}
        >
          Autem
        </a>
        <a
          onClick={() => setId(1)}
          style={{
            backgroundColor: id == 1 ? list[id].color : "transparent",
            color: id == 1 ? "white" : "black",
          }}
        >
          Deleniti
        </a>
        <a
          onClick={() => setId(2)}
          style={{
            backgroundColor: id == 2 ? list[id].color : "transparent",
            color: id == 2 ? "white" : "black",
          }}
        >
          Tempo
        </a>
        <a
          onClick={() => setId(3)}
          style={{
            backgroundColor: id == 3 ? list[id].color : "transparent",
            color: id == 3 ? "white" : "black",
          }}
        >
          Autum
        </a>
        <a
          onClick={() => setId(4)}
          style={{
            backgroundColor: id == 4 ? list[id].color : "transparent",
            color: id == 4 ? "white" : "black",
          }}
        >
          Omnis
        </a>
      </div>
    </div>
  );
};

export default Section5;
