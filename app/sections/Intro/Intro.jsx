"use client";

import React, { useEffect, useRef } from "react";
import styles from "./intro.module.css";
import { OptionDropSe } from "@/utils";
import { motion } from "framer-motion";

const DURATION = 1;

const Intro = () => {
  // Animation for the section
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const image = imageRef.current;

      if (!section || !image) return;

      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const relativeScroll = scrollY - sectionTop;

      if (relativeScroll >= 0 && relativeScroll <= section.offsetHeight) {
        image.style.transform = `translateY(${-relativeScroll * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: DURATION, delay: 0.4 }}
      className={styles.intro}
      ref={sectionRef}
    >
      <div className={styles.content}>
        <h2>Introducing</h2>
        <h1>Introducing RAFT's Next-Gen Cards</h1>
        <h3>
          Discover RAFT's latest innovation – our new cards. Elevate your
          banking experience with cutting-edge features, security, and
          unprecedented convenience.
        </h3>
      </div>

      <div className={styles.cards}>
        <img
          ref={imageRef}
          src="/assets/images/card.png"
          alt="card"
          style={{
            width: "350px",
            height: "450px",
            objectFit: "cover",
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <OptionDropSe />
    </motion.section>
  );
};

export default Intro;
