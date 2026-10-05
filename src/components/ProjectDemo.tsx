import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Theme, ACCENT, MONO } from '../theme'

interface ProjectDemoProps {
  theme: Theme
  url: string
  label: string
}

// The site renders at a desktop viewport, then scales down to fit the card,
// so the preview shows the real desktop layout instead of a cramped mobile one.
const VIEWPORT_W = 1440
const VIEWPORT_H = 900

/* A live preview of a deployed project, framed like a browser window.
   The iframe is non-interactive (pointer-events: none) and a click overlay
   sits on top — so it can't hijack page scroll, and clicking opens the live
   site. Gives a real, animated preview without the jank of an embedded app. */
const ProjectDemo = ({ theme, url, label }: ProjectDemoProps) => {
  const [loaded, setLoaded] = useState(false)
  const [hover, setHover] = useState(false)
  const [scale, setScale] = useState(0)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / VIEWPORT_W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <div
      style={{
        border: `1px solid ${hover ? 'rgba(6,182,212,0.4)' : theme.border}`,
        borderRadius: '10px',
        overflow: 'hidden',
        background: theme.bg,
        transition: 'border-color 0.25s',
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '9px 12px',
          borderBottom: `1px solid ${theme.border}`,
          background: theme.bgElevated,
        }}
      >
        <div style={{ display: 'flex', gap: '7px', flexShrink: 0 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#eab308' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            textAlign: 'center',
            fontSize: '11.5px',
            color: theme.textDark,
            fontFamily: MONO,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {host}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11.5px',
            color: ACCENT,
            textDecoration: 'none',
            fontFamily: MONO,
            flexShrink: 0,
          }}
        >
          Open live
          <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Live preview + click overlay */}
      <div
        ref={frameRef}
        style={{
          position: 'relative',
          aspectRatio: `${VIEWPORT_W} / ${VIEWPORT_H}`,
          overflow: 'hidden',
          background: theme.bg,
        }}
      >
        {!loaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: theme.textDark,
              fontFamily: MONO,
            }}
          >
            loading live preview…
          </div>
        )}

        <iframe
          src={url}
          title={label}
          loading="lazy"
          tabIndex={-1}
          scrolling="no"
          onLoad={() => setLoaded(true)}
          style={{
            width: `${VIEWPORT_W}px`,
            height: `${VIEWPORT_H}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 'none',
            display: 'block',
            pointerEvents: 'none', // never traps scroll or reacts to the cursor
            opacity: loaded && scale ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />

        {/* Transparent click target → opens the live site; shows a hint on hover */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${label} in a new tab`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
            background: hover
              ? 'linear-gradient(180deg, rgba(24,24,27,0.1), rgba(24,24,27,0.55))'
              : 'transparent',
            transition: 'background 0.3s ease',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '13px',
              fontFamily: MONO,
              color: '#fff',
              background: ACCENT,
              padding: '9px 16px',
              borderRadius: '8px',
              opacity: hover ? 1 : 0,
              transform: hover ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              boxShadow: '0 6px 20px rgba(6,182,212,0.35)',
            }}
          >
            Open live demo
            <ArrowUpRight size={15} />
          </span>
        </a>
      </div>
    </div>
  )
}

export default ProjectDemo
