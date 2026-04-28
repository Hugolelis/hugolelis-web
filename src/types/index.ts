export interface Project {
  id: number
  titleKey: string
  tag: string
  descriptionKey: string
  year: string
  link?: string
}

export interface Skill {
  name: string
  category: 'backend' | 'infra' | 'tools'
}

export type Theme = 'dark' | 'light'
export type Lang = 'pt' | 'en'
