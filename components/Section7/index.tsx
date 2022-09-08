import React from "react";
import Card from "../Card";
import styles from "./Section7.module.scss";
const Section7 = () => {
  return (
    <section className={styles.container}>
      <Card title={`Making Carbon Markets Work for Faster Climate Action`} content={`As part of ambitious decarbonization plans, offsetting is a near-term solution to closing the emissions gap.`} />
      <Card title={`Partnering to Preserve Belize Maya Forest`} content={`Today, more than a dozen organizations, including The Nature Conservancy, are protecting 236,000 acres of land that represents an irreplaceable linchpin in the conservation.`} />
      <Card title={`Climate-Ready Fisheries Can Restore Ocean Health`} content={`Explore how fisheries staff at The Nature Conservancy are using science and collaborative projects to ensure healthy oceans and climate-ready fisheries in North America and around the world. `} />
    </section>
  );
};

export default Section7;
