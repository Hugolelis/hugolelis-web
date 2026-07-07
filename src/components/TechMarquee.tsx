import { skills } from '../data'

const catColors: Record<string, string> = {
  backend: 'var(--accent-term)',
  infra: 'var(--accent-blue)',
  tools: 'var(--muted)',
}

export function TechMarquee() {
  const items = [...skills, ...skills, ...skills]
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '1.5rem 0',
        borderBlock: '1px solid var(--border)',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '0',
          width: 'fit-content',
          paddingInline: '2rem',
        }}
      >
        {items.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              paddingRight: '2.5rem',
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: catColors[s.category] ?? 'var(--muted)',
                flexShrink: 0,
              }}
            />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  )
}
