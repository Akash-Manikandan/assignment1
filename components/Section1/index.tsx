import Image from "next/image";
import React from "react";
import CoverImage from "../CoverImage";
import styles from "./Section1.module.scss";

const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlighedTextAndIcon}>
        <div className={styles.highlighedLogo}>
          <Image src="/images/cat.png" alt="cat" width={60} height={60} />
        </div>
        <div className={styles.highlighedText}>
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <div></div>
      <div className={styles.downLeft}>
        <div>
          Except sint occaecat <span>cupidatat</span>
        </div>
      </div>
      <div className={styles.rightContent}>
        Sed ut perspiciatis unde omnis iste natus error accusantium doloremque
        laudantium, totam rem aperiam illo inventore veritatis et.
      </div>
      <CoverImage />
    </div>
  );
};

export default Section1;
