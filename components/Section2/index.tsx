import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Section2.module.scss";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd400",
    },
  },
});
const Section2 = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content1}
        initial={{ x: -180 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our 2022 Global Photo Contest
      </motion.div>
      <div className={styles.content2}>
        <motion.div
          initial={{ x: 180 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Check out some of the amazing submissions to this year&apos;s Global Photo
          Contest before winners are announced September 22!
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ThemeProvider theme={theme}>
            <Button variant="contained" className={styles.button}>
              Learn More
            </Button>
          </ThemeProvider>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
