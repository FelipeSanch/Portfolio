import { useState } from 'react'
import { ChevronDown, Github, ArrowUpRight, ExternalLink, LucideIcon } from 'lucide-react'
import { Theme, ACCENT, MONO } from '../theme'

export interface Bullet {
  icon?: LucideIcon
  text: string
  tags?: string[]
}

export interface CardLink {
  type: 'github' | 'live'
  href: string
}

interface TimelineCardProps {
  theme: Theme
  title: string
  titleHref?: string
  period: string
  role?: string
  meta?: string
  summary: string
  bullets: Bullet[]
  tags?: string[]
  links?: CardLink[]
  demo?: React.ReactNode
  defaultOpen?: boolean
}

const TimelineCard = ({
  theme,
  title,
  titleHref,
  period,
  role,
  meta,
  summary,
  bullets,
  tags,
  links,
  demo,
  defaultOpen = false,
}: TimelineCardProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const [hover, setHover] = useState(false)

  const pillStyle: React.CSSProperties = {
    fontSize: '11px',
    color: theme.pillText,
    background: theme.pillBg,
    border: '1px solid rgba(6,182,212,0.2)',
    borderRadius: '6px',
    padding: '3px 9px',
    fontFamily: MONO,
    whiteSpace: 'nowrap',
  }

  return (
    <div style={{ position: 'relative', paddingLeft: '34px' }}>
      {/* Timeline node */}
      <span
        style={{
          position: 'absolute',
          left: '0px',
          top: '24px',
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          border: `2px solid ${open || hover ? ACCENT : theme.textDark}`,
          background: open ? ACCENT : theme.bg,
          transition: 'border-color 0.25s, background 0.25s',
        }}
      />

      <div
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: theme.card,
          border: `1px solid ${hover ? 'rgba(6,182,212,0.35)' : theme.border}`,
          borderRadius: '12px',
          padding: '20px 22px',
          cursor: 'pointer',
          transition: 'border-color 0.25s, background 0.3s, transform 0.2s',
          transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {titleHref ? (
              <a
                href={titleHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: ACCENT,
                  textDecoration: 'none',
                  fontFamily: MONO,
                }}
              >
                {title}
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span style={{ fontSize: '16px', fontWeight: 700, color: ACCENT, fontFamily: MONO }}>
                {title}
              </span>
            )}

            {/* Inline project links */}
            {links?.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={link.type === 'github' ? 'GitHub repository' : 'Live demo'}
                style={{ color: theme.textDark, display: 'inline-flex', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = theme.textDark)}
              >
                {link.type === 'github' ? <Github size={15} /> : <ExternalLink size={15} />}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <span style={{ fontSize: '12px', color: theme.textDark, fontFamily: MONO, whiteSpace: 'nowrap' }}>
              {period}
            </span>
            <ChevronDown
              size={18}
              color={theme.textDark}
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s' }}
            />
          </div>
        </div>

        {/* Role / meta */}
        {role && (
          <p style={{ fontSize: '13px', color: theme.textMuted, marginTop: '8px', fontFamily: MONO }}>
            {role}
            {meta && <span style={{ color: theme.textDark }}> · {meta}</span>}
          </p>
        )}

        {/* Summary teaser */}
        <p style={{ fontSize: '14px', color: theme.textMuted, marginTop: '12px', lineHeight: 1.6, fontFamily: MONO }}>
          {summary}
        </p>

        {/* Expanded detail */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 0.35s ease, transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {bullets.map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ marginTop: '1px', flexShrink: 0, color: ACCENT }}>
                      {Icon ? <Icon size={16} color={ACCENT} /> : <span style={{ color: ACCENT }}>›</span>}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', minWidth: 0 }}>
                      <span style={{ fontSize: '13.5px', color: theme.textMuted, lineHeight: 1.65, fontFamily: MONO }}>
                        {b.text}
                      </span>
                      {b.tags && b.tags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                          {b.tags.map((tag) => (
                            <span key={tag} style={pillStyle}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {tags && tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
                {tags.map((tag) => (
                  <span key={tag} style={pillStyle}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {demo && (
              <div style={{ marginTop: '20px' }} onClick={(e) => e.stopPropagation()}>
                {demo}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineCard
