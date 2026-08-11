import { skills } from '../data'
import { useApp } from '../context/AppContext'
import styles from './TechMarquee.module.css'

const catI18nKey: Record<string, string> = {
  backend: 'cat_backend',
  infra: 'cat_infra',
  tools: 'cat_tools',
}

const catColors: Record<string, string> = {
  backend: 'var(--accent-term)',
  infra: 'var(--accent-blue)',
  tools: 'var(--accent)',
}

const groups = skills.reduce<Record<string, typeof skills>>((acc, s) => {
  ;(acc[s.category] ??= []).push(s)
  return acc
}, {})

export function TechMarquee() {
  const { t } = useApp()
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t.about.skills_title}</h3>
      <div className={styles.board}>
        {Object.entries(groups).map(([cat, items]) => (
          <div key={cat} className={styles.group}>
            <div className={styles.header} style={{ color: catColors[cat] }}>
              <span className={styles.headerBar} style={{ background: catColors[cat] }} />
              <span className={styles.headerLabel}>
                {t.about[catI18nKey[cat] as keyof typeof t.about] as string}
              </span>
              <span className={styles.headerCount}>{items.length}</span>
            </div>
            <div className={styles.body}>
              {items.map((s) => (
                <span key={s.name} className={styles.tag}>
                  <span className={styles.tagDot} style={{ background: catColors[cat] }} />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
