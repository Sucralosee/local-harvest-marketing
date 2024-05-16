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

  return (
    <footer className={styles.footer}>
      <div className={styles.logoGithub}>
        <div className={styles.logoContainer}>
          <Image src={"/images/LogoWithWordmark.svg"} alt="Local Harvest Marketing Logo" width={400} height={400} />
        </div>
        <div className={styles.githubLink}>
          <button onClick={handleGithubClick} className={styles.githubButton}>
            <Image src={"/images/GitHubIconTransparent.png"} alt="GitHub Icon" width={40} height={40} />
            Visit our GitHub
          </button>
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
