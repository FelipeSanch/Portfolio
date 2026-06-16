import { Trophy, Users, LineChart, ShieldAlert, Lightbulb } from 'lucide-react'
import { Theme } from '../theme'
import SectionHeader from './SectionHeader'
import Timeline from './Timeline'
import TimelineCard, { Bullet } from './TimelineCard'
import Reveal from './Reveal'

interface LeadershipProps {
  theme: Theme
}

interface Role {
  org: string
  title: string
  location: string
  period: string
  summary: string
  bullets: Bullet[]
}

const roles: Role[] = [
  {
    org: 'Duke Venture Group',
    title: 'Investment Analyst & Mentor',
    location: 'Durham, NC',
    period: 'Sep 2025 – Present',
    summary: "Selected analyst in Duke's undergraduate VC program, supporting diligence with partner funds.",
    bullets: [
      {
        icon: Trophy,
        text: "Selected as 1 of 33 analysts (from 200+ applicants) in Duke's competitive undergraduate VC program",
      },
      {
        icon: Users,
        text: 'Support due diligence and partner projects with VCs including Maven Ventures, Camber Creek, Mudita VP, and Techstars',
        tags: ['Due Diligence', 'Venture Capital'],
      },
    ],
  },
  {
    org: 'Duke Applied Machine Learning',
    title: 'Project Lead',
    location: 'Durham, NC',
    period: 'Sep 2024 – Present',
    summary: 'Lead a project team building churn-prediction models on real data.',
    bullets: [
      {
        icon: LineChart,
        text: 'Built models (logistic regression, random forest) to predict customer churn; identified contract length and usage patterns as key drivers',
        tags: ['Logistic Regression', 'Random Forest', 'Python'],
      },
    ],
  },
  {
    org: 'CCHS Cybersecurity Club',
    title: 'Founder & President',
    location: 'Miami, FL',
    period: 'Sep 2020 – May 2024',
    summary: 'Founded and led the school cybersecurity club; competed and built award-winning projects.',
    bullets: [
      {
        icon: ShieldAlert,
        text: 'Founded and led the cybersecurity club; team placed 2nd at the 2023 SFISSA Hack-The-Flag competition',
        tags: ['Cybersecurity', 'CTF'],
      },
      {
        icon: Lightbulb,
        text: 'Led the CodeMania! 2023 hackathon team to develop "Tiki," an AI chatbot for personalized recommendations; presented the project at University of Miami',
        tags: ['AI Chatbot', 'Hackathon'],
      },
    ],
  },
]

const Leadership = ({ theme }: LeadershipProps) => (
  <section id="leadership" style={{ padding: '72px 0' }}>
    <Reveal>
      <SectionHeader title="Leadership" theme={theme} />
    </Reveal>
    <Reveal delay={60}>
      <Timeline theme={theme}>
        {roles.map((role) => (
          <TimelineCard
            key={role.org}
            theme={theme}
            title={role.org}
            period={role.period}
            role={role.title}
            meta={role.location}
            summary={role.summary}
            bullets={role.bullets}
          />
        ))}
      </Timeline>
    </Reveal>
  </section>
)

export default Leadership
