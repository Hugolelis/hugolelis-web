import { Nav, Reveal } from '../components'
import { useApp } from '../context/AppContext'
import { posts } from '../data'
import styles from './LinkedInPage.module.css'

const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/hugolelis/'

export function LinkedInPage() {
  const { lang } = useApp()

  return (
    <div className={styles.page}>
      <Nav />
      <main id="main-content" className={styles.main}>
        <Reveal>
          <header className={styles.header}>
              <span className={styles.count}>{lang === 'pt' ? `${posts.length} publicacoes` : `${posts.length} posts`}</span>
            <h1 className={styles.title}>LinkedIn</h1>
            <p className={styles.intro}>
              {lang === 'pt'
                ? 'Acompanhe minhas ideias, aprendizados e projetos.'
                : 'Follow my ideas, learnings, and projects.'}
            </p>
          </header>
        </Reveal>

        <div className={styles.list}>
          {posts.map(post => (
            <a
              key={post.number}
              className={styles.post}
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.number}>{post.number}</span>
              <span className={styles.postTitle}>
                {post.title[lang]}
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
