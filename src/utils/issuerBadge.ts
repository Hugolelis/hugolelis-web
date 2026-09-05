export type BadgeColor = 'blue' | 'purple' | 'green' | 'amber'

const PALETTE: BadgeColor[] = ['blue', 'purple', 'green', 'amber']

const KNOWN_COLORS: Record<string, BadgeColor> = {
  'IBM': 'blue',
  'Google': 'green',
  'Udemy': 'amber',
  'University of Illinois': 'purple',
}

const STOPWORDS = new Set(['of', 'and', 'the', 'for', 'de', 'da', 'do'])

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function primaryOrg(issuer: string): string {
  const [first] = issuer.split('·')
  return first.trim()
}

function getInitials(org: string): string {
  const words = org.split(/\s+/).filter(word => !STOPWORDS.has(word.toLowerCase()))
  if (words.length <= 1) {
    const letters = (words[0] ?? org).replace(/[^A-Za-z]/g, '')
    return letters.length <= 3 ? letters.toUpperCase() : letters.slice(0, 2).toUpperCase()
  }
  return words.slice(0, 2).map(word => word[0]).join('').toUpperCase()
}

export interface IssuerBadge {
  org: string
  initials: string
  color: BadgeColor
}

export function getIssuerBadge(issuer: string): IssuerBadge {
  const org = primaryOrg(issuer)
  const color = KNOWN_COLORS[org] ?? PALETTE[hashString(org) % PALETTE.length]
  return { org, initials: getInitials(org), color }
}
