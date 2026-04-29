import type { Translations } from './pt'

export const en: Translations = {
  nav: {
    hero: 'Home',
    about: 'About',
    timeline: 'Timeline',
    certificates: 'Certificates',
    projects: 'Projects',
    contact: 'Contact',
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

    p1_title: 'Generator API',
    p1_desc: 'Robust REST API offering CPF generation, URL shortener, password generator, UUID, date services and sorted numbers.',

    p2_title: 'YT Downloader CLI',
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
    sub: 'Want to chat about system architecture?',
    cta: 'Send an email',
  },
  footer: 'Developed @ Hugolelis',
}
