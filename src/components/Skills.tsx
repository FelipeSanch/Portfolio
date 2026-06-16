import { Theme, ACCENT, MONO } from '../theme'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

interface SkillsProps {
  theme: Theme
}

interface Tool {
  name: string
  logo: string
  invertDark?: boolean // black logos (e.g. Next.js) need inverting on the dark theme
}

const dev = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`

const groups: { label: string; tools: Tool[] }[] = [
  {
    label: 'Programming Languages',
    tools: [
      { name: 'Python', logo: dev('python/python-original') },
      { name: 'TypeScript', logo: dev('typescript/typescript-original') },
      { name: 'JavaScript', logo: dev('javascript/javascript-original') },
      { name: 'Java', logo: dev('java/java-original') },
      { name: 'C++', logo: dev('cplusplus/cplusplus-original') },
      { name: 'C', logo: dev('c/c-original') },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    tools: [
      { name: 'React', logo: dev('react/react-original') },
      { name: 'Next.js', logo: dev('nextjs/nextjs-original'), invertDark: true },
      { name: 'Node.js', logo: dev('nodejs/nodejs-original') },
      { name: 'FastAPI', logo: dev('fastapi/fastapi-original') },
      { name: 'Tailwind CSS', logo: dev('tailwindcss/tailwindcss-original') },
      { name: 'pandas', logo: dev('pandas/pandas-original') },
    ],
  },
  {
    label: 'Infrastructure & Tools',
    tools: [
      { name: 'PostgreSQL', logo: dev('postgresql/postgresql-original') },
      { name: 'Neon', logo: 'https://cdn.simpleicons.org/neon/00E599' },
      { name: 'Redis', logo: dev('redis/redis-original') },
      { name: 'Docker', logo: dev('docker/docker-original') },
      { name: 'Git', logo: dev('git/git-original') },
      { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
      { name: 'Railway', logo: 'https://cdn.simpleicons.org/railway/A1A1AA' },
      { name: 'Twilio', logo: dev('twilio/twilio-original') },
    ],
  },
]

const spokenLanguages = ['English', 'Spanish']

const Skills = ({ theme }: SkillsProps) => {
  const isDark = theme.bg === '#18181b'

  return (
    <section id="skills" style={{ padding: '72px 0' }}>
      <Reveal>
        <SectionHeader title="Skills" theme={theme} />
      </Reveal>

      {groups.map((group, gi) => (
        <Reveal key={group.label} delay={gi * 60}>
          <div style={{ marginBottom: '44px' }}>
            <h3
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: theme.textDark,
                marginBottom: '22px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontFamily: MONO,
              }}
            >
              {group.label}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
                gap: '18px',
              }}
            >
              {group.tools.map((tool) => (
                <div
                  key={tool.name}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '9px' }}
                >
                  <div
                    style={{ transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer' }}
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
                      loading="lazy"
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain',
                        filter: tool.invertDark && isDark ? 'invert(1)' : 'none',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '12.5px',
                      color: theme.textMuted,
                      fontWeight: 500,
                      textAlign: 'center',
                      fontFamily: MONO,
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      {/* Spoken languages */}
      <Reveal delay={groups.length * 60}>
        <div>
          <h3
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: theme.textDark,
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontFamily: MONO,
            }}
          >
            Spoken Languages
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
            {spokenLanguages.map((lang) => (
              <span
                key={lang}
                style={{
                  fontSize: '13px',
                  color: ACCENT,
                  background: theme.pillBg,
                  border: '1px solid rgba(6,182,212,0.25)',
                  borderRadius: '7px',
                  padding: '6px 14px',
                  fontFamily: MONO,
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Skills
