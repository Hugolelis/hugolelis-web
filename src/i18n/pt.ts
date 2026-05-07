export const pt = {
  nav: {
    hero: 'Início',
    about: 'Sobre',
    timeline: 'Trajetória',
    certificates: 'Certificados',
    projects: 'Projetos',
    contact: 'Contato',
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
  },
  projects: {
    title: 'Projetos',

    p1_title: 'Generator',
    p1_desc: 'API REST robusta com geração de CPF, encurtador de URL, gerador de senhas, UUID, serviços de data e números sorteados.',

    p2_title: 'YT Downloader',
    p2_desc: 'Ferramenta de linha de comando para baixar vídeos e áudios do YouTube direto do terminal, com seleção de qualidade e extração em MP3.',
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
    items: [
      { name: 'Introduction to Software Engineering', issuer: 'IBM · Coursera', year: '2026', file: '/courses/software_eng.pdf' },
      { name: 'SQL: A Practical Introduction for Querying Databases', issuer: 'IBM · Coursera', year: '2026', file: '/courses/SQL.pdf' },
      { name: 'Introduction to Git and GitHub', issuer: 'Google · Coursera', year: '2026', file: '/courses/GIT.pdf' },
      { name: 'Object-Oriented Data Structures in C++', issuer: 'University of Illinois · Coursera', year: '2026', file: '/courses/c++.pdf' },
      { name: 'Python for Data Science, AI & Development', issuer: 'IBM · Coursera', year: '2026', file: '/courses/python.pdf' },
      { name: 'Docker from beginner to advanced', issuer: 'Udemy', year: '2025', file: '/courses/docker.pdf' },
    ],
  },
  contact: {
    title: 'Vamos conversar?',
    sub: 'Quer trocar uma ideia sobre sistemas?',
    cta: 'Enviar e-mail',
  },
  blog: {
    label: '# posts & artigos',
    sub: 'Pensamentos sobre desenvolvimento, sistemas e tecnologia.',
    empty: 'Nenhum post ainda.',
    linkedin: 'Ver no LinkedIn →',
    posts: [
      {
        id: 1,
        date: '2026-05-07',
        title: 'Lancei meu portfólio!',
        content: `Um espaço onde reúno meus projetos, experiências e trajetória como desenvolvedor.\n\nO projeto conta com:\n→ React + TypeScript\n→ Animação de loading personalizada\n→ Design responsivo\n→ Suporte a PT-BR e EN\n→ Tema claro e escuro\n→ Hospedagem na Vercel`,
        tags: ['React', 'TypeScript', 'Vercel'],
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7456332957394477058/',
      },
      {
        id: 2,
        date: '2026-04-28',
        title: 'Você organiza seu projeto por responsabilidade ou por funcionalidade?',
        content: `Essa decisão impacta diretamente a escalabilidade, o entendimento e a manutenção do código e é mais polêmica do que parece.\n\n🔍 Minha visão\nNão existe resposta certa. Existe o contexto certo.\n\nEm projetos pequenos, organizar por responsabilidade é simples, intuitivo e funciona bem. Mas conforme o software escala, a organização por funcionalidade tende a ganhar pela facilidade de encontrar e migrar recursos.\n\n⚠️ Minha conclusão\nO verdadeiro problema não é qual estilo você escolhe. É misturar estilos sem critério e acordar com um código que dificulte a vida do desenvolvedor.`,
        tags: ['Arquitetura', 'Boas Práticas'],
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7443682520711421952/',
      },
      {
        id: 3,
        date: '2026-04-14',
        title: 'Você já abriu um JSON com 300 linhas e tentou entender?',
        content: `Isso acontece o tempo todo:\n• Debugar uma resposta de API\n• Revisar um payload\n• Entender um schema sem contexto\n\n🚀 O JSON Crack resolve isso.\n\nÉ uma ferramenta que transforma JSON em grafo visual interativo. Cola o conteúdo, ela mapeia a estrutura, organiza os nós e entrega um diagrama navegável em segundos — sem configuração, sem instalação.\n\nE não para no JSON, a ferramenta também lê CSV, XML e YAML com a mesma facilidade.`,
        tags: ['Ferramentas', 'JSON', 'Dev Tips'],
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7449947535521009664/',
      },
    ],
  },
  footer: 'Desenvolvido @ Hugolelis',
}

export type Translations = typeof pt
