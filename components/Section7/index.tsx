import React, {  useState } from "react";
import Card from "../Card";
import styles from "./Section7.module.scss";
import { Reorder } from "framer-motion";
import { useMediaQuery } from "@mui/material";
const Section7 = () => {
  const size = useMediaQuery('(max-width:800px)');
  
  
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Making Carbon Markets Work for Faster Climate Action",
      content:
        "As part of ambitious decarbonization plans, offsetting is a near-term solution to closing the emissions gap.",
    },
    {
      id: 2,
      title: "Partnering to Preserve Belize Maya Forest",
      content:
        "Today, more than a dozen organizations, including The Nature Conservancy, are protecting 236,000 acres of land that represents an irreplaceable linchpin in the conservation.",
    },
    {
      id: 3,
      title: "Climate-Ready Fisheries Can Restore Ocean Health",
      content:
        "Explore how fisheries staff at The Nature Conservancy are using science and collaborative projects to ensure healthy oceans and climate-ready fisheries in North America and around the world.",
    },
  ]);
  return (
    <Reorder.Group
      axis={!size ? "x" : "y"}
      values={items}
      onReorder={setItems}
      className={styles.container}
    >
      {items.map((item) => {
        return (
          <Reorder.Item key={item.id} value={item} className={styles.listContainer}>
            <Card title={item.title} content={item.content} />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};

export default Section7;
