import React from "react";
import styles from "./header.module.css";
import { Link } from "next-view-transitions";
import { CtaButton } from "@/components/shared";
import { AnchorAnim } from "@/utils";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/icons/import.png" alt="Raft" />
        <Link href="/" className={styles.logoText}>
          <h1>Raft</h1>
        </Link>
      </div>

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
  );
};

export default Header;
