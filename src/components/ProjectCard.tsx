import { useState } from 'react'
import type { Project } from '../types'
import type { Translations } from '../i18n'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  translations: Translations['projects']
}

const TYPE_STYLE: Record<Project['type'], { dot: string; label: string }> = {
  API:   { dot: styles.dotApi,   label: 'API' },
  CLI:   { dot: styles.dotCli,   label: 'CLI' },
  WEB:   { dot: styles.dotWeb,   label: 'WEB' },
  LIB:   { dot: styles.dotLib,   label: 'LIB' },
  OTHER: { dot: styles.dotOther, label: '' },
}

export function ProjectCard({ project, translations }: Props) {
  const [hovered, setHovered] = useState(false)

  const title = translations[project.titleKey as keyof typeof translations]
  const description = translations[project.descriptionKey as keyof typeof translations]
  const t = TYPE_STYLE[project.type] ?? TYPE_STYLE.OTHER

  return (
    <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <article
        className={`${styles.card} ${hovered ? styles.active : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.top}>
          <span className={`${styles.dot} ${t.dot}`} />
          <span className={styles.typeLabel}>{t.label}</span>
          <span className={styles.sep}>/</span>
          <span className={styles.tag}>{project.tag}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.arrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </article>
    </a>
  )
}
