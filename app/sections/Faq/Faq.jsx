"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";
import Dropdown from "@/utils/Dropdown/Dropdown";
import { DropData } from "@/constants/data";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.faq}>
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
    </section>
  );
};

export default Faq;
