import type { TimelineEntry } from '../types'

// Ordered newest -> oldest.
export const timeline: TimelineEntry[] = [
  {
    id: 'metta-innovations',
    role: { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
    org: { pt: 'Metta Innovations · Estágio', en: 'Metta Innovations · Internship' },
    period: { pt: 'Jul 2025', en: 'Jul 2025' },
    current: true,
    description: {
      pt: [
        'Estágio com foco em Visão Computacional e Inteligência Artificial, desenvolvendo backend em C++ e Python',
        'Aplicações com Qt/QML, bancos MySQL/PostgreSQL, containers Docker e testes unitários em squad SCRUMBAN',
      ],
      en: [
        'Computer Vision and AI-focused internship, building backend services in C++ and Python',
        'Qt/QML applications, MySQL/PostgreSQL, Docker containers, and unit testing within a SCRUMBAN team',
      ],
    },
  },
  {
    id: 'freelancer',
    role: { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
    org: { pt: 'Freelancer · Autônomo', en: 'Freelancer · Self-employed' },
    period: { pt: 'Set 2024', en: 'Sep 2024' },
    current: true,
    description: {
      pt: [
        'Desenvolvimento backend com foco em arquiteturas robustas e escaláveis para aplicações web',
        'Modelagem de APIs, integração de sistemas e ciclo completo do software, do planejamento ao deploy',
      ],
      en: [
        'Backend development focused on robust, scalable architectures for web applications',
        'API design, systems integration, and the full software lifecycle, from planning to deploy',
      ],
    },
  },
  {
    id: 'unifoa',
    role: { pt: 'Sistemas de Informação', en: 'Information Systems' },
    org: { pt: 'UniFoa', en: 'UniFoa' },
    period: { pt: '2024', en: '2024' },
    current: true,
    description: {
      pt: ['Graduação em Sistemas de Informação, com foco em arquitetura, algoritmos e desenvolvimento de software'],
      en: ['Information Systems degree, focused on architecture, algorithms, and software development'],
    },
  },
  {
    id: 'python2-inatel',
    role: { pt: 'Python 2.0', en: 'Python 2.0' },
    org: { pt: 'Inatel', en: 'Inatel' },
    period: { pt: '2023', en: '2023' },
    description: {
      pt: ['Competição nacional de programação em Python, realizada na faculdade Inatel, meu primeiro contato com programação'],
      en: ['National Python programming competition, held at Inatel college, my first contact with programming'],
    },
  },
]
