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
    title: 'Asset Management Intern',
    company: 'MasTec',
    location: 'Coral Gables, FL',
    period: 'May 2025 – Aug 2025',
    description: [
      'Analyzed SEC filings (10-K, 10-Q, 8-K) for 40+ companies at Fortune 500 infrastructure firm',
      'Built Python scripts to automate data extraction, reducing manual review time for financial analysis',
    ],
  },
  {
    title: 'ML Team Member',
    company: 'Duke Applied Machine Learning',
    location: 'Durham, NC',
    period: 'Sep 2024 – Present',
    description: [
      'Built predictive models (logistic regression, random forest, XGBoost) for customer churn analysis',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Miami Jewish Health',
    location: 'Miami, FL',
    period: 'May 2023 – Aug 2023',
    description: [
      'Developed React components and RESTful APIs for healthcare applications',
      'Implemented JWT-based authentication in Node.js/Express environment',
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
