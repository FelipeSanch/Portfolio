import { useEffect, useRef, memo } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const ParticlesBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }
    setCanvasSize()

    // Create particles
    const particleCount = 60
    const particles: Particle[] = []
    const maxDistance = 150

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 1.5 + 1.5, // Smaller: 1.5-3px
      })
    }

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle with glow effect
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(96, 165, 250, 0.6)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        )
        gradient.addColorStop(0, 'rgba(147, 197, 253, 0.9)') // blue-300
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.6)') // blue-600
        
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const opacity = (1 - distance / maxDistance) * 0.3
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})` // blue-400
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        // Connect to mouse if within range
        const dxMouse = p1.x - mouseX
        const dyMouse = p1.y - mouseY
        const distanceToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distanceToMouse < 140) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouseX, mouseY)
          const opacity = (1 - distanceToMouse / 140) * 0.4
          ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})` // blue-300 for mouse interaction
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      // Reinitialize particle positions
      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, canvas.width)
        particle.y = Math.min(particle.y, canvas.height)
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'auto'
      }}
    />
  )
})

ParticlesBackground.displayName = 'ParticlesBackground'

export default ParticlesBackground
