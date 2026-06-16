import { GraduationCap } from 'lucide-react'
import { Theme, ACCENT, MONO } from '../theme'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

interface EducationProps {
  theme: Theme
}

const coursework = [
  'Computer Architecture',
  'Data Structures & Algorithms',
  'Databases',
  'Machine Learning',
]

const Education = ({ theme }: EducationProps) => (
  <section id="education" style={{ padding: '72px 0' }}>
    <Reveal>
      <SectionHeader title="Education" theme={theme} />
    </Reveal>

    <Reveal delay={60}>
      <div
        style={{
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: '12px',
          padding: '24px 26px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap size={18} color={ACCENT} />
            <span style={{ fontSize: '17px', fontWeight: 700, color: ACCENT, fontFamily: MONO }}>
              Duke University
            </span>
          </div>
          <span style={{ fontSize: '12px', color: theme.textDark, fontFamily: MONO, whiteSpace: 'nowrap' }}>
            Aug 2024 – May 2028
          </span>
        </div>

        {/* Degree + meta */}
        <p style={{ fontSize: '14px', color: theme.textMuted, marginTop: '12px', fontFamily: MONO }}>
          B.S. in Computer Science &amp; Mathematics
          <span style={{ color: theme.textDark }}> · Double Major</span>
        </p>
        <p style={{ fontSize: '13px', color: theme.textDark, marginTop: '6px', fontFamily: MONO }}>
          Durham, NC · GPA 3.60 / 4.00
        </p>

        {/* Coursework */}
        <p
          style={{
            fontSize: '11px',
            color: theme.textDark,
            marginTop: '22px',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontFamily: MONO,
          }}
        >
          Relevant Coursework
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {coursework.map((course) => (
            <span
              key={course}
              style={{
                fontSize: '12px',
                color: theme.pillText,
                background: theme.pillBg,
                border: '1px solid rgba(6,182,212,0.2)',
                borderRadius: '6px',
                padding: '4px 11px',
                fontFamily: MONO,
              }}
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
)

export default Education
