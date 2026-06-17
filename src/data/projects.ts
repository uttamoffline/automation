export interface Project {
  id: string
  title: string
  description: string
  employer: string
  period: string
  image: string
  imageAlt: string
  tags: string[]
  liveUrl?: string
  caseStudyUrl?: string
}

export interface WorkGroup {
  id: string
  employer: string
  role: string
  period: string
  description: string
  projects: Project[]
}

export const workGroups: WorkGroup[] = [
  {
    id: 'rbha',
    employer: 'RBHA',
    role: 'Senior AI Engineer',
    period: '2025 – Present',
    description:
      'Building AI-native platforms for accounting and audit firms — from intelligent document retrieval to automated invoicing and client portals.',
    projects: [
      {
        id: 'invoice-generator',
        title: 'Invoice Generator',
        description:
          'Full-stack multi-tenant invoice platform for CA firms with GST calculations, live preview, PDF export, and AI-assisted email delivery.',
        employer: 'RBHA',
        period: '2025',
        image: '/images/projects/invoice-generator.svg',
        imageAlt: 'Invoice Generator dashboard preview',
        tags: ['React', 'Node.js', 'SQLite', 'PDF', 'Resend'],
        liveUrl: 'https://invoice.invoicecreation.store/login',
      },
      {
        id: 'accounting-rag',
        title: 'Accounting RAG System',
        description:
          'Retrieval-augmented generation system enabling field teams to query financial documents, compliance records, and audit trails through natural language.',
        employer: 'RBHA',
        period: '2025',
        image: '/images/projects/rag-system.svg',
        imageAlt: 'Accounting RAG system interface',
        tags: ['RAG', 'Python', 'LLM', 'PostgreSQL', 'Vector DB'],
      },
      {
        id: 'client-portal',
        title: 'AI Client Portal',
        description:
          'Full-stack client portal integrating firm-facing workflows, document management, and AI-assisted reporting for improved client engagement.',
        employer: 'RBHA',
        period: '2025',
        image: '/images/projects/client-portal.svg',
        imageAlt: 'AI Client Portal interface',
        tags: ['React', 'REST APIs', 'Document Management', 'AI Reporting'],
      },
    ],
  },
  {
    id: 'bobble-ai',
    employer: 'Bobble AI',
    role: 'Software Engineer',
    period: '2021 – 2025',
    description:
      'Inventor on keyboard QA infrastructure. A glimpse of the automation systems and test platforms that shipped across multiple release cycles.',
    projects: [
      {
        id: 'ime-test-suite',
        title: 'IME Test Suite',
        description:
          'Cross-platform Electron app to benchmark Android keyboards — CPU/RAM/GPU usage, 22+ languages, security checks, memory leaks, and key-press lag analysis.',
        employer: 'Bobble AI',
        period: '2021 – 2025',
        image: '/images/projects/ime-test-suite.svg',
        imageAlt: 'IME Test Suite keyboard benchmarking dashboard',
        tags: ['Electron', 'Android', 'QA Automation', 'Performance'],
        liveUrl: 'https://www.bobble.ai/en/ime-test-suite',
      },
      {
        id: 'cicd-platform',
        title: 'Scalable CI/CD Platform',
        description:
          'Orchestrated 30+ containerized pipelines with structured outputs, automated benchmarking, and real-time dashboards — reducing build time by 30%.',
        employer: 'Bobble AI',
        period: '2021 – 2025',
        image: '/images/projects/cicd-platform.svg',
        imageAlt: 'CI/CD pipeline dashboard',
        tags: ['Jenkins', 'Docker', 'Kubernetes', 'MongoDB', 'Next.js'],
      },
      {
        id: 'korean-transliteration',
        title: 'Korean Transliteration Model',
        description:
          'NLP-based system converting Hangul into readable English using linguistic rules — consonant assimilation, double consonants, and structured hyphenation.',
        employer: 'Bobble AI',
        period: '2022 – 2024',
        image: '/images/projects/transliteration.svg',
        imageAlt: 'Korean transliteration language model',
        tags: ['Python', 'NLP', 'Machine Learning', 'Keyboard Intelligence'],
      },
    ],
  },
  {
    id: 'wing-ai',
    employer: 'Wing AI',
    role: 'Software Engineer',
    period: '2025',
    description:
      'Evaluation infrastructure is what I built best. The scoring logic, the regression tracking, the CI-integrated reporting. Behind every metric, hundreds of failed experiments.',
    projects: [
      {
        id: 'llm-judge',
        title: 'LLM-as-a-Judge Framework',
        description:
          'End-to-end evaluation framework with scoring logic, regression tracking, and automated quality reporting pipelines integrated into CI/CD.',
        employer: 'Wing AI',
        period: '2025',
        image: '/images/projects/llm-judge.svg',
        imageAlt: 'LLM evaluation framework dashboard',
        tags: ['LLM Evaluation', 'GitHub Actions', 'Jenkins', 'Python'],
      },
      {
        id: 'ai-product-validation',
        title: 'AI Product Validation',
        description:
          'System-level validation across 7+ production AI products — conversational flows, onboarding systems, and third-party integrations.',
        employer: 'Wing AI',
        period: '2025',
        image: '/images/projects/ai-validation.svg',
        imageAlt: 'AI product validation pipeline',
        tags: ['AI QA', 'Regression Testing', 'CI/CD', 'Monitoring'],
      },
    ],
  },
  {
    id: 'earlier',
    employer: 'Earlier Work',
    role: 'Engineering Projects',
    period: '2021 – 2022',
    description:
      'Before enterprise AI platforms, I built backend testing frameworks and explored machine learning research.',
    projects: [
      {
        id: 'microservices-framework',
        title: 'Backend Testing Framework',
        description:
          'Scalable backend system for API validation, database integrity checks, and performance testing — fully integrated into CI/CD pipelines.',
        employer: 'Personal',
        period: '2022',
        image: '/images/projects/microservices.svg',
        imageAlt: 'Microservices testing framework',
        tags: ['Java', 'REST APIs', 'PostgreSQL', 'Docker', 'CI/CD'],
      },
      {
        id: 'pca-research',
        title: 'PCA Dimensionality Research',
        description:
          'Research on the Curse of Dimensionality at Ignitus, applying PCA to improve interpretability of high-dimensional astronomical datasets.',
        employer: 'Ignitus',
        period: '2021',
        image: '/images/projects/pca-research.svg',
        imageAlt: 'PCA dimensionality reduction research',
        tags: ['Python', 'PCA', 'Machine Learning', 'Research'],
      },
    ],
  },
]
