import { useApp } from '../context/AppContext'
import styles from './About.module.css'

const philosophy = ['Manutenibilidade', 'Legibilidade', 'Testabilidade', 'Segurança']
const philosophyEn = ['Maintainability', 'Readability', 'Testability', 'Security']

const interests = [
  'Engenharia de Software', 'Algoritmos', 'Estruturas de Dados',
  'Arquitetura de Sistemas', 'Performance', 'Backend', 'Visão Computacional', 'IA',
]
const interestsEn = [
  'Software Engineering', 'Algorithms', 'Data Structures',
  'System Architecture', 'Performance', 'Backend', 'Computer Vision', 'AI',
]

export function About() {
  const { t, lang } = useApp()
  const tags = lang === 'pt' ? philosophy : philosophyEn
  const interestTags = lang === 'pt' ? interests : interestsEn

  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <p className={styles.eyebrow}>{lang === 'pt' ? 'Filosofia de desenvolvimento' : 'Development philosophy'}</p>
        <h2 className={`section-title ${styles.title}`}>{t.about.title}</h2>

        <div className={styles.philosophy}>
          {tags.map(tag => (
            <span key={tag} className={styles.pill}>{tag}</span>
          ))}
        </div>

        <div className={styles.body}>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <p className={styles.interestsLabel}>{lang === 'pt' ? 'Áreas de interesse' : 'Areas of interest'}</p>
        <div className={styles.interests}>
          {interestTags.map(tag => (
            <span key={tag} className={styles.interest}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
