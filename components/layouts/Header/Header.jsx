import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { CtaButton } from "@/components/shared";
import { AnchorAnim } from "@/utils";
import { motion } from "framer-motion";
import Toggle from "@/components/screen/Toggle";

const Header = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/assets/icons/import.png" alt="Raft" />
          <Link href="/" className={styles.logoText}>
            <h1>Raft</h1>
          </Link>
        </div>
        {/* Toggle */}
        <Toggle />
        {/*  */}

        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <AnchorAnim href="#" label="Solutions" />
            <AnchorAnim href="#" label="Learn" />
            <AnchorAnim href="#" label="About" />
          </ul>
        </nav>

        <div className={styles.cta}>
          <AnchorAnim href="#" label="Login" style={{ color: "#fff" }} />
          <CtaButton label="Get Started" href="#" />
        </div>
      </header>
    </motion.section>
  );
};

export default Header;
