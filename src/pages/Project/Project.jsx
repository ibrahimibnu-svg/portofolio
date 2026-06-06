import { itProjects, englishProjects, tahfidzProjects } from '../../data/projects';
import styles from './Project.module.css';

const Project = () => {
  return (
    <section className={styles.projectPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>My Projects</h1>

        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Project IT</h2>
          <div className={styles.grid3}>
            {itProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.techBadges}>
                    {project.tech.map((tech, index) => (
                      <span key={index} className={styles.badge}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className={styles.viewBtn}>
                    Lihat Hasil →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Project B. English</h2>
          <div className={styles.grid3}>
            {englishProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.techBadges}>
                    <span className={styles.badge}>{project.type}</span>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className={styles.viewBtn}>
                    Lihat Hasil →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Project Tahfidz</h2>
          <div className={styles.grid2}>
            {tahfidzProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.techBadges}>
                    <span className={styles.badge}>{project.surah}</span>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className={styles.viewBtn}>
                    Lihat Hasil →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
