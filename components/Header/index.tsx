import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Button, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <Image src="/images/svce.png" width={160} height={35} alt="SVCE" />
        </div>
        {!matches ? (
          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Events</a>
          </div>
        ) : (
          <div
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu ? (
              <Image
                width={30}
                height={30}
                alt="menu"
                src={"/images/menu.png"}
              />
            ) : (
              <Image
                width={30}
                height={30}
                alt="close"
                src={"/images/close.png"}
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
        <ThemeProvider theme={theme}>
          <Button variant="contained" className={styles.button}>
            Contact Us
          </Button>
        </ThemeProvider>
      </nav>
    </header>
  );
};

export default Header;
