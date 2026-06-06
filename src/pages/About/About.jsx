import { useEffect, useRef, useState } from 'react';
import skills from '../../data/skills';
import styles from './About.module.css';
import IbrahimPhoto from '../../assets/ibrahim ibnu abbas.jpeg';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleSkills(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>About Me</h1>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Profil</h2>
          <div className={styles.profileCard}>
            <img
              src={IbrahimPhoto}
              alt="Foto Profil"
              className={styles.profileImg}
            />
            <div className={styles.profileInfo}>
              <h3 className={styles.profileName}>Ibrahim Ibnu Abbas</h3>
              <p className={styles.profileDesc}>
                Siswa SMA HSI Boarding School yang passionate dalam dunia programming dan pengembangan teknologi. Selalu antusias mencoba hal-hal baru.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Pendidikan</h2>
          <div className={styles.educationCard}>
            <div className={styles.eduIcon}>🎓</div>
            <div className={styles.eduInfo}>
              <h3 className={styles.eduSchool}>SMA HSI Boarding School</h3>
              <p className={styles.eduClass}>Kelas 11</p>
              <p className={styles.eduYear}>Tahun 2025-2026</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Hobi</h2>
          <div className={styles.hobiGrid}>
            <div className={styles.hobiCard}>🍳 Memasak</div>
            <div className={styles.hobiCard}>🏃 Jogging</div>
            <div className={styles.hobiCard}>🎯 Memanah</div>
          </div>
        </div>

        <div className={styles.section} ref={skillsRef}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      '--skill-level': `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                      width: visibleSkills ? `${skill.level}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
