import { useEffect, useRef, memo } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  life: number
  maxLife: number
  hue: number
}

const InteractiveBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, down: false })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      
      // Add particles on move
      if (Math.random() < 0.3) {
        addParticle(e.clientX, e.clientY)
      }
    }

    const handleMouseDown = () => {
      mouseRef.current.down = true
      // Burst on click
      for (let i = 0; i < 20; i++) {
        addParticle(mouseRef.current.x, mouseRef.current.y, true)
      }
    }

    const handleMouseUp = () => {
      mouseRef.current.down = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Add particle
    const addParticle = (x: number, y: number, burst = false) => {
      const angle = burst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2
      const speed = burst ? Math.random() * 3 + 2 : Math.random() * 0.5 + 0.5
      
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: burst ? Math.random() * 3 + 2 : Math.random() * 2 + 1,
        life: 0,
        maxLife: burst ? 60 : 120,
        hue: Math.random() < 0.5 ? 180 : 270, // Cyan or Purple
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.02 // Slight gravity
        particle.life++

        const alpha = 1 - particle.life / particle.maxLife
        if (alpha <= 0) return false

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.8})`
        ctx.fill()

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.3})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)'
      ctx.lineWidth = 1
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.5
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw morphing blob following mouse
      const time = Date.now() * 0.002
      const points = 8
      const radius = 150
      
      ctx.beginPath()
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2
        const offset = Math.sin(time + i) * 30
        const x = mouseRef.current.x + Math.cos(angle) * (radius + offset)
        const y = mouseRef.current.y + Math.sin(angle) * (radius + offset)
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, radius
      )
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.15)')
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)')
      ctx.fillStyle = gradient
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
})

InteractiveBackground.displayName = 'InteractiveBackground'

export default InteractiveBackground

