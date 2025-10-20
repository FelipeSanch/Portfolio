import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = memo(() => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Scroll Percentage Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white font-bold text-sm z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: scrollProgress > 5 ? 1 : 0, 
          opacity: scrollProgress > 5 ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        {Math.round(scrollProgress)}%
      </motion.div>
    </>
  )
})

ScrollProgress.displayName = 'ScrollProgress'

export default ScrollProgress

