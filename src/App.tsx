import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import LandingPage from './components/LandingPage'

// Lazy load sections below the fold for better initial load performance
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Leadership = lazy(() => import('./components/Leadership'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [showLanding, setShowLanding] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {showLanding ? (
          <LandingPage key="landing" onEnter={() => setShowLanding(false)} />
        ) : null}
      </AnimatePresence>

      {!showLanding && (
        <motion.div 
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ScrollProgress />
          <Navbar isScrolled={isScrolled} />
          <Hero />
          <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Leadership />
            <Contact />
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </>
  )
}

export default App

