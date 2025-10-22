import { Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react'
import { memo, useState, useEffect } from 'react'

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
    { id: 'game', label: 'Play' },
  ]

  const fullName = "Felipe Sanchez"
  const [displayedName, setDisplayedName] = useState("")
  const [showCaret, setShowCaret] = useState(true)

  // Typewriter effect
  useEffect(() => {
    let index = 0
    let typingInterval: number | undefined

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayedName(fullName.slice(0, index))
          index++
        } else {
          clearInterval(typingInterval)
        }
      }, 80)
    }

    // Start typing after a brief delay
    const startDelay = setTimeout(startTyping, 200)

    // Cleanup
    return () => {
      clearTimeout(startDelay)
      if (typingInterval) clearInterval(typingInterval)
    }
  }, [])

  // Caret blinking effect
  useEffect(() => {
    const caretTimer = setInterval(() => {
      setShowCaret(prev => !prev)
    }, 530)
    return () => clearInterval(caretTimer)
  }, [])

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
                transition: 'color 0.3s',
                fontFamily: 'JetBrains Mono, monospace',
                minHeight: '38px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span>{displayedName}</span>
                <span style={{ 
                  color: '#06b6d4',
                  opacity: showCaret && displayedName.length > 0 ? 1 : 0,
                  transition: 'opacity 0.15s ease',
                  marginLeft: '2px'
                }}>
                  |
                </span>
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

