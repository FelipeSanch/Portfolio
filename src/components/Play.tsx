import { Theme, MONO } from '../theme'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Game from './Game'

interface PlayProps {
  theme: Theme
}

const Play = ({ theme }: PlayProps) => (
  <section id="play" style={{ padding: '72px 0' }}>
    <Reveal>
      <SectionHeader title="Play" theme={theme} />
    </Reveal>
    <Reveal delay={60}>
      <p
        style={{
          fontSize: '14px',
          color: theme.textMuted,
          lineHeight: 1.6,
          marginBottom: '20px',
          fontFamily: MONO,
        }}
      >
        Need a break? The classic Chrome dino, themed to match. Press space or ↑ to jump.
      </p>
      <Game theme={theme} />
    </Reveal>
  </section>
)

export default Play
