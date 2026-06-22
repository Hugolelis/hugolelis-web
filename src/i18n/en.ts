import type { Translations } from './pt'

export const en: Translations = {
  nav: {
    hero: 'Home',
    about: 'About',
    timeline: 'Timeline',
    certificates: 'Certificates',
    projects: 'Projects',
    contact: 'Contact',
    pages: 'Pages',
  },
  hero: {
    role: 'Software Developer',
    title1: 'Building',
    title2: 'systems',
    title3: 'that scale.',
    sub: 'I turn complex business rules into robust, performant APIs that are easy to maintain.',
    cta_projects: 'View projects',
    cta_contact: 'Get in touch',
    cta_cv: 'Download CV',
    available: 'code',
  },
  about: {
    title: 'About me',
    p1: "I'm Hugo, a software developer focused on API architecture, relational databases, and distributed systems. I enjoy solving hard problems with simple, well-structured solutions.",
    skills_title: 'Core stack',
  },
  projects: {
    title: 'Projects',
    viewAll: 'View all projects',
    count: '{n} projects',

    p1_title: 'Generator',
    p1_desc: 'Robust REST API offering CPF generation, URL shortener, password generator, UUID, date services and sorted numbers.',

    p2_title: 'YT Downloader',
    p2_desc: 'CLI tool to download YouTube videos and audio directly from the terminal, with quality selection and MP3 extraction.',
  },
  timeline: {
    title: 'Timeline',
    items: [
      {
        year: '2023',
        type: 'First contact with programming',
        role: 'Qualified for the Inatel 2.0 programming event',
        place: 'Inatel',
        desc: 'Qualified for a competitive programming challenge focused on Python, solving algorithmic problems under time pressure.',
      },

      {
        year: '2024',
        type: 'Education',
        role: 'B.Sc. in Information Systems',
        place: 'UniFoa',
        desc: 'Ongoing degree focused on software development, system architecture, and databases.',
      },

      {
        year: '2024',
        type: 'Work',
        role: 'Freelance Backend Developer',
        place: 'Self-employed',
        desc: 'Building robust and scalable backend architectures for web applications. API design, system integration, performance optimization, and full software lifecycle management from planning to deploy.',
      },

      {
        year: '2025',
        type: 'Internship',
        role: 'Backend Developer',
        place: 'Metta Innovations',
        desc: 'Focused on Computer Vision and AI. Worked with C++ and Python, MySQL and PostgreSQL, Qt/QML applications, Docker, unit testing, and agile/Scrum methodology.',
      },
    ],
  },
  certificates: {
    title: 'Certificates',
    viewAll: 'View all certificates',
    count: '{n} certificates',
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
    title: "Let's talk?",
    sub: 'Want to chat about systems?',
    cta: 'Send an email',
  },
  blog: {
    label: '# posts linkedin',
    sub: 'Thoughts on development, systems and technology.',
    empty: 'No posts yet.',
    linkedin: 'View on LinkedIn →',
    posts: [
      {
        id: 1,
        date: '2026-05-07',
        title: 'I launched my portfolio!',
        content: `A space where I gather my projects, experience and journey as a developer.\n\nThe project features:\n→ React + TypeScript\n→ Custom loading animation\n→ Responsive design\n→ PT-BR and EN support\n→ Light and dark theme\n→ Vercel hosting`,
        tags: ['React', 'TypeScript', 'Vercel'],
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7456332957394477058/',
      },
      {
        id: 2,
        date: '2026-04-28',
        title: 'Do you organize your project by responsibility or by feature?',
        content: `This decision directly impacts scalability, readability and maintainability — and it's more controversial than it seems.\n\n🔍 My take\nThere's no right answer. There's only the right context.\n\nIn small projects, organizing by responsibility is simple, intuitive and works well. But as the software scales, feature-based organization tends to win for its ease of finding and migrating resources.\n\n⚠️ My conclusion\nThe real problem isn't which style you choose. It's mixing styles without criteria and waking up to a codebase that makes the developer's life harder.`,
        tags: ['Architecture', 'Best Practices'],
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7443682520711421952/',
      },
      {
        id: 3,
        date: '2026-04-14',
        title: 'Have you ever opened a 300-line JSON and tried to understand it?',
        content: `This happens all the time:\n• Debugging an API response\n• Reviewing a payload\n• Understanding a schema without context\n\n🚀 JSON Crack solves this.\n\nIt's a tool that transforms JSON into an interactive visual graph. Paste the content, it maps the structure, organizes the nodes and delivers a navigable diagram in seconds — no setup, no install.\n\nAnd it doesn't stop at JSON — the tool also reads CSV, XML and YAML with the same ease.`,
        tags: ['Tools', 'JSON', 'Dev Tips'],
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7449947535521009664/',
      },
    ],
  },
  footer: 'Developed @ Hugolelis',
}
