export interface LocalizedText {
  pt: string
  en: string
}

export interface LocalizedList {
  pt: string[]
  en: string[]
}

export interface Project {
  id: number
  title: LocalizedText
  tag: string
  type: 'API' | 'CLI' | 'WEB' | 'LIB' | 'TOOL' | 'OTHER'
  description: LocalizedList
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

export type Theme = 'dark' | 'light'
export type Lang = 'pt' | 'en'
