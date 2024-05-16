import { useState } from "react";
import styles from '@/components/Footer/Footer.module.css';
import Image from "next/image";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Sucralosee/local-harvest-marketing", "_blank");
  };

  const handleFigma = () => {
    window.open("https://www.figma.com/proto/EueSKezqQqyA6V9YG3tpeN/Local-Harvest?page-id=3914%3A4148&node-id=3914-4791&viewport=44%2C301%2C0.13&t=5zffOEaoiVuzb5FT-1&scaling=scale-down&starting-point-node-id=3914%3A4791&show-proto-sidebar=1", "_blank");
  };

  const handleFSWD = () => {
    window.open("https://local-harvest-app.onrender.com/", "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.logoGithub}>
        <div className={styles.logoContainer} onClick={handleFSWD}>
          <Image src={"/images/LogoWithWordmark.svg"} alt="Local Harvest Marketing Logo" width={400} height={100} />
          <p>© 2024 LocalHarvest. All Rights Reserved.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksLeft}>
            <div className={styles.githubLink}>
              <button onClick={handleGithubClick} className={styles.githubButton}>
                <Image src={"/images/GitHubIconTransparent.png"} alt="GitHub Icon" width={40} height={40} />
                Visit our GitHub
              </button>
            </div>
            <div className={styles.githubLink}>
              <button onClick={handleFigma} className={styles.githubButton}>
                <Image src={"/images/figma_logo.svg"} alt="GitHub Icon" width={40} height={40} />
                Our Figma
              </button>
            </div>
          </div>
          <div className={styles.footerLinksRight}>
            <h5 className={styles.h5Footer}>BCIT IDSP Project</h5>
            <p>Spring Semester 2024</p>
            <h5 className={styles.h5Footer}>Project 1 | MDIA 2003</h5>
          </div>

        </div>
        
      </div>  
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <p>Your message has been sent!</p>
          </div>
        </div>
      )}
    </footer>
  );
}
