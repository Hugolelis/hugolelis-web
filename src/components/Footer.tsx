import styles from './Footer.module.css'
import { useApp } from '../context/AppContext'

export function Footer() {
  const { t } = useApp()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026 Hugo de Lelis</span>
        <span className={styles.separator} aria-hidden="true">·</span>
        <span>{t.footer.role}</span>
      </div>
    </footer>
  )
}
