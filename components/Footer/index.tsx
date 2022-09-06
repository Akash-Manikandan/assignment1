import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd400",
    },
  },
});
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>Ready to get started?</div>
      <div className={styles.cardContainer}>
        <motion.div
          className={styles.card}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.title}>Sed ut perspiciatis</div>
          <summary className={styles.content}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi.
          </summary>
          <ThemeProvider theme={theme}>
            <Button variant="contained" className={styles.button}>
              Book Demo
            </Button>
          </ThemeProvider>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.title}>Nemo enim ipsam</div>
          <summary className={styles.content}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti.
          </summary>
          <ThemeProvider theme={theme}>
            <Button variant="contained" className={styles.button}>
              Request Callback
            </Button>
          </ThemeProvider>
        </motion.div>
      </div>
      <div className={styles.bottomC}>
        <motion.div
          className={styles.bottomLogoC}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <Image src="/images/svce.png" width={160} height={35} alt="SVCE" />
          </div>
          <address>
            Post Bag No.1 <br />
            Pennalur Village <br />
            Chennai - Bengaluru Highways <br />
            Sriperumbudur (off Chennai) Tk. - 602 117 <br />
            Tamil Nadu, India
          </address>
        </motion.div>
        <div className={styles.links}>
          <a>Campus</a>
          <a>Research</a>
          <a>Admission</a>
          <a>Contact</a>
        </div>
        <style jsx>{`
          a:hover {
            cursor: pointer;
          }
        `}</style>
        <motion.div
          className={styles.socialMedia}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            className={styles.image}
            src="/images/facebook.gif"
            width={50}
            height={50}
            alt="facebook"
          />
          <Image
            className={styles.image}
            src="/images/twitter.gif"
            width={50}
            height={50}
            alt="twitter"
          />
          <Image
            className={styles.image}
            src="/images/instagram.gif"
            width={50}
            height={50}
            alt="instagram"
          />
          <Image
            className={styles.image}
            src="/images/discord.gif"
            width={50}
            height={50}
            alt="discord"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
