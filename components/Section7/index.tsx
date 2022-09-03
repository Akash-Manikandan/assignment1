import React from "react";
import Card from "../Card";
import styles from "./Section7.module.scss";
const Section = () => {
  return (
    <div className={styles.container}>
      <Card title={`Lorem Ipsum`} content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`} />
      <Card title={`Finibus Bonorum`} content={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam`} />
      <Card title={`Corrupti Quos`} content={`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti `} />
    </div>
  );
};

export default Section;
