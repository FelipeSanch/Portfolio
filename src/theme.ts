export const ACCENT = '#06b6d4'

export interface Theme {
  bg: string
  bgElevated: string
  text: string
  textMuted: string
  textDark: string
  border: string
  card: string
  pillBg: string
  pillText: string
}

export const getTheme = (isDark: boolean): Theme =>
  isDark
    ? {
        bg: '#18181b',
        bgElevated: '#1f1f23',
        text: '#fafafa',
        textMuted: '#a1a1aa',
        textDark: '#71717a',
        border: '#2c2c31',
        card: '#1d1d20',
        pillBg: 'rgba(6, 182, 212, 0.1)',
        pillText: '#67e8f9',
      }
    : {
        bg: '#ffffff',
        bgElevated: '#fafafa',
        text: '#0a0a0a',
        textMuted: '#525252',
        textDark: '#a3a3a3',
        border: '#e5e5e5',
        card: '#fafafa',
        pillBg: 'rgba(6, 182, 212, 0.08)',
        pillText: '#0e7490',
      }

export const MONO = 'JetBrains Mono, monospace'
