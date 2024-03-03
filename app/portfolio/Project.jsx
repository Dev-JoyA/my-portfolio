import React from 'react'
import styles from "../page.module.css"

const Project = ({ project }) => {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <h2 className={styles.h2}>{project.name}</h2>
          <ul className={styles.ul}>
            {project.description.map((point, index) => (
              <li className={styles.li} key={index}>{point}</li>
            ))}
          </ul>
          <p><a href={project.githubLink}>View on GitHub</a></p>
        </div>
      </div>
    );
  };

export default Project