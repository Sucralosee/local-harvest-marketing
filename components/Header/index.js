import styles from "./Header.module.css";
import React, { useRef } from "react";
import Image from "next/image";

const Header = ({ scrollToSection, scrollToTop }) => {

    const headerRef = useRef(null);

  return (
    <header className={styles.headerContainer} ref={headerRef}>
        <div onClick={() => scrollToTop()} className={`${styles.wordmark} ${styles.linkClick}`}>
          {/* <Image
            src="images/Logo.svg"
            width={100}
            height={100}
          />
          <Image
            src="images/Wordmark.svg"
            width={400}
            height={178}
          /> */}
          <Image
            src="images/LogoWithWordmark.svg"
            width={500}
            height={178}
          />
        </div>
      <ul className={styles.listContainer}>
        {/* <li onClick={() => scrollToSection("Video")} className={styles.linkClick}>
          Video
        </li> */}
        <li onClick={() => scrollToSection("About")} className={styles.linkClick}>
          About
        </li>
        <li onClick={() => scrollToSection("Features")} className={styles.linkClick}>
          Features
        </li>
        {/* <li onClick={() => scrollToSection("PersuasiveFeatures")} className={styles.linkClick}>
          Persuasive Features
        </li> */}
        <li onClick={() => scrollToSection("Description")} className={styles.linkClick}>
          Description
        </li>
        {/* <li onClick={() => scrollToSection("Links")} className={styles.linkClick}>
          Links
        </li> */}
        <li onClick={() => scrollToSection("Contact")} className={styles.linkClick}>
          Contact
        </li>
      </ul>
    </header>
  );
};

export default Header;
