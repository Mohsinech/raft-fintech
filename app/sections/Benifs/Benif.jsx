"use client";

import React, { useEffect, useRef } from "react";
import styles from "./benif.module.css";
import { OptionDrop } from "@/utils";
import { motion } from "framer-motion";

const DURATION = 1;

const Benif = () => {
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

  // Refs
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      const image2 = imageRef2.current;

      if (!section || !image) return;

      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const relativeScroll = scrollY - sectionTop;

      if (relativeScroll >= 0 && relativeScroll <= section.offsetHeight) {
        image.style.transform = `translateY(${relativeScroll * 0.05}px)`;
      }
      if (relativeScroll >= 0 && relativeScroll <= section.offsetHeight) {
        image2.style.transform = `translateY(${relativeScroll * -0.05}px)`;
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
      className={styles.benif}
      ref={sectionRef}
    >
      <div className={styles.content}>
        <h1>Your Financial Freedom, Your Way</h1>
        <h3>
          We believe that managing your finances should be effortless and
          cost-effective. That's why we offer you the freedom you deserve
        </h3>
      </div>

      <div className="overflow-hidden relative">
        <img src="/assets/images/benif.png" alt="Benefits" />
        <img
          ref={imageRef}
          className="absolute top-1/6 left-1/6 object-cover"
          src="/assets/icons/posi_img.svg"
          alt="sent"
        />
        <img
          ref={imageRef2}
          className="absolute right-1/6 bottom-1/6 object-cover"
          src="/assets/icons/posi_img_2.svg"
          alt="receive"
        />
      </div>

      <OptionDrop />
    </motion.section>
  );
};

export default Benif;
