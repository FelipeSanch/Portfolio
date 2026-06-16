import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { Theme, ACCENT, MONO } from '../theme'
import AsciiSphere from './AsciiSphere'

interface HeroProps {
  theme: Theme
}

const socials = [
  { href: 'https://github.com/FelipeSanch', label: 'GitHub', Icon: Github },
  { href: 'https://x.com/FelipeSanch0826', label: 'X', Icon: FaXTwitter },
  { href: 'https://linkedin.com/in/felipesanchez-noguera', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:fs172@duke.edu', label: 'Email', Icon: Mail },
]

const Hero = ({ theme }: HeroProps) => {
  const fullName = 'Felipe Sanchez.'
  const [typed, setTyped] = useState('')
  const [caret, setCaret] = useState(true)

  useEffect(() => {
    let i = 0
    const start = setTimeout(() => {
      const id = setInterval(() => {
        if (i <= fullName.length) {
          setTyped(fullName.slice(0, i))
          i++
        } else {
          clearInterval(id)
        }
      }, 70)
    }, 250)
    return () => clearTimeout(start)
  }, [])

  useEffect(() => {
    const blink = setInterval(() => setCaret((c) => !c), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '64px 0',
      }}
    >
      <AsciiSphere
        className="hero-ascii"
        style={{
          position: 'absolute',
          right: '-92px',
          top: '58%',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}
      />

      <p style={{ fontSize: '15px', color: ACCENT, marginBottom: '20px', fontFamily: MONO, position: 'relative', zIndex: 1 }}>
        Hi, my name is
      </p>

      <h1
        style={{
          fontSize: 'clamp(32px, 6vw, 54px)',
          fontWeight: 700,
          color: theme.text,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          fontFamily: MONO,
          minHeight: 'clamp(36px, 6.5vw, 58px)',
          transition: 'color 0.3s',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {typed}
        <span style={{ color: ACCENT, opacity: caret ? 1 : 0, fontWeight: 400 }}>|</span>
      </h1>

      <h2
        style={{
          fontSize: 'clamp(18px, 3.4vw, 30px)',
          fontWeight: 700,
          color: theme.textDark,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          marginTop: '10px',
          fontFamily: MONO,
          transition: 'color 0.3s',
          position: 'relative',
          zIndex: 1,
        }}
      >
        I build full-stack & AI systems.
      </h2>

      <p
        style={{
          fontSize: '15px',
          color: theme.textMuted,
          lineHeight: 1.7,
          maxWidth: '560px',
          marginTop: '24px',
          fontFamily: MONO,
          transition: 'color 0.3s',
          position: 'relative',
          zIndex: 1,
        }}
      >
        CS &amp; Mathematics double major at Duke University. I build full-stack
        applications and multi-agent AI systems, with a background spanning software
        engineering, data, and venture.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginTop: '36px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 500,
            color: ACCENT,
            textDecoration: 'none',
            border: `1px solid ${ACCENT}`,
            borderRadius: '8px',
            padding: '11px 20px',
            fontFamily: MONO,
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = ACCENT
            e.currentTarget.style.color = theme.bg
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = ACCENT
          }}
        >
          Let&apos;s Connect
          <ArrowUpRight size={16} />
        </a>

        <div style={{ display: 'flex', gap: '18px' }}>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              style={{ color: theme.textMuted, display: 'inline-flex', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
