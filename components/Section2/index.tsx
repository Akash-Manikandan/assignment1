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
        initial={{ x: -280 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        At vero eos et accusamus iusto odio dignissimos.
      </motion.div>
      <div className={styles.content2}>
        <motion.div
          initial={{ x: 280 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
