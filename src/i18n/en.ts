import type { Translations } from './pt'

export const en: Translations = {
  nav: {
    about: 'About',
    certificates: 'Certificates',
    projects: 'Projects',
  },
  hero: {
    sub: 'I turn complex problems into clean, performant code that is easy to maintain.',
    cta_projects: 'View projects',
    cta_cv: 'Download CV',
    available: 'code',
  },
  projects: {
    title: 'Projects',
    count: '{n} projects',
    viewCode: 'View code',
    viewDeploy: 'View deploy',

    p1_title: 'Generator',
    p1_desc: 'Robust REST API offering CPF generation, URL shortener, password generator, UUID, date services and sorted numbers.',

    p2_title: 'YT Downloader',
    p2_desc: 'CLI tool to download YouTube videos and audio directly from the terminal, with quality selection and MP3 extraction.',

    p3_title: 'Lexio',
    p3_desc: 'CLI for textual context analysis, featuring term extraction, lexical frequency, and corpus statistics.',
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
    count: '{n} certificates',
    items: [
      { name: 'Object-Oriented Data Structures in C++', issuer: 'University of Illinois · Coursera', year: '2026', file: '/courses/c++.pdf' },
      { name: 'Introduction to Software Engineering', issuer: 'IBM · Coursera', year: '2026', file: '/courses/software_eng.pdf' },
      { name: 'Python for Data Science, AI & Development', issuer: 'IBM · Coursera', year: '2026', file: '/courses/python.pdf' },
      { name: 'Docker from beginner to advanced', issuer: 'Udemy', year: '2025', file: '/courses/docker.pdf' },
      { name: 'SQL: A Practical Introduction for Querying Databases', issuer: 'IBM · Coursera', year: '2026', file: '/courses/SQL.pdf' },
      { name: 'Introduction to Git and GitHub', issuer: 'Google · Coursera', year: '2026', file: '/courses/GIT.pdf' },
    ],
  },
}
