import type { Project, Skill } from '../types'

export const projects: Project[] = [
  { id: 1, titleKey: 'p1_title', tag: 'Node.js · TypeScript · PostgreSQL', type: 'API', descriptionKey: 'p1_desc', year: '2026', link: 'https://github.com/Hugolelis/Generator-API' },
  { id: 2, titleKey: 'p2_title', tag: 'Python · yt-dlp · Typer', type: 'CLI', descriptionKey: 'p2_desc', year: '2026', link: 'https://github.com/Hugolelis/YT_Downloader-CLI' },
  { id: 3, titleKey: 'p3_title', tag: 'Python · Typer · pymupdf · rich ', type: 'CLI', descriptionKey: 'p3_desc', year: '2026', link: 'https://github.com/Hugolelis/Lexio-CLI' },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'backend' },
  { name: 'Node', category: 'backend' },
  { name: 'C++', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Docker', category: 'infra' },
  { name: 'Git', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'REST', category: 'tools' },
]
