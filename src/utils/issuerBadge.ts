const STOPWORDS = new Set(['of', 'and', 'the', 'for', 'de', 'da', 'do'])

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
}

export function getIssuerBadge(issuer: string): IssuerBadge {
  const org = primaryOrg(issuer)
  return { org, initials: getInitials(org) }
}
