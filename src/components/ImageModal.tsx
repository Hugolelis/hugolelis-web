import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './ImageModal.module.css'

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <button className={styles.closeBtn} onClick={onClose} title="Fechar">
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  )
}
