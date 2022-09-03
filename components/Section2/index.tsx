import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
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
    <div className={styles.container}>
      <div className={styles.content1}>
        At vero eos et accusamus iusto odio dignissimos.
      </div>
      <div className={styles.content2}>
        <div>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi
        </div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" className={styles.button}>
            Learn More
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Section2;
