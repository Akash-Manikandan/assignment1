import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Button, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd400",
    },
  },
});

const Header = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.container}>
      <motion.nav
        className={styles.navigation}
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.logo}>
          <Image src="/images/lion.png" width={80} height={60} alt="Lion" />
        </div>
        {!matches ? (
          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Events</a>
          </div>
        ) : (
          <div onClick={() => setShowMenu(!showMenu)}>
            {!showMenu ? (
              <Image
                width={30}
                height={30}
                alt="menu"
                src={"/images/menu.png"}
                priority
              />
            ) : (
              <Image
                width={30}
                height={30}
                alt="close"
                src={"/images/close.png"}
                priority
              />
            )}
          </div>
        )}
        {showMenu && matches && (
          <div className={styles.clickable}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Events</a>
          </div>
        )}
        {!matches && (
          <ThemeProvider theme={theme}>
            <Button variant="contained" className={styles.button}>
              Contact Us
            </Button>
          </ThemeProvider>
        )}
      </motion.nav>
    </header>
  );
};

export default Header;
