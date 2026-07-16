import { skills } from '../data'
import styles from './TechMarquee.module.css'

const catLabel: Record<string, string> = {
  backend: 'Backend',
  infra: 'Infra',
  tools: 'Tools',
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
  return (
    <div className={styles.wrapper}>
      {Object.entries(groups).map(([cat, items]) => (
        <div key={cat} className={styles.group} data-parallax data-parallax-speed="0.04">
          <div className={styles.header} style={{ color: catColors[cat], borderBottomColor: catColors[cat] }}>
            {catLabel[cat]}
          </div>
          <div className={styles.body}>
            {items.map((s) => (
              <span key={s.name} className={styles.tag}>{s.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
