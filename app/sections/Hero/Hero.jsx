import React from "react";
import styles from "./hero.module.css";
import { CtaButton } from "@/components/shared";

const Hero = () => {
  return (
    <section className={styles.hero}>
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
    </section>
  );
};

export default Hero;
