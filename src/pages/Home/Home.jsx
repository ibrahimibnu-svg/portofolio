import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const text = 'Frontend Developer & Student';
    const el = typewriterRef.current;
    if (!el) return;

    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (!el) return;
      if (!isDeleting) {
        el.textContent = text.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === text.length) {
          timeout = setTimeout(() => { isDeleting = true; type(); }, 2000);
          return;
        }
        timeout = setTimeout(type, 80);
      } else {
        el.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          timeout = setTimeout(type, 500);
          return;
        }
        timeout = setTimeout(type, 40);
      }
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.gridBackground}></div>
      <div className={styles.heroContent}>
        <div className={styles.leftColumn}>
          <span className={styles.label}>HI, I&apos;M</span>
          <h1 className={styles.name}>IBRAHIM IBNU ABBAS</h1>
          <div className={styles.typingContainer}>
            <span ref={typewriterRef} className={styles.typingText}></span>
            <span className={styles.cursor}></span>
          </div>
          <p className={styles.description}>
            A passionate frontend developer who loves turning ideas into
            interactive web experiences. Focused on building clean,
            modern, and user-friendly interfaces.
          </p>
          <div className={styles.ctaGroup}>
            <Link to="/project" className={styles.btnPrimary}>
              View Projects
            </Link>
            <Link to="/contact" className={styles.btnSecondary}>
              Contact Me
            </Link>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.avatarCard}>
            <span className={styles.avatarText}>IB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
