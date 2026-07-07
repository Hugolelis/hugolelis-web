import { useState, type CSSProperties } from 'react'
import { useApp } from '../context/AppContext'
import { Nav, Reveal } from '../components'
import styles from './Blog.module.css'

const TAG_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  React: { bg: 'rgba(97, 218, 251, 0.1)', color: '#61dafb', border: 'rgba(97, 218, 251, 0.3)' },
  TypeScript: { bg: 'rgba(49, 120, 198, 0.1)', color: '#3178c6', border: 'rgba(49, 120, 198, 0.3)' },
  Vercel: { bg: 'rgba(255, 255, 255, 0.08)', color: '#ccc', border: 'rgba(255, 255, 255, 0.15)' },
  Arquitetura: { bg: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', border: 'rgba(251, 191, 36, 0.3)' },
  'Boas Práticas': { bg: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: 'rgba(52, 211, 153, 0.3)' },
  Architecture: { bg: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', border: 'rgba(251, 191, 36, 0.3)' },
  'Best Practices': { bg: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: 'rgba(52, 211, 153, 0.3)' },
  Ferramentas: { bg: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: 'rgba(167, 139, 250, 0.3)' },
  Tools: { bg: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: 'rgba(167, 139, 250, 0.3)' },
  JSON: { bg: 'rgba(248, 194, 66, 0.1)', color: '#f8c242', border: 'rgba(248, 194, 66, 0.3)' },
  'Dev Tips': { bg: 'rgba(248, 113, 113, 0.1)', color: '#f87171', border: 'rgba(248, 113, 113, 0.3)' },
}

function formatDate(dateStr: string, lang: 'pt' | 'en') {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export function Blog() {
  const { lang, t } = useApp()
  const [expanded, setExpanded] = useState<number | null>(null)
  const toggle = (id: number) => setExpanded(prev => prev === id ? null : id)

  return (
    <div className={styles.page}>
      <Nav />

        <main className={styles.main}>
          <Reveal>
            <header className={styles.header}>
          <div className={styles.headerAccent}>
            <span className={styles.headerLine} />
            <p className={styles.label}>{t.blog.label}</p>
          </div>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.sub}>{t.blog.sub}</p>
          <div className={styles.headerTerminal}>
            {'// total posts: ' + t.blog.posts.length}<br />
            {'// lang: ' + lang.toUpperCase()}
          </div>
        </header>
          </Reveal>

        <div className={styles.feed}>
          {t.blog.posts.length === 0 && <p className={styles.empty}>{t.blog.empty}</p>}

          {t.blog.posts.map((post, i) => {
            const isOpen = expanded === post.id
            return (
              <article key={post.id} data-parallax data-parallax-speed="0.05" className={styles.card} style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
                <button
                  className={styles.cardTop}
                  onClick={() => toggle(post.id)}
                  aria-expanded={isOpen}
                  aria-controls={`post-content-${post.id}`}
                  aria-label={isOpen
                    ? `${post.title} (${lang === 'pt' ? 'recolher' : 'collapse'})`
                    : `${post.title} (${lang === 'pt' ? 'expandir' : 'expand'})`}
                >
                  <div className={styles.meta}>
                    <time className={styles.date}>{formatDate(post.date, lang)}</time>
                    <div className={styles.tags}>
                      {post.tags.map(tag => {
                        const colors = TAG_COLORS[tag]
                        return (
                          <span
                            key={tag}
                            className={styles.tag}
                            style={colors ? {
                              '--tag-color': colors.color,
                              background: colors.bg,
                              color: colors.color,
                              borderColor: colors.border,
                            } as CSSProperties : undefined}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>↓</span>
                </button>

                {isOpen && (
                  <div id={`post-content-${post.id}`} className={styles.body}>
                    <div className={styles.content}>
                      {post.content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    {post.linkedinUrl && (
                      <a href={post.linkedinUrl} target="_blank" rel="noreferrer" className={styles.linkedinBtn}>
                        <span className={styles.linkedinIcon}>in</span>
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
