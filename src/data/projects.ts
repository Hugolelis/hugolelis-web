import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: { pt: 'Generator', en: 'Generator' },
    tag: 'Node.js · TypeScript · PostgreSQL',
    type: 'API',
    description: {
      pt: 'API REST robusta com geração de CPF, encurtador de URL, gerador de senhas, UUID, serviços de data e números sorteados.',
      en: 'Robust REST API offering CPF generation, URL shortener, password generator, UUID, date services and sorted numbers.',
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/Generator-API',
    image: '/projects/generator-api.png',
  },
  {
    id: 2,
    title: { pt: 'YT Downloader', en: 'YT Downloader' },
    tag: 'Python · yt-dlp · Typer',
    type: 'CLI',
    description: {
      pt: 'Ferramenta de linha de comando para baixar vídeos e áudios do YouTube direto do terminal, com seleção de qualidade e extração em MP3.',
      en: 'CLI tool to download YouTube videos and audio directly from the terminal, with quality selection and MP3 extraction.',
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/YT_Downloader-CLI',
    image: '/projects/yt-downloader.png',
  },
  {
    id: 3,
    title: { pt: 'Lexio', en: 'Lexio' },
    tag: 'Python · Typer · pymupdf · rich',
    type: 'CLI',
    description: {
      pt: 'CLI para análise de contexto textual, com extração de termos, frequência léxica e estatísticas de corpus.',
      en: 'CLI for textual context analysis, featuring term extraction, lexical frequency, and corpus statistics.',
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/Lexio-CLI',
    image: '/projects/lexio.png',
  },
]
