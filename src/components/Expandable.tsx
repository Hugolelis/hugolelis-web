import type { ReactNode } from 'react'
import styles from './Expandable.module.css'

interface ExpandableProps {
  expanded: boolean
  children: ReactNode
}

export function Expandable({ expanded, children }: ExpandableProps) {
  return (
    <div className={`${styles.wrap} ${expanded ? styles.expanded : ''}`} inert={!expanded}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
