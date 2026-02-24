import { Github, ExternalLink } from 'lucide-react'
import { memo } from 'react'

const projects = [
  {
    title: 'GitFlow AI Analytics Platform',
    period: 'June 2025 – Present',
    description: 'Full-stack Git analytics platform with machine learning-powered merge conflict prediction and ROI calculation engine for engineering bottlenecks.',
    highlights: [
      'Architected full-stack application (React, TypeScript, Node.js, PostgreSQL, Docker) that ingests GitHub repository data via OAuth, tracking commit patterns, PR cycles, and code review metrics for 100+ active repositories',
      'Trained LightGBM classifier on 10K+ historical commits to predict merge conflicts with 76% accuracy using features like branch age, file change overlap, and contributor patterns',
      'Developed ROI calculation engine to quantify engineering bottlenecks and project cost savings',
      'Implemented CI/CD pipeline with GitHub Actions and comprehensive monitoring',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'ML', 'CI/CD'],
    githubUrl: 'https://github.com/FelipeSanch/gitflow',
    liveUrl: '',
  },
]

interface ProjectsProps {
  theme: {
    text: string
    textMuted: string
    textDark: string
  }
}

const Projects = memo(({ theme }: ProjectsProps) => {
  return (
    <div>
      {projects.map((project, index) => (
        <div 
          key={index} 
          style={{ 
            marginBottom: index !== projects.length - 1 ? '64px' : '0',
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
              {project.title}
            </h3>
            <p style={{
              fontSize: '13px',
              color: theme.textDark,
              transition: 'color 0.3s',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {project.period}
            </p>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            color: theme.textMuted,
            lineHeight: '1.6',
            marginBottom: '14px',
            transition: 'color 0.3s',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {project.description}
          </p>

          {/* Highlights */}
          <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
            {project.highlights.map((item, idx) => (
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

          {/* Tags */}
          <p style={{
            fontSize: '13px',
            color: theme.textDark,
            marginBottom: '16px',
            transition: 'color 0.3s',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {project.tags.join(' / ')}
          </p>

          {/* Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                color: theme.textMuted,
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontFamily: 'JetBrains Mono, monospace'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  color: theme.textMuted,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontFamily: 'JetBrains Mono, monospace'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
                onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
})

Projects.displayName = 'Projects'

export default Projects
