import { Bot, Radio, GitBranch, GitMerge, FileSpreadsheet, Layers } from 'lucide-react'
import { Theme } from '../theme'
import SectionHeader from './SectionHeader'
import Timeline from './Timeline'
import TimelineCard, { Bullet, CardLink } from './TimelineCard'
import ProjectDemo from './ProjectDemo'
import Reveal from './Reveal'

interface ProjectsProps {
  theme: Theme
}

interface Project {
  title: string
  role?: string
  period: string
  summary: string
  bullets: Bullet[]
  links: CardLink[]
  hasDemo?: { url: string; label: string }
}

const projects: Project[] = [
  {
    title: 'Orbit',
    period: 'Feb 2026 – Present',
    summary: 'A multi-agent AI assistant unifying Outlook + Google Calendar behind one chat, across web and SMS.',
    bullets: [
      {
        icon: Bot,
        text: 'Built a multi-agent AI assistant (Python/FastAPI, Next.js 15, TypeScript, PostgreSQL/Neon) unifying Outlook (Mail, Calendar, To Do) and Google Calendar behind one chat interface; an Agno orchestrator routes queries to 3 specialist agents (Claude Sonnet 4.6) across 20+ tools',
        tags: ['Python', 'FastAPI', 'Next.js 15', 'Agno', 'Claude', 'PostgreSQL', 'Neon'],
      },
      {
        icon: Radio,
        text: 'Designed a POST-based SSE streaming protocol with human-in-the-loop approvals for writes, pausing and resuming agent runs across web and SMS (Twilio) channels with shared session state; Fernet-encrypted OAuth tokens with auto-refresh via MSAL',
        tags: ['SSE', 'Twilio', 'OAuth2', 'MSAL', 'Fernet'],
      },
    ],
    links: [
      { type: 'github', href: 'https://github.com/FelipeSanch/Orbit' },
      { type: 'live', href: 'https://orbit-ruby-one.vercel.app' },
    ],
    hasDemo: { url: 'https://orbit-ruby-one.vercel.app', label: 'Orbit live demo' },
  },
  {
    title: 'Grove Workflows',
    role: 'Co-Founder',
    period: 'May 2026 – Present',
    summary: 'Turning real-estate paperwork into clean financials, from owner statements to K-1s.',
    bullets: [
      {
        icon: FileSpreadsheet,
        text: 'Automated owner-statement processing for a 50-unit residential portfolio: uploaded PDFs become P&L, expense, and cash-on-cash reports, cutting a week of work to under an hour',
        tags: ['PDF Parsing', 'Automation', 'Reporting'],
      },
      {
        icon: Layers,
        text: 'Architecting a single-codebase, per-client deployment model with isolated databases for K-1 and sponsor-statement ingestion',
        tags: ['Multi-tenant', 'Per-client Deploys', 'Isolated DBs'],
      },
    ],
    links: [{ type: 'live', href: 'https://groveworkflows.com' }],
    hasDemo: { url: 'https://groveworkflows.com', label: 'Grove Workflows live site' },
  },
  {
    title: 'GitFlow AI Analytics Platform',
    period: 'Jun 2025 – Aug 2025',
    summary: 'Git analytics platform with ML-powered merge-conflict prediction at 76% accuracy.',
    bullets: [
      {
        icon: GitBranch,
        text: 'Built a full-stack analytics platform (React, TypeScript, Node.js, PostgreSQL) that ingests GitHub repository data via OAuth, tracking commit patterns, PR cycles, and code review metrics for 100+ active repositories',
        tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OAuth'],
      },
      {
        icon: GitMerge,
        text: 'Trained a LightGBM classifier on 10K+ historical commits to predict merge conflicts with 76% accuracy using features like branch age, file change overlap, and contributor patterns',
        tags: ['LightGBM', 'Machine Learning'],
      },
    ],
    links: [{ type: 'github', href: 'https://github.com/FelipeSanch/gitflow' }],
  },
]

const Projects = ({ theme }: ProjectsProps) => (
  <section id="projects" style={{ padding: '72px 0' }}>
    <Reveal>
      <SectionHeader title="Projects" theme={theme} />
    </Reveal>
    <Reveal delay={60}>
      <Timeline theme={theme}>
        {projects.map((p, i) => (
          <TimelineCard
            key={p.title}
            theme={theme}
            title={p.title}
            period={p.period}
            role={p.role}
            summary={p.summary}
            bullets={p.bullets}
            links={p.links}
            demo={p.hasDemo ? <ProjectDemo theme={theme} url={p.hasDemo.url} label={p.hasDemo.label} /> : undefined}
            defaultOpen={i === 0}
          />
        ))}
      </Timeline>
    </Reveal>
  </section>
)

export default Projects
