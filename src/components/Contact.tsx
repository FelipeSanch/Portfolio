import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { Theme, ACCENT, MONO } from '../theme'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import AsciiSphere from './AsciiSphere'

interface ContactProps {
  theme: Theme
}

const socials = [
  { href: 'https://github.com/FelipeSanch', label: 'GitHub', Icon: Github },
  { href: 'https://x.com/FelipeSanch0826', label: 'X', Icon: FaXTwitter },
  { href: 'https://linkedin.com/in/felipesanchez-noguera', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:fs172@duke.edu', label: 'Email', Icon: Mail },
]

const Contact = ({ theme }: ContactProps) => (
  <section id="contact" style={{ padding: '72px 0 56px', position: 'relative' }}>
    <Reveal>
      <SectionHeader title="Contact" theme={theme} />
    </Reveal>

    <Reveal delay={60}>
      <div style={{ position: 'relative', overflow: 'visible' }}>
        <AsciiSphere
          className="hero-ascii"
          cols={42}
          rows={22}
          fontSize={11}
          opacity={0.5}
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
          <h3
            style={{
              fontSize: 'clamp(24px, 4vw, 34px)',
              fontWeight: 700,
              color: theme.text,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              fontFamily: MONO,
            }}
          >
            Let&apos;s build something.
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: theme.textMuted,
              lineHeight: 1.7,
              marginTop: '16px',
              fontFamily: MONO,
            }}
          >
            I&apos;m always open to internships, collaborations, or just talking shop. The
            fastest way to reach me is email — I&apos;ll get back to you.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginTop: '30px', flexWrap: 'wrap' }}>
            <a
              href="mailto:fs172@duke.edu"
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
              Say Hello
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
        </div>
      </div>
    </Reveal>

    {/* Footer line */}
    <div
      style={{
        marginTop: '64px',
        paddingTop: '24px',
        borderTop: `1px solid ${theme.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <span style={{ fontSize: '12px', color: theme.textDark, fontFamily: MONO }}>
        © 2026 Felipe Sanchez
      </span>
      <span style={{ fontSize: '12px', color: theme.textDark, fontFamily: MONO }}>
        Built with React · TypeScript
      </span>
    </div>
  </section>
)

export default Contact
