import type { TimelineEntry } from '../types'

export const timeline: TimelineEntry[] = [
  {
    year: '2025',
    category: 'internship',
    type: { pt: 'Estágio', en: 'Internship' },
    role: { pt: 'Estagiário Backend', en: 'Backend Developer' },
    place: { pt: 'Metta Innovations', en: 'Metta Innovations' },
    description: {
      pt: 'Foco em Visão Computacional e IA. Desenvolvimento com C++ e Python, MySQL e PostgreSQL, aplicações Qt/QML, Docker, testes unitários e metodologia ágil/Scrum.',
      en: 'Focused on Computer Vision and AI. Worked with C++ and Python, MySQL and PostgreSQL, Qt/QML applications, Docker, unit testing, and agile/Scrum methodology.',
    },
  },
  {
    year: '2024',
    category: 'work',
    type: { pt: 'Trabalho', en: 'Work' },
    role: { pt: 'Desenvolvedor Backend Autônomo', en: 'Freelance Backend Developer' },
    place: { pt: 'Autônomo', en: 'Self-employed' },
    description: {
      pt: 'Desenvolvimento de arquiteturas backend robustas e escaláveis para aplicações web. Design de APIs, integração de sistemas, otimização de performance e gerenciamento completo do ciclo de vida do software.',
      en: 'Building robust and scalable backend architectures for web applications. API design, system integration, performance optimization, and full software lifecycle management from planning to deploy.',
    },
  },
  {
    year: '2024',
    category: 'education',
    type: { pt: 'Formação', en: 'Education' },
    role: { pt: 'Bacharelado em Sistemas de Informação', en: 'B.Sc. in Information Systems' },
    place: { pt: 'UniFoa', en: 'UniFoa' },
    description: {
      pt: 'Curso com foco em desenvolvimento de software, arquitetura de sistemas e banco de dados.',
      en: 'Degree focused on software development, system architecture, and databases.',
    },
  },
  {
    year: '2023',
    category: 'milestone',
    type: { pt: 'Primeiro contato com programação', en: 'First contact with programming' },
    role: { pt: 'Classificado para o evento programação 2.0 Inatel', en: 'Qualified for the Inatel 2.0 programming event' },
    place: { pt: 'Inatel', en: 'Inatel' },
    description: {
      pt: 'Classificado para competição de desafios de programação com foco em Python, resolvendo problemas algorítmicos sob pressão de tempo.',
      en: 'Qualified for a competitive programming challenge focused on Python, solving algorithmic problems under time pressure.',
    },
  },
]
