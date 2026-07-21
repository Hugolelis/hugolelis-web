export const pt = {
  nav: {
    hero: 'Início',
    about: 'Sobre',
    timeline: 'Trajetória',
    certificates: 'Certificados',
    projects: 'Projetos',
    contact: 'Contato',
    pages: 'Páginas',
  },
  hero: {
    role: 'Desenvolvedor de Software',
    title1: 'Construindo',
    title2: 'sistemas',
    title3: 'que escalam.',
    sub: 'Transformo regras de negócio complexas em APIs robustas, performáticas e fáceis de manter.',
    cta_projects: 'Ver projetos',
    cta_contact: 'Falar comigo',
    cta_cv: 'Baixar currículo',
    available: 'code',
  },
  about: {
    title: 'Sobre mim',
    p1: 'Sou Hugo, desenvolvedor de software com foco em arquitetura de APIs, bancos de dados relacionais e sistemas distribuídos. Gosto de resolver problemas difíceis com soluções simples e bem estruturadas.',
    skills_title: 'Stack principal',
    cat_backend: 'Backend',
    cat_infra: 'Infra',
    cat_tools: 'Metodologias',
  },
  projects: {
    title: 'Projetos',
    viewAll: 'Ver todos os projetos',
    count: '{n} projetos',

    p1_title: 'Generator',
    p1_desc: 'API REST robusta com geração de CPF, encurtador de URL, gerador de senhas, UUID, serviços de data e números sorteados.',

    p2_title: 'YT Downloader',
    p2_desc: 'Ferramenta de linha de comando para baixar vídeos e áudios do YouTube direto do terminal, com seleção de qualidade e extração em MP3.',

    p3_title: 'Lexio',
    p3_desc: 'CLI para análise de contexto textual, com extração de termos, frequência léxica e estatísticas de corpus.',
  },
  timeline: {
    title: 'Trajetória',
    items: [
      {
        year: '2023',
        type: 'Primeiro contato com programação',
        role: 'Classificado para o evento programação 2.0 Inatel',
        place: 'Inatel',
        desc: 'Classificado para competição de desafios de programação com foco em Python, resolvendo problemas algorítmicos sob pressão de tempo.',
      },

      {
        year: '2024',
        type: 'Formação',
        role: 'Bacharelado em Sistemas de Informação',
        place: 'UniFoa',
        desc: 'Curso em andamento com foco em desenvolvimento de software, arquitetura de sistemas e banco de dados.',
      },

      {
        year: '2024',
        type: 'Trabalho',
        role: 'Desenvolvedor Backend Autônomo',
        place: 'Autônomo',
        desc: 'Desenvolvimento de arquiteturas backend robustas e escaláveis para aplicações web. Design de APIs, integração de sistemas, otimização de performance e gerenciamento completo do ciclo de vida do software.',
      },

      {
        year: '2025',
        type: 'Estágio',
        role: 'Estagiário Backend',
        place: 'Metta Innovations',
        desc: 'Foco em Visão Computacional e IA. Desenvolvimento com C++ e Python, MySQL e PostgreSQL, aplicações Qt/QML, Docker, testes unitários e metodologia ágil/Scrum.',
      },
    ],
  },
  certificates: {
    title: 'Certificados',
    viewAll: 'Ver todos os certificados',
    count: '{n} certificados',
    items: [
      { name: 'Object-Oriented Data Structures in C++', issuer: 'University of Illinois · Coursera', year: '2026', file: '/courses/c++.pdf' },
      { name: 'Introduction to Software Engineering', issuer: 'IBM · Coursera', year: '2026', file: '/courses/software_eng.pdf' },
      { name: 'Python for Data Science, AI & Development', issuer: 'IBM · Coursera', year: '2026', file: '/courses/python.pdf' },
      { name: 'Docker from beginner to advanced', issuer: 'Udemy', year: '2025', file: '/courses/docker.pdf' },
      { name: 'SQL: A Practical Introduction for Querying Databases', issuer: 'IBM · Coursera', year: '2026', file: '/courses/SQL.pdf' },
      { name: 'Introduction to Git and GitHub', issuer: 'Google · Coursera', year: '2026', file: '/courses/GIT.pdf' },
    ],
  },
  contact: {
    title: 'Vamos conversar?',
    sub: 'Quer trocar uma ideia sobre sistemas?',
    cta: 'Enviar e-mail',
  },
  footer: 'Desenvolvido @ Hugolelis',
}

export type Translations = typeof pt
