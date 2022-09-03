import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd400",
    },
  },
});

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <Image src="/images/svce.png" width={160} height={35} alt="SVCE" />
        </div>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
        </div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" className={styles.button}>Contact Us</Button>
        </ThemeProvider>
      </nav>
    </header>
  );
};

export default Header;
