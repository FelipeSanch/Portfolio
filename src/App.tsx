import { useState } from 'react'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Tools from './components/Tools'

function App() {
  const [activeTab, setActiveTab] = useState('projects')
  const [isDark, setIsDark] = useState(true)

  // Theme colors - only bg and text change
  const theme = {
    bg: isDark ? '#111111' : '#ffffff',
    text: isDark ? '#ffffff' : '#000000',
    textMuted: isDark ? '#a3a3a3' : '#666666',
    textDark: isDark ? '#737373' : '#999999',
    border: isDark ? '#2a2a2a' : '#e5e5e5',
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.bg, transition: 'background-color 0.3s' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Landing 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          theme={theme}
          isDark={isDark}
          toggleTheme={() => setIsDark(!isDark)}
        />
        
        <div style={{ padding: '64px 24px' }}>
          {activeTab === 'projects' && <Projects theme={theme} />}
          {activeTab === 'experience' && <Experience theme={theme} />}
          {activeTab === 'tools' && <Tools theme={theme} />}
        </div>
      </div>
    </div>
  )
}

export default App

