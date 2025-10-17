import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements with cursor interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700 transition-transform duration-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative group perspective-1000">
              {/* Floating animated orbs around photo */}
              <div className="absolute -inset-8 opacity-60">
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse delay-700"></div>
                <div className="absolute bottom-0 left-1/2 w-28 h-28 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '1400ms' }}></div>
              </div>
              
              {/* Subtle glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"></div>
              
              {/* Photo container - floating box */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:shadow-blue-500/50 group-hover:-translate-y-2" 
                   style={{ 
                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                     animation: 'float 6s ease-in-out infinite'
                   }}>
                <img 
                  src="/profile.jpg" 
                  alt="Felipe Sanchez" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute -z-10 top-1/4 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -z-10 bottom-1/4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -z-10 top-3/4 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-2 md:order-2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Felipe Sanchez
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-blue-200 font-medium">
              CS & Mathematics @ Duke University
            </p>
            <p className="text-lg mb-2 text-gray-300">
              Hi, I'm a Duke sophomore passionate about software engineering, data analytics, and building tech with real-world impact.
            </p>
            <p className="text-base mb-8 text-gray-400">
              Specializing in full-stack development, machine learning, and creating solutions that drive measurable results.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 font-medium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FileText size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Resume</span>
              </a>
              <a
                href="mailto:fs172@duke.edu"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 font-medium transform hover:-translate-y-1 hover:scale-105"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/felipesanchez-noguera"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 font-medium transform hover:-translate-y-1 hover:scale-105"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/FelipeSanch"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 font-medium transform hover:-translate-y-1 hover:scale-105"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>
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
}

export default Hero

