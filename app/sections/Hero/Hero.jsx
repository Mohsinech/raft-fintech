import React from "react";
import styles from "./hero.module.css";
import { CtaButton } from "@/components/shared";
import { motion } from "framer-motion";

const DURATION = 1;
const EASE = [0.87, 0.13, 0, 1];

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION, ease: EASE }}
      className={styles.hero}
    >
      {/* Intro Button */}
      <button className={styles.intro_btn}>
        <span>Introducing Raft Cards</span>
        <img src="./assets/icons/chevron-right.png" alt="chevron rigth" />
      </button>
      <div className={styles.content}>
        {/* Heading */}

        <h1>Building the future of banking</h1>
        {/* Sub-heading */}
        <h3>
          Experience the future of banking with RAFT. we're here to empower your
          financiel journey.
        </h3>
      </div>

      {/* Cta Button */}
      <CtaButton
        label="Get Started"
        href="#"
        style={{ padding: "1rem 2rem" }}
      />

      {/* Grid Background */}
      <img src="./assets/images/grid.png" alt="grid" className={styles.grid} />
    </motion.section>
  );
};

export default Hero;
