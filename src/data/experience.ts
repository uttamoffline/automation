export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'rbha',
    role: 'Senior AI Engineer',
    company: 'RBHA',
    location: 'Gurgaon',
    period: 'Jan 2025 – Present',
    highlights: [
      'Designed an accounting and audit-centric RAG system for natural language queries over financial documents and compliance records.',
      'Built and deployed an AI-powered invoicing application with automated parsing, categorization, and anomaly flagging.',
      'Developed a full-stack client portal integrating firm workflows, document management, and AI-assisted reporting.',
    ],
  },
  {
    id: 'wing-ai',
    role: 'Software Engineer',
    company: 'Wing AI',
    location: 'Remote',
    period: 'Sep 2025 – Dec 2025',
    highlights: [
      'Architected an LLM-as-a-Judge evaluation framework with scoring logic, regression tracking, and automated quality reporting.',
      'Built CI/CD infrastructure using GitHub Actions and Jenkins for scheduled AI evaluation runs and real-time alerting.',
      'Engineered AI-powered features across 7+ production products spanning conversational flows and onboarding systems.',
    ],
  },
  {
    id: 'bobble-ai',
    role: 'Software Engineer',
    company: 'Bobble AI',
    location: 'Gurgaon, India',
    period: 'Dec 2021 – Aug 2025',
    highlights: [
      'Engineered the IME Test Suite and 20+ automated data and validation pipelines as the backbone for product quality.',
      'Architected containerized CI/CD infrastructure spanning data pipelines and automation workflows.',
      'Designed multilingual transliteration models for Chinese, Japanese, and Korean keyboard intelligence features.',
      'Optimized CI/CD execution time by 30% through pipeline restructuring.',
    ],
  },
  {
    id: 'ignitus',
    role: 'Machine Learning Engineer Intern',
    company: 'Ignitus',
    location: 'Remote',
    period: 'Jul 2021 – Nov 2021',
    highlights: [
      'Conducted research on the Curse of Dimensionality, applying PCA to improve interpretability of high-dimensional datasets.',
      'Developed Python-based modules and interactive learning content for an internal LMS platform.',
    ],
  },
]
