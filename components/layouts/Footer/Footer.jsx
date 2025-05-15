import React from "react";
import styles from "./footer.module.css";
import { Select, SelectItem } from "@heroui/select";

export const langauges = [
  { key: "en", label: "English (United Kingdom)" },
  { key: "fr", label: "Français (France)" },
  { key: "es", label: "Español (España)" },
  { key: "de", label: "Deutsch (Deutschland)" },
];

const Footer = () => {
  //
  const variants = ["underlined"];

  return (
    <section>
      <footer className={styles.footer}>
        {/* Brand */}
        <div className={styles.brand}>
          <img src="/assets/icons/footer-img.png" alt="Raft" />
          <h1>Raft</h1>
        </div>

        {/* Footer Data */}
        <div className={styles.footer_data}>
          <div className={styles.code}>
            <div className={styles.qr_code}>
              <img
                className={styles.qcode}
                src="/assets/images/qr_code.png"
                alt="App Qr Code"
              />
              <div className="flex flex-col gap-2.5">
                <h2>Scan to download App on the Playstore and Appstore.</h2>
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/play-store.png" alt="Play Store" />
                  <img src="/assets/icons/apple.png" alt="Apple" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pages}>
            <div className="flex flex-col gap-3">
              <h3>About us</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#">Our company</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohssine-chedgane/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3>Legal</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3>Support</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Buy this template</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Data */}
        <div className={styles.footer_bottom}>
          <ul>
            <li>
              <a className={styles.social} href="#">
                TW
              </a>
            </li>
            <li>
              <a className={styles.social} href="#">
                INK
              </a>
            </li>
            <li>
              <a className={styles.social} href="#">
                IG
              </a>
            </li>
          </ul>
          <h3>&copy; 2025 | Raft Corp, LLC.</h3>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
