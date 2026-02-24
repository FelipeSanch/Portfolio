import { memo } from 'react'

interface ToolsProps {
  theme: {
    bg: string
    text: string
    textMuted: string
  }
}

// Frontend tools
const frontendTools = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
]

// Backend tools
const backendTools = [
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
]

const Tools = memo(({ theme }: ToolsProps) => {
  const isDark = theme.bg === '#111111'

  return (
    <div>
      {/* FRONTEND SECTION */}
      <h3 style={{
        fontSize: '12px',
        fontWeight: '600',
        color: theme.text,
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        transition: 'color 0.3s',
        fontFamily: 'JetBrains Mono, monospace'
      }}>
        Frontend
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '16px',
        marginBottom: '48px'
      }}>
        {frontendTools.map((tool) => (
          <div
            key={tool.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'default'
            }}
          >
            <div
              style={{
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  filter: (tool.name === 'Next.js' && isDark) ? 'invert(1)' : 'none',
                  transition: 'filter 0.3s'
                }}
              />
            </div>
            <span style={{
              fontSize: '13px',
              color: theme.textMuted,
              fontWeight: '500',
              textAlign: 'center',
              transition: 'color 0.3s',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      {/* BACKEND SECTION - NOW WITH ICONS */}
      <h3 style={{
        fontSize: '12px',
        fontWeight: '600',
        color: theme.text,
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        transition: 'color 0.3s',
        fontFamily: 'JetBrains Mono, monospace'
      }}>
        Backend and Infrastructure
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '16px'
      }}>
        {backendTools.map((tool) => (
          <div
            key={tool.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'default'
            }}
          >
            <div
              style={{
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  filter: ((tool.name === 'Express' || tool.name === 'Linux') && isDark) ? 'invert(1)' : 'none',
                  transition: 'filter 0.3s'
                }}
              />
            </div>
            <span style={{
              fontSize: '13px',
              color: theme.textMuted,
              fontWeight: '500',
              textAlign: 'center',
              transition: 'color 0.3s',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})

Tools.displayName = 'Tools'

export default Tools
