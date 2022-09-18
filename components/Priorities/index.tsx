import { motion } from "framer-motion";
import React from "react";
import styles from "./Priorities.module.scss";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const transition = { duration: 2, yoyo: Infinity, ease: "easeInOut" };

const Priorities = () => {
  return (
    <div className={styles.container}>
      <motion.svg
        width="467.35621337890626px"
        height="123.2px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="16.32189331054687 13.399999999999999 467.35621337890626 123.2"
        style={{ background: "rgb(255, 255, 255)" }}
        preserveAspectRatio="xMidYMid"
        variants={svgVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <g transform="translate(84.85499382019043, 95.19000053405762)">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            fill="transparent"
            strokeWidth="3"
            stroke="#fbb900"
            transition={transition}
            d="M21.39 0.45L21.39 0.45Q15.90 0.45 11.84-2.02L11.84-2.02L11.84-2.02Q7.78-4.48 5.60-9.02L5.60-9.02L5.60-9.02Q3.42-13.55 3.42-19.71L3.42-19.71L3.42-19.71Q3.42-25.93 5.57-30.49L5.57-30.49L5.57-30.49Q7.73-35.06 11.79-37.49L11.79-37.49L11.79-37.49Q15.85-39.93 21.39-39.93L21.39-39.93L21.39-39.93Q26.94-39.93 31.00-37.49L31.00-37.49L31.00-37.49Q35.06-35.06 37.21-30.49L37.21-30.49L37.21-30.49Q39.37-25.93 39.37-19.77L39.37-19.77L39.37-19.77Q39.37-13.61 37.18-9.04L37.18-9.04L37.18-9.04Q35-4.48 30.94-2.02L30.94-2.02L30.94-2.02Q26.88 0.45 21.39 0.45L21.39 0.45ZM21.39-3.47L21.39-3.47Q27.66-3.47 31.16-7.70L31.16-7.70L31.16-7.70Q34.66-11.93 34.66-19.77L34.66-19.77L34.66-19.77Q34.66-27.61 31.19-31.81L31.19-31.81L31.19-31.81Q27.72-36.01 21.39-36.01L21.39-36.01L21.39-36.01Q15.12-36.01 11.62-31.78L11.62-31.78L11.62-31.78Q8.12-27.55 8.12-19.77L8.12-19.77L8.12-19.77Q8.12-11.98 11.62-7.73L11.62-7.73L11.62-7.73Q15.12-3.47 21.39-3.47L21.39-3.47ZM67.70-27.83L67.70-27.83Q68.77-27.83 69.36-27.22L69.36-27.22L69.36-27.22Q69.94-26.60 69.94-25.59L69.94-25.59L69.94-1.90L69.94-1.90Q69.94-0.95 69.36-0.34L69.36-0.34L69.36-0.34Q68.77 0.28 67.70 0.28L67.70 0.28L67.70 0.28Q66.70 0.28 66.11-0.31L66.11-0.31L66.11-0.31Q65.52-0.90 65.52-1.85L65.52-1.85L65.52-4.65L65.52-4.65Q64.23-2.18 61.91-0.90L61.91-0.90L61.91-0.90Q59.58 0.39 56.67 0.39L56.67 0.39L56.67 0.39Q51.80 0.39 49.34-2.32L49.34-2.32L49.34-2.32Q46.87-5.04 46.87-10.36L46.87-10.36L46.87-25.59L46.87-25.59Q46.87-26.60 47.49-27.22L47.49-27.22L47.49-27.22Q48.10-27.83 49.17-27.83L49.17-27.83L49.17-27.83Q50.23-27.83 50.82-27.22L50.82-27.22L50.82-27.22Q51.41-26.60 51.41-25.59L51.41-25.59L51.41-10.47L51.41-10.47Q51.41-6.83 52.86-5.12L52.86-5.12L52.86-5.12Q54.32-3.42 57.46-3.42L57.46-3.42L57.46-3.42Q61.04-3.42 63.22-5.74L63.22-5.74L63.22-5.74Q65.41-8.06 65.41-11.87L65.41-11.87L65.41-25.59L65.41-25.59Q65.41-26.60 66.02-27.22L66.02-27.22L66.02-27.22Q66.64-27.83 67.70-27.83L67.70-27.83ZM91.90-27.83L91.90-27.83Q94.25-28 94.25-25.93L94.25-25.93L94.25-25.93Q94.25-25.03 93.74-24.50L93.74-24.50L93.74-24.50Q93.24-23.97 92.01-23.86L92.01-23.86L90.33-23.69L90.33-23.69Q86.58-23.35 84.76-21.03L84.76-21.03L84.76-21.03Q82.94-18.70 82.94-15.57L82.94-15.57L82.94-1.96L82.94-1.96Q82.94-0.84 82.32-0.28L82.32-0.28L82.32-0.28Q81.70 0.28 80.70 0.28L80.70 0.28L80.70 0.28Q79.69 0.28 79.04-0.31L79.04-0.31L79.04-0.31Q78.40-0.90 78.40-1.96L78.40-1.96L78.40-25.59L78.40-25.59Q78.40-26.66 79.07-27.24L79.07-27.24L79.07-27.24Q79.74-27.83 80.70-27.83L80.70-27.83L80.70-27.83Q81.59-27.83 82.21-27.24L82.21-27.24L82.21-27.24Q82.82-26.66 82.82-25.65L82.82-25.65L82.82-22.51L82.82-22.51Q84-24.98 86.16-26.26L86.16-26.26L86.16-26.26Q88.31-27.55 91.11-27.78L91.11-27.78L91.90-27.83ZM115.58 0.28L115.58 0.28Q114.52 0.28 113.90-0.36L113.90-0.36L113.90-0.36Q113.29-1.01 113.29-2.07L113.29-2.07L113.29-37.24L113.29-37.24Q113.29-38.25 113.93-38.86L113.93-38.86L113.93-38.86Q114.58-39.48 115.64-39.48L115.64-39.48L128.91-39.48L128.91-39.48Q135.13-39.48 138.57-36.46L138.57-36.46L138.57-36.46Q142.02-33.43 142.02-27.89L142.02-27.89L142.02-27.89Q142.02-22.34 138.54-19.26L138.54-19.26L138.54-19.26Q135.07-16.18 128.91-16.18L128.91-16.18L117.88-16.18L117.88-2.07L117.88-2.07Q117.88-1.01 117.26-0.36L117.26-0.36L117.26-0.36Q116.65 0.28 115.58 0.28L115.58 0.28ZM117.88-19.99L128.46-19.99L128.46-19.99Q137.48-19.99 137.48-27.89L137.48-27.89L137.48-27.89Q137.48-35.67 128.46-35.67L128.46-35.67L117.88-35.67L117.88-19.99ZM162.23-27.83L162.23-27.83Q164.58-28 164.58-25.93L164.58-25.93L164.58-25.93Q164.58-25.03 164.08-24.50L164.08-24.50L164.08-24.50Q163.58-23.97 162.34-23.86L162.34-23.86L160.66-23.69L160.66-23.69Q156.91-23.35 155.09-21.03L155.09-21.03L155.09-21.03Q153.27-18.70 153.27-15.57L153.27-15.57L153.27-1.96L153.27-1.96Q153.27-0.84 152.66-0.28L152.66-0.28L152.66-0.28Q152.04 0.28 151.03 0.28L151.03 0.28L151.03 0.28Q150.02 0.28 149.38-0.31L149.38-0.31L149.38-0.31Q148.74-0.90 148.74-1.96L148.74-1.96L148.74-25.59L148.74-25.59Q148.74-26.66 149.41-27.24L149.41-27.24L149.41-27.24Q150.08-27.83 151.03-27.83L151.03-27.83L151.03-27.83Q151.93-27.83 152.54-27.24L152.54-27.24L152.54-27.24Q153.16-26.66 153.16-25.65L153.16-25.65L153.16-22.51L153.16-22.51Q154.34-24.98 156.49-26.26L156.49-26.26L156.49-26.26Q158.65-27.55 161.45-27.78L161.45-27.78L162.23-27.83ZM170.80 0.28L170.80 0.28Q169.79 0.28 169.15-0.31L169.15-0.31L169.15-0.31Q168.50-0.90 168.50-1.96L168.50-1.96L168.50-25.59L168.50-25.59Q168.50-26.66 169.15-27.24L169.15-27.24L169.15-27.24Q169.79-27.83 170.80-27.83L170.80-27.83L170.80-27.83Q171.81-27.83 172.42-27.24L172.42-27.24L172.42-27.24Q173.04-26.66 173.04-25.59L173.04-25.59L173.04-1.96L173.04-1.96Q173.04-0.84 172.42-0.28L172.42-0.28L172.42-0.28Q171.81 0.28 170.80 0.28L170.80 0.28ZM170.80-33.71L170.80-33.71Q169.46-33.71 168.62-34.50L168.62-34.50L168.62-34.50Q167.78-35.28 167.78-36.57L167.78-36.57L167.78-36.57Q167.78-37.80 168.62-38.58L168.62-38.58L168.62-38.58Q169.46-39.37 170.80-39.37L170.80-39.37L170.80-39.37Q172.14-39.37 172.98-38.58L172.98-38.58L172.98-38.58Q173.82-37.80 173.82-36.57L173.82-36.57L173.82-36.57Q173.82-35.28 172.98-34.50L172.98-34.50L172.98-34.50Q172.14-33.71 170.80-33.71L170.80-33.71ZM192.81 0.39L192.81 0.39Q188.94 0.39 186.00-1.34L186.00-1.34L186.00-1.34Q183.06-3.08 181.47-6.30L181.47-6.30L181.47-6.30Q179.87-9.52 179.87-13.78L179.87-13.78L179.87-13.78Q179.87-18.03 181.47-21.25L181.47-21.25L181.47-21.25Q183.06-24.47 186.00-26.21L186.00-26.21L186.00-26.21Q188.94-27.94 192.81-27.94L192.81-27.94L192.81-27.94Q196.67-27.94 199.64-26.21L199.64-26.21L199.64-26.21Q202.61-24.47 204.20-21.25L204.20-21.25L204.20-21.25Q205.80-18.03 205.80-13.78L205.80-13.78L205.80-13.78Q205.80-9.52 204.20-6.30L204.20-6.30L204.20-6.30Q202.61-3.08 199.64-1.34L199.64-1.34L199.64-1.34Q196.67 0.39 192.81 0.39L192.81 0.39ZM192.81-3.36L192.81-3.36Q196.84-3.36 199.00-6.02L199.00-6.02L199.00-6.02Q201.15-8.68 201.15-13.78L201.15-13.78L201.15-13.78Q201.15-18.76 198.97-21.48L198.97-21.48L198.97-21.48Q196.78-24.19 192.81-24.19L192.81-24.19L192.81-24.19Q188.83-24.19 186.65-21.48L186.65-21.48L186.65-21.48Q184.46-18.76 184.46-13.78L184.46-13.78L184.46-13.78Q184.46-8.74 186.62-6.05L186.62-6.05L186.62-6.05Q188.78-3.36 192.81-3.36L192.81-3.36ZM226.07-27.83L226.07-27.83Q228.42-28 228.42-25.93L228.42-25.93L228.42-25.93Q228.42-25.03 227.92-24.50L227.92-24.50L227.92-24.50Q227.42-23.97 226.18-23.86L226.18-23.86L224.50-23.69L224.50-23.69Q220.75-23.35 218.93-21.03L218.93-21.03L218.93-21.03Q217.11-18.70 217.11-15.57L217.11-15.57L217.11-1.96L217.11-1.96Q217.11-0.84 216.50-0.28L216.50-0.28L216.50-0.28Q215.88 0.28 214.87 0.28L214.87 0.28L214.87 0.28Q213.86 0.28 213.22-0.31L213.22-0.31L213.22-0.31Q212.58-0.90 212.58-1.96L212.58-1.96L212.58-25.59L212.58-25.59Q212.58-26.66 213.25-27.24L213.25-27.24L213.25-27.24Q213.92-27.83 214.87-27.83L214.87-27.83L214.87-27.83Q215.77-27.83 216.38-27.24L216.38-27.24L216.38-27.24Q217-26.66 217-25.65L217-25.65L217-22.51L217-22.51Q218.18-24.98 220.33-26.26L220.33-26.26L220.33-26.26Q222.49-27.55 225.29-27.78L225.29-27.78L226.07-27.83ZM234.64 0.28L234.64 0.28Q233.63 0.28 232.99-0.31L232.99-0.31L232.99-0.31Q232.34-0.90 232.34-1.96L232.34-1.96L232.34-25.59L232.34-25.59Q232.34-26.66 232.99-27.24L232.99-27.24L232.99-27.24Q233.63-27.83 234.64-27.83L234.64-27.83L234.64-27.83Q235.65-27.83 236.26-27.24L236.26-27.24L236.26-27.24Q236.88-26.66 236.88-25.59L236.88-25.59L236.88-1.96L236.88-1.96Q236.88-0.84 236.26-0.28L236.26-0.28L236.26-0.28Q235.65 0.28 234.64 0.28L234.64 0.28ZM234.64-33.71L234.64-33.71Q233.30-33.71 232.46-34.50L232.46-34.50L232.46-34.50Q231.62-35.28 231.62-36.57L231.62-36.57L231.62-36.57Q231.62-37.80 232.46-38.58L232.46-38.58L232.46-38.58Q233.30-39.37 234.64-39.37L234.64-39.37L234.64-39.37Q235.98-39.37 236.82-38.58L236.82-38.58L236.82-38.58Q237.66-37.80 237.66-36.57L237.66-36.57L237.66-36.57Q237.66-35.28 236.82-34.50L236.82-34.50L236.82-34.50Q235.98-33.71 234.64-33.71L234.64-33.71ZM257.94-3.30L257.94-3.30Q259.90-3.14 259.90-1.51L259.90-1.51L259.90-1.51Q259.90-0.56 259.20-0.08L259.20-0.08L259.20-0.08Q258.50 0.39 257.10 0.28L257.10 0.28L255.58 0.17L255.58 0.17Q251.10-0.17 248.98-2.52L248.98-2.52L248.98-2.52Q246.85-4.87 246.85-9.63L246.85-9.63L246.85-23.69L243.10-23.69L243.10-23.69Q242.14-23.69 241.61-24.16L241.61-24.16L241.61-24.16Q241.08-24.64 241.08-25.42L241.08-25.42L241.08-25.42Q241.08-26.26 241.61-26.77L241.61-26.77L241.61-26.77Q242.14-27.27 243.10-27.27L243.10-27.27L246.85-27.27L246.85-33.60L246.85-33.60Q246.85-34.66 247.46-35.25L247.46-35.25L247.46-35.25Q248.08-35.84 249.14-35.84L249.14-35.84L249.14-35.84Q250.15-35.84 250.77-35.25L250.77-35.25L250.77-35.25Q251.38-34.66 251.38-33.60L251.38-33.60L251.38-27.27L257.60-27.27L257.60-27.27Q258.50-27.27 259.03-26.77L259.03-26.77L259.03-26.77Q259.56-26.26 259.56-25.42L259.56-25.42L259.56-25.42Q259.56-24.64 259.03-24.16L259.03-24.16L259.03-24.16Q258.50-23.69 257.60-23.69L257.60-23.69L251.38-23.69L251.38-9.41L251.38-9.41Q251.38-6.33 252.64-4.96L252.64-4.96L252.64-4.96Q253.90-3.58 256.42-3.42L256.42-3.42L257.94-3.30ZM266.67 0.28L266.67 0.28Q265.66 0.28 265.02-0.31L265.02-0.31L265.02-0.31Q264.38-0.90 264.38-1.96L264.38-1.96L264.38-25.59L264.38-25.59Q264.38-26.66 265.02-27.24L265.02-27.24L265.02-27.24Q265.66-27.83 266.67-27.83L266.67-27.83L266.67-27.83Q267.68-27.83 268.30-27.24L268.30-27.24L268.30-27.24Q268.91-26.66 268.91-25.59L268.91-25.59L268.91-1.96L268.91-1.96Q268.91-0.84 268.30-0.28L268.30-0.28L268.30-0.28Q267.68 0.28 266.67 0.28L266.67 0.28ZM266.67-33.71L266.67-33.71Q265.33-33.71 264.49-34.50L264.49-34.50L264.49-34.50Q263.65-35.28 263.65-36.57L263.65-36.57L263.65-36.57Q263.65-37.80 264.49-38.58L264.49-38.58L264.49-38.58Q265.33-39.37 266.67-39.37L266.67-39.37L266.67-39.37Q268.02-39.37 268.86-38.58L268.86-38.58L268.86-38.58Q269.70-37.80 269.70-36.57L269.70-36.57L269.70-36.57Q269.70-35.28 268.86-34.50L268.86-34.50L268.86-34.50Q268.02-33.71 266.67-33.71L266.67-33.71ZM298.48-6.33L298.48-6.33Q299.10-6.33 299.54-5.82L299.54-5.82L299.54-5.82Q299.99-5.32 299.99-4.54L299.99-4.54L299.99-4.54Q299.99-3.14 298.03-1.96L298.03-1.96L298.03-1.96Q296.02-0.78 293.78-0.20L293.78-0.20L293.78-0.20Q291.54 0.39 289.41 0.39L289.41 0.39L289.41 0.39Q283.08 0.39 279.41-3.36L279.41-3.36L279.41-3.36Q275.74-7.11 275.74-13.72L275.74-13.72L275.74-13.72Q275.74-17.92 277.37-21.14L277.37-21.14L277.37-21.14Q278.99-24.36 281.93-26.15L281.93-26.15L281.93-26.15Q284.87-27.94 288.62-27.94L288.62-27.94L288.62-27.94Q293.94-27.94 297.08-24.47L297.08-24.47L297.08-24.47Q300.22-21 300.22-15.06L300.22-15.06L300.22-15.06Q300.22-13.94 299.77-13.44L299.77-13.44L299.77-13.44Q299.32-12.94 298.31-12.94L298.31-12.94L280.28-12.94L280.28-12.94Q280.78-3.30 289.41-3.30L289.41-3.30L289.41-3.30Q291.59-3.30 293.16-3.89L293.16-3.89L293.16-3.89Q294.73-4.48 296.52-5.49L296.52-5.49L296.52-5.49Q297.98-6.33 298.48-6.33L298.48-6.33ZM288.68-24.42L288.68-24.42Q285.10-24.42 282.94-22.18L282.94-22.18L282.94-22.18Q280.78-19.94 280.39-15.85L280.39-15.85L296.24-15.85L296.24-15.85Q296.13-19.99 294.17-22.20L294.17-22.20L294.17-22.20Q292.21-24.42 288.68-24.42L288.68-24.42ZM316.06 0.39L316.06 0.39Q313.49 0.39 311.16-0.22L311.16-0.22L311.16-0.22Q308.84-0.84 307.05-1.96L307.05-1.96L307.05-1.96Q306.04-2.63 305.62-3.22L305.62-3.22L305.62-3.22Q305.20-3.81 305.20-4.65L305.20-4.65L305.20-4.65Q305.20-5.38 305.62-5.85L305.62-5.85L305.62-5.85Q306.04-6.33 306.71-6.33L306.71-6.33L306.71-6.33Q307.38-6.33 308.67-5.49L308.67-5.49L308.67-5.49Q310.35-4.48 312.00-3.89L312.00-3.89L312.00-3.89Q313.66-3.30 316.12-3.30L316.12-3.30L316.12-3.30Q319.14-3.30 320.82-4.37L320.82-4.37L320.82-4.37Q322.50-5.43 322.50-7.45L322.50-7.45L322.50-7.45Q322.50-8.68 321.89-9.44L321.89-9.44L321.89-9.44Q321.27-10.19 319.76-10.78L319.76-10.78L319.76-10.78Q318.25-11.37 315.34-11.98L315.34-11.98L315.34-11.98Q310.41-13.05 308.28-14.84L308.28-14.84L308.28-14.84Q306.15-16.63 306.15-19.71L306.15-19.71L306.15-19.71Q306.15-22.12 307.50-23.97L307.50-23.97L307.50-23.97Q308.84-25.82 311.22-26.88L311.22-26.88L311.22-26.88Q313.60-27.94 316.62-27.94L316.62-27.94L316.62-27.94Q318.81-27.94 320.85-27.36L320.85-27.36L320.85-27.36Q322.90-26.77 324.46-25.70L324.46-25.70L324.46-25.70Q326.37-24.36 326.37-22.90L326.37-22.90L326.37-22.90Q326.37-22.18 325.92-21.67L325.92-21.67L325.92-21.67Q325.47-21.17 324.86-21.17L324.86-21.17L324.86-21.17Q324.18-21.17 322.84-22.12L322.84-22.12L322.84-22.12Q321.27-23.13 319.87-23.69L319.87-23.69L319.87-23.69Q318.47-24.25 316.40-24.25L316.40-24.25L316.40-24.25Q313.77-24.25 312.17-23.07L312.17-23.07L312.17-23.07Q310.58-21.90 310.58-19.94L310.58-19.94L310.58-19.94Q310.58-18.70 311.16-17.95L311.16-17.95L311.16-17.95Q311.75-17.19 313.12-16.60L313.12-16.60L313.12-16.60Q314.50-16.02 317.07-15.46L317.07-15.46L317.07-15.46Q320.88-14.62 322.98-13.61L322.98-13.61L322.98-13.61Q325.08-12.60 325.98-11.14L325.98-11.14L325.98-11.14Q326.87-9.69 326.87-7.45L326.87-7.45L326.87-7.45Q326.87-3.92 323.90-1.76L323.90-1.76L323.90-1.76Q320.94 0.39 316.06 0.39L316.06 0.39Z"
          ></motion.path>
        </g>
      </motion.svg>
    </div>
  );
};

export default Priorities;
