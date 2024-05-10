import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css"
// import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
        {showScrollTopButton && (
            <div className={styles.scrollArea}>
                <div onClick={scrollTop} className={`${styles.arrowUp}`}>
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    up
                </div>
            </div>
        )}

    </>

  );
};

export default ScrollToTop;