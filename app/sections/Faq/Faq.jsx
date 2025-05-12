"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";
import Dropdown from "@/utils/Dropdown/Dropdown";
import { DropData } from "@/constants/data";
import { motion } from "framer-motion";

const DURATION = 1;

const Faq = () => {
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

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: DURATION, delay: 0.4 }}
      // viewport={{ once: true }}
      className={styles.faq}
    >
      <div className={styles.content}>
        <h1>Frequently asked questions</h1>
      </div>

      {/* Drop Down */}
      <div className={styles.flex_col}>
        {DropData.map((item, index) => (
          <Dropdown
            key={item.id}
            index={index}
            isOpen={openIndex === index}
            onToggle={handleToggle}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Faq;
