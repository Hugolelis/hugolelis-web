import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 4,
    title: { pt: 'QrCode', en: 'QrCode' },
    tag: 'C++17 · ISO/IEC 18004 · Zero Deps',
    type: 'TOOL',
    summary: {
      pt: 'Gerador de QR Code em C++ implementado do zero, sem bibliotecas externas.',
      en: 'A QR code generator built from scratch in C++, with no external libraries.',
    },
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
    id: 1,
    title: { pt: 'Generator', en: 'Generator' },
    tag: 'Fastify · TypeScript · Prisma',
    type: 'API',
    summary: {
      pt: 'API REST em Fastify para gerar CPF, UUID, senhas e mais, com docs Swagger.',
      en: 'Fastify REST API for generating CPF, UUID, passwords, and more, with Swagger docs.',
    },
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
    summary: {
      pt: 'CLI em Python para análise lexiométrica de textos, PDFs e DOCX.',
      en: 'Python CLI for lexiometric analysis of text, PDF, and DOCX files.',
    },
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
    summary: {
      pt: 'CLI para baixar vídeos e áudio do YouTube com yt-dlp.',
      en: 'CLI to download YouTube videos and audio with yt-dlp.',
    },
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
