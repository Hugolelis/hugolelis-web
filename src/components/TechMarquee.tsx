import { skills } from '../data'

export function TechMarquee() {
  const items = [...skills, ...skills]
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '1.25rem 0',
        borderBlock: '1px solid var(--border)',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'fit-content',
            paddingInline: '2rem',
          }}
      >
        {items.map((s, i) => (
          <span
            key={`${s.name}-${i}`}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {s.name}
            <span style={{ color: 'var(--accent-term)', marginLeft: '2rem', opacity: 0.3 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
