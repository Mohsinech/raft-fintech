import React from "react";
import styles from "./cta.module.css";

const CtaButton = ({ label, href, style }) => {
  return (
    <a href={href}>
      <button className={styles.btn} style={!style ? {} : style}>
        <span href={href} className={styles.signup}>
          {!label ? "Button" : label}
        </span>
      </button>
    </a>
  );
};

export default CtaButton;
