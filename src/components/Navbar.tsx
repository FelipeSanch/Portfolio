import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Theme, ACCENT, MONO } from '../theme'

interface NavbarProps {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'play', label: 'Play' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = ({ theme, isDark, toggleTheme }: NavbarProps) => {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: isDark ? 'rgba(24,24,27,0.72)' : 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.border}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <a
          href="#top"
          style={{ fontSize: '14px', fontWeight: 700, color: ACCENT, textDecoration: 'none', fontFamily: MONO, flexShrink: 0 }}
        >
          felipesanchez
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', overflowX: 'auto' }}>
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: isActive ? theme.text : theme.textDark,
                  textDecoration: 'none',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontFamily: MONO,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = ACCENT
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = theme.textDark
                }}
              >
                {isActive && <span style={{ color: ACCENT }}>› </span>}
                {link.label}
              </a>
            )
          })}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: 'none',
              color: theme.textMuted,
              cursor: 'pointer',
              padding: '6px',
              marginLeft: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
            onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
