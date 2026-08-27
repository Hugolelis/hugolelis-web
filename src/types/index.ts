export interface LocalizedText {
  pt: string
  en: string
}

export interface Project {
  id: number
  title: LocalizedText
  tag: string
  type: 'API' | 'CLI' | 'WEB' | 'LIB' | 'OTHER'
  description: LocalizedText
  year: string
  link?: string
  deploy?: string
  image?: string
}

export interface Certificate {
  name: string
  issuer: string
  year: string
  file: string
}

export interface TimelineEntry {
  year: string
  type: LocalizedText
  role: LocalizedText
  place: LocalizedText
  description: LocalizedText
}

export interface LinkedInPost {
  number: string
  title: LocalizedText
  url: string
}

export type Theme = 'dark' | 'light'
export type Lang = 'pt' | 'en'
