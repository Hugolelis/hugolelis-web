import { Nav, Reveal } from '../components'
import { useApp } from '../context/AppContext'
import styles from './LinkedInPage.module.css'

const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/hugolelis/'

const POSTS = [
  {
    number: '01',
    titlePt: 'Idempotência: quando repetir uma operação não muda o resultado',
    titleEn: 'Idempotency: when repeating an operation does not change the result',
    url: 'https://lnkd.in/p/dQ-_3B5j',
  },
  {
    number: '02',
    titlePt: 'Você já abriu um JSON com 300 linhas e tentou entender?',
    titleEn: 'Have you ever opened a 300-line JSON and tried to understand it?',
    url: 'https://lnkd.in/p/dXtymvrj',
  },
  {
    number: '03',
    titlePt: 'Você organiza seu projeto por responsabilidade ou por funcionalidade?',
    titleEn: 'Do you organize your project by responsibility or by feature?',
    url: 'https://lnkd.in/p/dVrnHr_E',
  },
]

export function LinkedInPage() {
  const { lang } = useApp()

  return (
    <div className={styles.page}>
      <Nav />
      <main id="main-content" className={styles.main}>
        <Reveal>
          <header className={styles.header}>
            <span className={styles.count}>{lang === 'pt' ? '3 publicacoes' : '3 posts'}</span>
            <h1 className={styles.title}>LinkedIn</h1>
            <p className={styles.intro}>
              {lang === 'pt'
                ? 'Acompanhe minhas ideias, aprendizados e projetos.'
                : 'Follow my ideas, learnings, and projects.'}
            </p>
          </header>
        </Reveal>

        <div className={styles.list}>
          {POSTS.map(post => (
            <a
              key={post.number}
              className={styles.post}
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.number}>{post.number}</span>
              <span className={styles.postTitle}>
                {lang === 'pt' ? post.titlePt : post.titleEn}
              </span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className={styles.profileCta}>
          <span>
            {lang === 'pt' ? 'Quer ver meu perfil?' : 'Want to see my profile?'}
          </span>
          <a href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">
            {lang === 'pt' ? 'Acessar LinkedIn' : 'Visit LinkedIn'} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>
    </div>
  )
}
