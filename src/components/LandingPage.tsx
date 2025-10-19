import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DiamondBackground from './DiamondBackground'

interface LandingPageProps {
  onEnter: () => void
}

const LandingPage = memo(({ onEnter }: LandingPageProps) => {
  const [triggerRipple, setTriggerRipple] = useState(false)
  const [showText, setShowText] = useState(true)

  const handleClick = () => {
    setTriggerRipple(true)
    setShowText(false)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      {/* Diamond Background */}
      <DiamondBackground 
        onTransitionComplete={onEnter}
        triggerRipple={triggerRipple}
      />

      {/* Text content */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="relative z-10 text-center px-4 select-none pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Name - Elegant and refined */}
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span 
                className="text-white"
                style={{
                  textShadow: "0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(6, 182, 212, 0.15), 0 2px 4px rgba(0, 0, 0, 0.3)"
                }}
              >
                Felipe Sanchez
              </span>
            </motion.h1>

            {/* Subtle divider */}
            <motion.div
              className="w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            {/* Subtitle - More refined */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-16 font-light tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
              }}
            >
              Software Engineer & CS Student
            </motion.p>

            {/* Elegant instruction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 text-base tracking-wider uppercase"
              style={{
                letterSpacing: "0.15em"
              }}
            >
              <p className="mb-3">Click to enter</p>
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-cyan-400/60"
              >
                ◆
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-slate-950 opacity-40" />
    </motion.div>
  )
})

LandingPage.displayName = 'LandingPage'

export default LandingPage
