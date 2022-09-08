import { motion, useScroll } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoImages from "../components/LogoImages";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Assignment 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <LogoImages />
      <Section4 />
      <Section5 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default Home;
