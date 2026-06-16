import {
  FileSpreadsheet,
  Workflow,
  FileDown,
  Database,
  TrendingUp,
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
    period: 'May 2026 – Present',
    summary: 'Building data + automation tooling behind an AI agent for QSR franchises.',
    bullets: [
      {
        icon: FileSpreadsheet,
        text: 'Built a CSV classification and parsing service the AI agent invokes as a tool, normalizing inbound franchise data that arrives in many inconsistent formats into a structured schema',
        tags: ['Python', 'Pandas', 'LLM Tools'],
      },
      {
        icon: Workflow,
        text: 'Architected the CRM automation layer (n8n on Railway, Postgres) feeding an AI agent, and a LinkedIn outreach pipeline linked to a market-intelligence service surfacing current QSR franchise news',
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
        text: 'Built Python automation tools (pandas, requests) to extract and parse financial data from SEC EDGAR filings across 40+ infrastructure companies, reducing analysis time for the investment team',
        tags: ['Python', 'pandas', 'requests'],
      },
      {
        icon: Database,
        text: 'Designed a SQL database schema and ETL pipeline to track revenue trends and debt ratios over time, enabling faster comp analysis',
        tags: ['SQL', 'ETL', 'PostgreSQL'],
      },
      {
        icon: TrendingUp,
        text: 'Conducted comparable company analyses leveraging the parsed financial data, benchmarking valuation metrics across infrastructure subsectors and surfacing outliers for investment team review',
        tags: ['Valuation', 'Comps'],
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
