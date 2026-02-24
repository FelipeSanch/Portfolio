import { memo } from 'react'

interface ExperienceProps {
  theme: {
    text: string
    textMuted: string
    textDark: string
  }
}

const experiences = [
  {
    title: 'Investment Analyst & Mentor',
    company: 'Duke Venture Group',
    location: 'Durham, NC',
    period: 'Sep 2025 – Present',
    description: [
      'Selected as 1 of 33 analysts (from 200+ applicants) in Duke\'s competitive undergraduate VC program',
      'Support due diligence and partner projects with VCs including Maven Ventures, Camber Creek,Techstars, and Mudita VP',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'MasTec',
    location: 'Coral Gables, FL',
    period: 'May 2025 – Aug 2025',
    description: [
      'Built Python automation tools (pandas, requests) to extract and parse financial data from SEC EDGAR filings, reducing analysis time across 40+ infrastructure companies',
      'Designed SQL database schema and ETL pipeline to track revenue trends and debt ratios over time, enabling faster comp analysis for investment team',
      'Developed data visualization dashboards using Matplotlib/Plotly to present financial metrics to senior analysts',
    ],
  },
  {
    title: 'Project Lead',
    company: 'Duke Applied Machine Learning',
    location: 'Durham, NC',
    period: 'Sep 2024 – Present',
    description: [
      'Built models (logistic regression, random forest, XGBoost) to predict customer churn; identified contract length and usage patterns as key drivers',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Miami Jewish Health',
    location: 'Miami, FL',
    period: 'May 2023 – Aug 2023',
    description: [
      'Developed patient portal features using React and Node.js, serving 500+ daily active users across the healthcare facility',
      'Implemented JWT authentication and role-based access control, securing sensitive medical data for compliance with HIPAA standards',
    ],
  },
]

const Experience = memo(({ theme }: ExperienceProps) => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          style={{ 
            marginBottom: index !== experiences.length - 1 ? '64px' : '0',
            transition: 'transform 0.2s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(4px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)'
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: theme.text,
              marginBottom: '4px',
              letterSpacing: '-0.01em',
              transition: 'color 0.3s',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {exp.title}
            </h3>
            <p style={{
              fontSize: '13px',
              color: theme.textMuted,
              marginBottom: '4px',
              transition: 'color 0.3s',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {exp.company}
            </p>
            <p style={{
              fontSize: '13px',
              color: theme.textDark,
              transition: 'color 0.3s',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {exp.period} • {exp.location}
            </p>
          </div>

          {/* Description */}
          <ul style={{ paddingLeft: '20px' }}>
            {exp.description.map((item, idx) => (
              <li key={idx} style={{
                fontSize: '14px',
                color: theme.textMuted,
                marginBottom: '8px',
                lineHeight: '1.5',
                transition: 'color 0.3s',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
})

Experience.displayName = 'Experience'

export default Experience
