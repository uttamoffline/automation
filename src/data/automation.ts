export const automation = {
  headline: 'Automate Everything.',
  subheadline: 'Automation Specialist',
  workspaceImage: '/images/automation-workspace.png',
  workspaceImageAlt: 'Automation workspace with pipelines, workflow diagrams, and uttamsingh on laptop',
  intro:
    'I don\'t just write scripts — I engineer invisible systems that move work forward while teams sleep. From the first API call to the last pixel on Android, I\'ve wired the full stack to run itself.',

  philosophy: {
    title: 'The Approach',
    subtitle: 'A principle I live by when designing every pipeline',
    tiers: [
      {
        id: 'simple',
        label: 'Simple',
        tagline: 'is better than complex',
        description:
          'One clear job. One owner. One trigger. The best automation disappears into the background — you notice it only because nothing breaks.',
        emphasis: true,
      },
      {
        id: 'complex',
        label: 'Complex',
        tagline: 'is better than complicated',
        description:
          'Real systems need depth — orchestration, retries, observability, fallbacks. Complexity with structure is power. Complexity without it is chaos.',
        emphasis: true,
      },
      {
        id: 'complicated',
        label: 'Complicated',
        tagline: 'is where things die',
        description:
          'Spaghetti workflows. Tribal knowledge. Brittle one-offs. I refactor complicated into complex, and complex into simple — until the machine hums.',
        emphasis: false,
      },
    ],
  },

  stats: [
    { value: 30, suffix: '+', label: 'Automation Pipelines' },
    { value: 30, suffix: '%', label: 'Faster CI/CD Execution' },
    { value: 20, suffix: '+', label: 'Data & Validation Flows' },
    { value: 7, suffix: '+', label: 'Platforms Unified' },
  ],

  layers: [
    { id: 'android', label: 'Android', description: 'IME testing, keyboard QA, device automation' },
    { id: 'client', label: 'Client', description: 'Web apps, dashboards, live previews' },
    { id: 'api', label: 'API', description: 'REST validation, webhooks, microservice checks' },
    { id: 'backend', label: 'Backend', description: 'Data pipelines, ETL, integrity audits' },
    { id: 'cicd', label: 'CI/CD', description: 'Jenkins, GitHub Actions, Kubernetes deploys' },
    { id: 'infra', label: 'Infra', description: 'Docker, monitoring, self-healing workflows' },
  ],

  capabilities: [
    {
      title: 'End-to-End Pipelines',
      description:
        'Designed 30+ containerized automation pipelines with structured outputs, benchmarking, and real-time dashboards — the backbone of every release.',
    },
    {
      title: 'Cross-Platform QA',
      description:
        'Built the IME Test Suite — an Electron platform measuring keyboard performance across Android devices, 22+ languages, and security surfaces.',
    },
    {
      title: 'API & Microservice Validation',
      description:
        'Automated API correctness, database integrity, and performance regression — wired directly into CI so bad deploys never reach production.',
    },
    {
      title: 'Process Orchestration',
      description:
        'Turned manual workflows into scheduled, observable, self-healing jobs — from invoice generation to AI evaluation runs to data validation at scale.',
    },
    {
      title: 'Developer Velocity',
      description:
        'Restructured CI/CD execution for a 30% speed gain. Less waiting. More shipping. Higher confidence on every merge.',
    },
    {
      title: 'Security & Privacy Automation',
      description:
        'Embedded static and dynamic analysis into release pipelines — catching data leaks and privacy violations before they ship.',
    },
  ],

  closing:
    'Automation isn\'t about replacing people. It\'s about removing friction so engineers can focus on what actually matters — building things that last.',
}
