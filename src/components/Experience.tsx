import {
  Workflow,
  Tags,
  MousePointerClick,
  Plug,
  FileDown,
  Database,
  LayoutDashboard,
  ShieldCheck,
  Server,
} from 'lucide-react'
import { Theme } from '../theme'
import SectionHeader from './SectionHeader'
import Timeline from './Timeline'
import TimelineCard, { Bullet } from './TimelineCard'
import Reveal from './Reveal'

interface ExperienceProps {
  theme: Theme
}

interface Job {
  company: string
  href?: string
  role: string
  location: string
  period: string
  summary: string
  bullets: Bullet[]
}

const jobs: Job[] = [
  {
    company: 'Clave',
    href: 'https://tryclave.ai',
    role: 'Software Engineering Intern',
    location: 'Miami, FL',
    period: 'May 2026 – Aug 2026',
    summary: 'Built the data, integrations, and agent tooling behind an AI copilot for QSR franchises.',
    bullets: [
      {
        icon: Tags,
        text: 'Replaced a 216-rule deterministic menu classifier with an agent-driven taxonomy running on raw POS data, pulling it out of the ingestion transforms and taking coverage from 3 tenants to all 29 (10K+ items)',
        tags: ['LLM Agents', 'Taxonomy', 'POS Data'],
      },
      {
        icon: MousePointerClick,
        text: 'Built a Chrome extension agent that drives Square on its own, intercepts the report APIs, and emails multi-page reports in ~20s, with read-only enforcement and grounding checks keeping it safe',
        tags: ['Chrome Extension', 'Agents', 'Square'],
      },
      {
        icon: Plug,
        text: 'Reverse engineered PAR Brink POS endpoints from network traffic and shipped a production connector, onboarding 30 Smoothie King stores',
        tags: ['Reverse Engineering', 'Network Analysis', 'PAR Brink'],
      },
      {
        icon: Workflow,
        text: 'Architected the CRM automation layer (n8n on Railway, Postgres) feeding the AI agent, plus a LinkedIn outreach pipeline wired to a market-intelligence service that surfaces QSR franchise news',
        tags: ['n8n', 'Railway', 'PostgreSQL', 'LinkedIn API'],
      },
    ],
  },
  {
    company: 'MasTec',
    role: 'Data Analyst Intern',
    location: 'Coral Gables, FL',
    period: 'May 2025 – Aug 2025',
    summary: 'Automated SEC-filing analysis and built the data backbone for the investment team.',
    bullets: [
      {
        icon: FileDown,
        text: 'Built Python automation tools (pandas, requests) to extract and parse financial data from SEC EDGAR filings across 40 infrastructure companies, reducing analysis time for the investment team',
        tags: ['Python', 'pandas', 'requests'],
      },
      {
        icon: Database,
        text: 'Designed a SQL database schema and ETL pipeline to track revenue trends and debt ratios over time, enabling faster comp analysis',
        tags: ['SQL', 'ETL', 'PostgreSQL'],
      },
    ],
  },
  {
    company: 'Miami Jewish Health',
    role: 'Software Engineering Intern',
    location: 'Miami, FL',
    period: 'May 2023 – Aug 2023',
    summary: 'Shipped patient-portal features for 500+ daily users with HIPAA-compliant access control.',
    bullets: [
      {
        icon: LayoutDashboard,
        text: 'Developed patient portal features using React and Node.js, serving 500+ daily active users across the healthcare facility',
        tags: ['React', 'Node.js'],
      },
      {
        icon: ShieldCheck,
        text: 'Implemented JWT authentication and role-based access control, securing medical data for compliance with HIPAA standards',
        tags: ['JWT', 'RBAC', 'HIPAA'],
      },
      {
        icon: Server,
        text: 'Built RESTful API endpoints in Node.js to support new portal features including appointment scheduling and patient record lookup, working with senior engineers on data contracts and code review',
        tags: ['Node.js', 'REST API'],
      },
    ],
  },
]

const Experience = ({ theme }: ExperienceProps) => (
  <section id="experience" style={{ padding: '72px 0' }}>
    <Reveal>
      <SectionHeader title="Experience" theme={theme} />
    </Reveal>
    <Reveal delay={60}>
      <Timeline theme={theme}>
        {jobs.map((job, i) => (
          <TimelineCard
            key={job.company}
            theme={theme}
            title={job.company}
            titleHref={job.href}
            period={job.period}
            role={job.role}
            meta={job.location}
            summary={job.summary}
            bullets={job.bullets}
            defaultOpen={i === 0}
          />
        ))}
      </Timeline>
    </Reveal>
  </section>
)

export default Experience
