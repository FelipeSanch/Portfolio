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
        bg: '#0d0d0d',
        bgElevated: '#141414',
        text: '#fafafa',
        textMuted: '#a3a3a3',
        textDark: '#6b6b6b',
        border: '#262626',
        card: '#141414',
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
