import { useState } from 'react'
import { useApp } from '../context/AppContext'
import styles from './Blog.module.css'

function formatDate(dateStr: string, lang: 'pt' | 'en') {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export function Blog() {
  const { lang, theme, toggleTheme, toggleLang, t } = useApp()
  const [expanded, setExpanded] = useState<number | null>(null)
  const toggle = (id: number) => setExpanded(prev => prev === id ? null : id)

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>{'<Hugo />'}</a>
        <div className={styles.controls}>
          <button className={styles.toggle} onClick={toggleLang}>{lang === 'pt' ? 'EN' : 'PT'}</button>
          <button className={styles.toggle} onClick={toggleTheme}>{theme === 'dark' ? '○' : '●'}</button>
        </div>
      </nav>

      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.label}>{t.blog.label}</p>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.sub}>{t.blog.sub}</p>
        </header>

        <div className={styles.feed}>
          {t.blog.posts.length === 0 && <p className={styles.empty}>{t.blog.empty}</p>}

          {t.blog.posts.map(post => {
            const isOpen = expanded === post.id
            return (
              <article key={post.id} className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
                <button className={styles.cardTop} onClick={() => toggle(post.id)}>
                  <div className={styles.meta}>
                    <time className={styles.date}>{formatDate(post.date, lang)}</time>
                    <div className={styles.tags}>
                      {post.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>↓</span>
                </button>

                {isOpen && (
                  <div className={styles.body}>
                    <div className={styles.content}>
                      {post.content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    {post.linkedinUrl && (
                      <a href={post.linkedinUrl} target="_blank" rel="noreferrer" className={styles.linkedinBtn}>
                        {t.blog.linkedin}
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </main>
    </div>
  )
}