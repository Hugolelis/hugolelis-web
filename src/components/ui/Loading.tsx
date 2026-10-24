import styles from './Loading.module.css'

interface LoadingProps {
  fullScreen?: boolean
}

export function Loading({ fullScreen = false }: LoadingProps) {
  return (
    <div className={`${styles.loading} ${fullScreen ? styles.fullScreen : ''}`} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span>loading...</span>
    </div>
  )
}
