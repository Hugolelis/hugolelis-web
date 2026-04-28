import { useState } from 'react'
import type { Project } from '../types'
import type { Translations } from '../i18n'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  translations: Translations['projects']
}

export function ProjectCard({ project, translations }: Props) {
  const [hovered, setHovered] = useState(false)

  const title = translations[project.titleKey as keyof typeof translations]
  const description = translations[project.descriptionKey as keyof typeof translations]

  return (
    <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <article
        className={`${styles.card} ${hovered ? styles.active : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.top}>
          <span className={styles.tag}>{project.tag}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.arrow}>→</span>
      </article>
    </a>
  )
}
