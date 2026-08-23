export interface Project {
  id: number
  titleKey: string
  tag: string
  type: 'API' | 'CLI' | 'WEB' | 'LIB' | 'OTHER'
  descriptionKey: string
  year: string
  link?: string
  deploy?: string
  image?: string
}

export type Theme = 'dark' | 'light'
export type Lang = 'pt' | 'en'
