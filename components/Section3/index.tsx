import Image from "next/image";
import React from "react";
import styles from "./Section3.module.scss";
const Section3 = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image className={styles.image} src="/images/catpic.jpg" width={3648} height={5472} alt="cat" />
      </div>
      <div>
        <Image
          src="/images/peacock.jpg"
          width={1348}
          height={3700}
          alt="peacock"
          className={styles.image}
        />
      </div>
      <div>
        <Image
          src="/images/bunny.jpg"
          width={3456}
          height={5184}
          alt="bunny"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Section3;
