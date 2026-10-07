import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 4,
    title: { pt: 'QrCode', en: 'QrCode' },
    tag: 'C++17 · ISO/IEC 18004 · Zero Deps',
    type: 'TOOL',
    description: {
      pt: [
        'Implementa a codificação, construção da matriz e padrões de função direto do ISO/IEC 18004',
        'Renderização em terminal e exportação para PBM/PNG, usando apenas C++17 puro',
      ],
      en: [
        'Implements the encoding, matrix construction, and function patterns straight from ISO/IEC 18004',
        'Terminal rendering and PBM/PNG export, using pure C++17 with zero external dependencies',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/qrcode-lib',
    image: '/projects/qrcode.png',
  },
  {
    id: 5,
    title: { pt: 'LeetCodes Study', en: 'LeetCodes Study' },
    tag: 'Python · DSA · Zero Deps',
    type: 'STUDY',
    description: {
      pt: [
        'Resoluções pessoais de problemas do LeetCode em Python, com foco em prática deliberada de padrões como two pointers, sliding window, hashing, DP e grafos',
        'Cada problema isolado em seu próprio arquivo, testável individualmente, usando apenas a biblioteca padrão do Python',
      ],
      en: [
        'Personal LeetCode solutions in Python, focused on deliberate practice of patterns like two pointers, sliding window, hashing, DP, and graph traversal',
        'Each problem lives in its own file, runnable in isolation, with zero external dependencies — pure Python standard library',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/leetcodes-study',
  },
  {
    id: 1,
    title: { pt: 'Generator', en: 'Generator' },
    tag: 'Fastify · TypeScript · Prisma',
    type: 'API',
    description: {
      pt: [
        'Geração de CPF, UUID, senha e números sorteados, além de encurtador de URL com PostgreSQL/Prisma',
        'Fastify + TypeScript com rate limiting, CORS e documentação Swagger interativa em /docs',
      ],
      en: [
        'CPF, UUID, password, and sorted-number generation, plus a URL shortener backed by PostgreSQL/Prisma',
        'Fastify + TypeScript with rate limiting, CORS, and interactive Swagger docs at /docs',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/generator-api',
  },
  {
    id: 3,
    title: { pt: 'Lexio', en: 'Lexio' },
    tag: 'Python · Typer · pymupdf · rich',
    type: 'CLI',
    description: {
      pt: [
        'Riqueza vocabular, frequência de palavras e métricas de legibilidade em .txt, .pdf e .docx',
        'Filtro com 300+ stopwords em PT/EN e saída formatada com Rich, construído com Typer',
      ],
      en: [
        'Vocabulary richness, word frequency, and readability metrics across .txt, .pdf, and .docx',
        '300+ built-in PT/EN stopword filtering and Rich-formatted output, built with Typer',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/lexio-cli',
    image: '/projects/lexio.png',
  },
  {
    id: 2,
    title: { pt: 'YT Downloader', en: 'YT Downloader' },
    tag: 'Python · yt-dlp · Typer · rich',
    type: 'CLI',
    description: {
      pt: [
        'Download de vídeo em MP4 (720p/1080p/1440p) ou extração de áudio em MP3 via FFmpeg',
        'Proteção contra duplicados e validação de URL, construído com yt-dlp, Typer e rich',
      ],
      en: [
        'MP4 video download (720p/1080p/1440p) or MP3 audio extraction via FFmpeg',
        'Duplicate-download protection and URL validation, built with yt-dlp, Typer, and rich',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/yt_downloader-cli',
    image: '/projects/yt-downloader.png',
  },
]
