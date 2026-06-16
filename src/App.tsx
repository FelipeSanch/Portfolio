import { useState, useEffect } from 'react'
import { getTheme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  const [isDark, setIsDark] = useState(true)
  const theme = getTheme(isDark)

  useEffect(() => {
    document.body.style.background = theme.bg
  }, [theme.bg])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme.bg,
        transition: 'background 0.3s',
      }}
    >
      <Navbar theme={theme} isDark={isDark} toggleTheme={() => setIsDark((d) => !d)} />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <Hero theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Leadership theme={theme} />
        <Education theme={theme} />
        <Skills theme={theme} />
      </main>
    </div>
  )
}

export default App
