import styles from './Pdfmodal.module.css'

interface PdfModalProps {
    name: string
    issuer: string
    file: string
    onClose: () => void
}

export function Pdfmodal({ name, issuer, file, onClose }: PdfModalProps) {
    return (
        <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
            <div className={styles.modalInfo}>
                <span className={styles.modalName}>{name}</span>
                <span className={styles.modalIssuer}>{issuer}</span>
            </div>
            <div className={styles.modalActions}>
                <a
                href={file}
                download
                className={styles.downloadBtn}
                title="Download"
                >
                ↓
                </a>
                <button
                className={styles.closeBtn}
                onClick={onClose}
                title="Fechar"
                >
                ✕
                </button>
            </div>
            </div>
            <embed
            src={file}
            className={styles.viewer}
            title={name}
            />
        </div>
        </div>
    )
}