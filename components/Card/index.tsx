import React from "react";
import styles from "./Card.module.scss";
const Card = ({title,content}:{title:string,content:string}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>
        {content}
      </div>
    </div>
  );
};

export default Card;
