import { useRef, useState } from 'react'
import type { Project } from '../types'
import type { Lang } from '../types'
import type { Translations } from '../i18n'
import { ProjectModal } from './ProjectModal'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  lang: Lang
  translations: Translations['projects']
}

const TYPE_STYLE: Record<Project['type'], { dot: string; preview: string; label: string }> = {
  API:   { dot: styles.dotApi,   preview: styles.previewDefault, label: 'API' },
  CLI:   { dot: styles.dotCli,   preview: styles.previewDefault, label: 'CLI' },
  WEB:   { dot: styles.dotWeb,   preview: styles.previewDefault, label: 'WEB' },
  LIB:   { dot: styles.dotLib,   preview: styles.previewDefault, label: 'LIB' },
  TOOL:  { dot: styles.dotTool,  preview: styles.previewDefault, label: 'TOOL' },
  OTHER: { dot: styles.dotOther, preview: styles.previewDefault, label: 'OTHER' },
}

export function ProjectCard({ project, lang, translations }: Props) {
  const title = project.title[lang]
  const summary = project.summary[lang]
  const t = TYPE_STYLE[project.type] ?? TYPE_STYLE.OTHER
  const [showDetails, setShowDetails] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    cardRef.current!.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    cardRef.current!.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <article ref={cardRef} className={styles.card} onMouseMove={handleMouseMove}>
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={`${styles.dot} ${t.dot}`} />
          <span className={styles.typeLabel}>{t.label}</span>
          <span className={styles.sep}>/</span>
          <span className={styles.tag}>{project.tag}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        {project.image ? (
          <div className={styles.media}>
            <img src={project.image} alt="" className={styles.mediaImg} />
          </div>
        ) : (
          <div className={`${styles.media} ${t.preview}`} aria-hidden="true">
            <span className={styles.typeBig}>{t.label}</span>
          </div>
        )}
        <p className={styles.summary}>{summary}</p>
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.btn} onClick={() => setShowDetails(true)}>
          {translations.viewDetails}
          <span className={styles.btnArrow} aria-hidden="true">→</span>
        </button>
      </div>
      {showDetails && (
        <ProjectModal
          project={project}
          lang={lang}
          translations={translations}
          onClose={() => setShowDetails(false)}
        />
      )}
    </article>
  )
}
