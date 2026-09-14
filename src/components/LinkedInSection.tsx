import { Fragment } from 'react'
import { useApp } from '../context/AppContext'
import { posts } from '../data'
import { useShowMore } from '../hooks/useShowMore'
import { Expandable } from './Expandable'
import styles from './LinkedInSection.module.css'

const INITIAL_COUNT = 4

export function LinkedInSection() {
  const { lang } = useApp()
  const postsShown = useShowMore(posts, INITIAL_COUNT)

  return (
    <section id="linkedin" className={styles.linkedin}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.count}>{lang === 'pt' ? `${posts.length} publicações` : `${posts.length} posts`}</span>
          <h2 className={`section-title ${styles.sectionTitle}`}>LinkedIn</h2>
        </div>
        <div className={styles.list}>
          {posts.map((post, i) => {
            const isInitial = i < INITIAL_COUNT
            const item = (
              <a
                className={styles.post}
                href={post.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.number}>{post.number}</span>
                <span className={styles.postTitle}>{post.title[lang]}</span>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            )
            return isInitial ? (
              <Fragment key={post.number}>{item}</Fragment>
            ) : (
              <Expandable key={post.number} expanded={postsShown.expanded}>{item}</Expandable>
            )
          })}
        </div>
        {(postsShown.remaining > 0 || postsShown.canShowLess) && (
          <div className={styles.showMore}>
            {postsShown.remaining > 0 ? (
              <button className="btn btn--ghost" onClick={postsShown.showMore}>
                {lang === 'pt' ? `Ver mais (${postsShown.remaining})` : `Show more (${postsShown.remaining})`}
              </button>
            ) : (
              <button className="btn btn--ghost" onClick={postsShown.showLess}>
                {lang === 'pt' ? 'Ver menos' : 'Show less'}
              </button>
            )}
          </div>
        )}

        <div className={styles.profileCta}>
          <span>{lang === 'pt' ? 'Quer ver meu perfil?' : 'Want to see my profile?'}</span>
          <a href="https://www.linkedin.com/in/hugolelis/" target="_blank" rel="noreferrer">
            {lang === 'pt' ? 'Acessar LinkedIn' : 'Visit LinkedIn'} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
