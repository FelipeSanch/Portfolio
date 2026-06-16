import { Theme, MONO } from '../theme'

interface SectionHeaderProps {
  title: string
  theme: Theme
}

/* "Experience ──────────────" style heading with a trailing rule. */
const SectionHeader = ({ title, theme }: SectionHeaderProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '40px',
    }}
  >
    <h2
      style={{
        fontSize: '26px',
        fontWeight: 700,
        color: theme.text,
        letterSpacing: '-0.02em',
        fontFamily: MONO,
        whiteSpace: 'nowrap',
        transition: 'color 0.3s',
      }}
    >
      {title}
    </h2>
    <span
      style={{
        flex: 1,
        height: '1px',
        background: theme.border,
        transition: 'background 0.3s',
      }}
    />
  </div>
)

export default SectionHeader
