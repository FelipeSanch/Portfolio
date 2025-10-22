import { memo, useRef, useEffect } from 'react'

interface GameProps {
  theme: {
    bg: string
    text: string
    textMuted: string
    textDark: string
    border: string
  }
}

const Game = memo(({ theme }: GameProps) => {
  const isDark = theme.bg === '#111111'
  const iframeRef = useRef<HTMLIFrameElement>(null)
  
  useEffect(() => {
    // Auto-focus iframe when component mounts
    const timer = setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.focus()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div style={{ padding: '2rem 0' }}>
      <div
        style={{
          backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
          borderRadius: '8px',
          padding: '16px',
          border: `1px solid ${theme.border}`,
          transition: 'background-color 0.3s, border-color 0.3s'
        }}
      >
        {/* Terminal header with macOS dots */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '12px',
          paddingBottom: '12px',
          borderBottom: `1px solid ${theme.border}`,
          transition: 'border-color 0.3s'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
        </div>

        {/* Game iframe */}
        <iframe
          ref={iframeRef}
          src="/dino/index.html"
          style={{
            width: '100%',
            height: '400px',
            border: 'none',
            display: 'block',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
          title="Dino Game"
          scrolling="no"
        />
      </div>
    </div>
  )
})

Game.displayName = 'Game'

export default Game

