import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./toggle.module.css";
import { CtaButton } from "../shared";
import Link from "next/link";

const DURATION = 1;

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.toggle}>
      <motion.svg
        onClick={handleToggle}
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 1, ease: [0.87, 0.13, 0, 1] }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className={`size-6 ${isOpen ? styles.rotate : ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </motion.svg>
      <AnimatePresence mode="wait">{isOpen && <Menu />}</AnimatePresence>
    </div>
  );
};

const Menu = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "85vh", borderRadius: "0 0 10px 10px" }}
      transition={{ duration: DURATION, ease: [0.87, 0.13, 0, 1] }}
      exit={{ height: 0 }}
      className={styles.menu}
    >
      {/* nav */}
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATION,
          delay: 0.8,
        }}
        className={styles.nav}
      >
        <h3>Index</h3>
        <ul className={styles.ul}>
          <li>
            <a href="#">
              Solution
              <span>01</span>
            </a>
          </li>
          <li>
            <a href="#">
              About
              <span>02</span>
            </a>
          </li>
          <li>
            <a href="#">
              Learn <span>03</span>
            </a>
          </li>
        </ul>
      </motion.nav>
      {/* Cta */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATION,
          delay: 0.8,
        }}
        className={styles.cta}
      >
        <h3>Ready to get started?</h3>
        <div className="flex gap-4 max-sm:flex-col">
          <Link href="#" className="flex flex-1/2">
            Login
          </Link>
          <Link href="#" className="flex gap-16 flex-1/2">
            <button className={styles.get}>Get Started</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Toggle;
