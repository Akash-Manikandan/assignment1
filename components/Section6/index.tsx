import Image from "next/image";
import React from "react";
import styles from "./Section6.module.scss";
const Section6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/images/tiger.jpg"
          alt="tiger"
          width={2400}
          height={2400}
        />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <div className={styles.text}>Testimonials</div>
          <div className={styles.star}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
        <div className={styles.content}>
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae”
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomImageContainer}>
            <div>
              <Image src="/images/man.png" alt="man" width={50} height={50} />
            </div>
            <div className={styles.nameUniv}>
              <div>vitae dicta</div>
              <div>sunt explicabo</div>
            </div>
            <div className={styles.line}></div>
            <div>
            <Image src="/images/chennai.png" alt="chennai" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
