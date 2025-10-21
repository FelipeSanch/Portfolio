import { Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react'
import { memo } from 'react'

interface LandingProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  theme: {
    bg: string
    text: string
    textMuted: string
    textDark: string
    border: string
  }
  isDark: boolean
  toggleTheme: () => void
}

const Landing = memo(({ activeTab, setActiveTab, theme, isDark, toggleTheme }: LandingProps) => {
  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'tools', label: 'Tools' },
  ]

  return (
    <div style={{ 
      borderBottom: `1px solid ${theme.border}`,
      padding: '48px 24px 0 24px',
      transition: 'border-color 0.3s'
    }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ 
                fontSize: '28px',
                fontWeight: '700',
                color: theme.text,
                marginBottom: '10px',
                letterSpacing: '-0.02em',
                transition: 'color 0.3s'
              }}>
                Felipe Sanchez
              </h1>
              <p style={{ 
                fontSize: '14px',
                color: theme.textMuted,
                lineHeight: '1.6',
                marginBottom: '20px',
                transition: 'color 0.3s'
              }}>
                CS & Math @ Duke University. Building scalable full-stack applications, ML-powered solutions, and data-driven systems.
              </p>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                color: theme.textMuted,
                cursor: 'pointer',
                padding: '8px',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://github.com/FelipeSanch"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/felipesanchez-noguera"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:fs172@duke.edu"
              style={{ color: theme.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              download
              style={{ color: theme.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav style={{ display: 'flex', gap: '0', borderBottom: `1px solid ${theme.border}`, transition: 'border-color 0.3s' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: activeTab === tab.id ? theme.text : theme.textDark,
                background: 'none',
                border: 'none',
                padding: '0 0 16px 0',
                marginRight: '32px',
                cursor: 'pointer',
                borderBottom: activeTab === tab.id ? '2px solid #06b6d4' : 'none',
                transition: 'color 0.2s, border-color 0.2s',
                fontFamily: 'JetBrains Mono, monospace'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#06b6d4'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = theme.textDark
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
    </div>
  )
})

Landing.displayName = 'Landing'

export default Landing

