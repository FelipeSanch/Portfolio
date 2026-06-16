import { ReactNode } from 'react'
import { Theme } from '../theme'

interface TimelineProps {
  theme: Theme
  children: ReactNode
}

/* Draws the continuous vertical rail; TimelineCard children render the dots. */
const Timeline = ({ theme, children }: TimelineProps) => (
  <div style={{ position: 'relative' }}>
    <span
      style={{
        position: 'absolute',
        left: '5px',
        top: '12px',
        bottom: '12px',
        width: '1px',
        background: theme.border,
        transition: 'background 0.3s',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {children}
    </div>
  </div>
)

export default Timeline
