import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'
import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const Hero = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [text, setText] = useState('')
  const fullText = "Seeking SWE internships for Summer 2026"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [fullText.length])

  useEffect(() => {
    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden"
      style={{ position: 'relative', isolation: 'isolate' }}
    >
      {/* Particles Background */}
      <div className="absolute inset-0 opacity-70 pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        <ParticlesBackground />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Animated background elements with cursor interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative group">
              {/* Ambient glow */}
              <div className="absolute -inset-4 opacity-50">
                <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Glow ring on hover */}
              <div className="absolute -inset-1 bg-blue-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-blue-500/30" 
                   style={{ 
                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                   }}>
                <img 
                  src="/profile.jpg" 
                  alt="Felipe Sanchez" 
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

              {/* Right side - Text content */}
              <div className="order-2 md:order-2 text-center md:text-left">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Felipe Sanchez
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-3 text-blue-400 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  CS & Mathematics @ Duke University
                </motion.p>
                <motion.p 
                  className="text-lg mb-2 text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Sophomore interested in software engineering, data analytics, and ML applications.
                </motion.p>
                <div className="text-base mb-8 text-gray-400 h-6">
                  {text}<span className="animate-pulse">|</span>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-3 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50 font-medium"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
              <a
                href="mailto:fs172@duke.edu"
                className="group inline-flex items-center gap-2 bg-slate-800/80 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all border border-slate-700 font-medium"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/felipesanchez-noguera"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-slate-800/80 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all border border-slate-700 font-medium"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/FelipeSanch"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-slate-800/80 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all border border-slate-700 font-medium"
              >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  )
});

Hero.displayName = 'Hero';

export default Hero

