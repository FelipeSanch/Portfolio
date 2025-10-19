import { useEffect, useRef, memo } from 'react'

interface Diamond {
  x: number
  y: number
  size: number
  rotation: number
  targetRotation: number
  rippleDelay: number
  rippleStarted: boolean
  rippleProgress: number
  hue: number
  originalX: number
  originalY: number
  randomAngleOffset: number
  randomDrift: number
}

interface DiamondBackgroundProps {
  onTransitionComplete: () => void
  triggerRipple: boolean
}

const DiamondBackground = memo(({ onTransitionComplete, triggerRipple }: DiamondBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const diamondsRef = useRef<Diamond[]>([])
  const animationRef = useRef<number>()
  const clickPosRef = useRef({ x: 0, y: 0 })
  const transitionTriggeredRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Reset transition flag
    transitionTriggeredRef.current = false

    // Initialize diamonds in an elegant grid pattern
    const initDiamonds = () => {
      diamondsRef.current = []
      const spacing = 70 // Perfect spacing for elegant look
      const cols = Math.ceil(canvas.width / spacing) + 3
      const rows = Math.ceil(canvas.height / spacing) + 3

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + (row % 2) * (spacing / 2) - spacing * 1.5
          const y = row * spacing - spacing * 1.5
          
          diamondsRef.current.push({
            x,
            y,
            size: 32, // Refined size
            rotation: 0, // Vertically upright
            targetRotation: 0,
            rippleDelay: 0,
            rippleStarted: false,
            rippleProgress: 0,
            hue: 215, // Deep elegant blue
            originalX: x,
            originalY: y,
            randomAngleOffset: (Math.random() - 0.5) * 0.12,
            randomDrift: (Math.random() - 0.5) * 25,
          })
        }
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDiamonds()
    }
    resize()
    window.addEventListener('resize', resize)

    const drawDiamond = (x: number, y: number, size: number, rotation: number, alpha: number, hue: number, shatter = false) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)

      // Draw refined diamond shape
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.lineTo(size * 0.65, 0)
      ctx.lineTo(0, size)
      ctx.lineTo(-size * 0.65, 0)
      ctx.closePath()

      // Elegant fill with subtle gradient effect
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
      gradient.addColorStop(0, `hsla(${hue}, 35%, 25%, ${alpha * 0.15})`)
      gradient.addColorStop(0.7, `hsla(${hue}, 30%, 20%, ${alpha * 0.25})`)
      gradient.addColorStop(1, `hsla(${hue}, 35%, 30%, ${alpha * 0.1})`)
      ctx.fillStyle = gradient
      ctx.fill()

      // Crisp refined edge
      ctx.strokeStyle = `hsla(${hue}, 45%, 55%, ${alpha * 0.6})`
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Inner crystalline structure - more elegant
      if (!shatter && alpha > 0.6) {
        ctx.strokeStyle = `hsla(${hue}, 40%, 50%, ${alpha * 0.2})`
        ctx.lineWidth = 0.8
        ctx.beginPath()
        ctx.moveTo(0, -size * 0.6)
        ctx.lineTo(0, size * 0.6)
        ctx.moveTo(-size * 0.4, 0)
        ctx.lineTo(size * 0.4, 0)
        ctx.stroke()
        
        // Subtle corner accents
        ctx.strokeStyle = `hsla(${hue}, 50%, 65%, ${alpha * 0.25})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(0, -size)
        ctx.lineTo(size * 0.15, -size * 0.5)
        ctx.moveTo(0, size)
        ctx.lineTo(size * 0.15, size * 0.5)
        ctx.stroke()
      }

      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      // Darker, more sophisticated background
      ctx.fillStyle = 'rgba(3, 7, 18, 0.4)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      diamondsRef.current.forEach(diamond => {
        // Idle - elegant subtle pulse
        if (!diamond.rippleStarted) {
          const time = Date.now() * 0.0008 // Slower, more refined
          const pulse = Math.sin(time + diamond.originalX * 0.008 + diamond.originalY * 0.005) * 0.3
          diamond.size = 32 + pulse
        }

        // Elegant shattering ripple effect
        if (triggerRipple) {
          if (!diamond.rippleStarted) {
            // Calculate distance from click point
            const dx = diamond.x - clickPosRef.current.x
            const dy = diamond.y - clickPosRef.current.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            diamond.rippleDelay = distance / 1000 // Slower, more elegant wave
            diamond.rippleStarted = true
          }

          if (diamond.rippleDelay <= 0) {
            diamond.rippleProgress = Math.min(1, diamond.rippleProgress + 0.016) // Cap at 1
            
            // Smooth, controlled rotation with easing
            const rotationEase = Math.sin(diamond.rippleProgress * Math.PI * 0.5)
            diamond.rotation += 12 * (1 - diamond.rippleProgress) * rotationEase
            
            // Elegant outward motion with smooth acceleration
            const explosionForce = Math.pow(diamond.rippleProgress, 2.2) * 450
            
            const dx = diamond.originalX - clickPosRef.current.x
            const dy = diamond.originalY - clickPosRef.current.y
            const angle = Math.atan2(dy, dx) + diamond.randomAngleOffset
            
            diamond.x = diamond.originalX + Math.cos(angle) * (explosionForce + diamond.randomDrift)
            diamond.y = diamond.originalY + Math.sin(angle) * (explosionForce + diamond.randomDrift) + Math.pow(diamond.rippleProgress, 1.8) * 70
            
            // Smooth fade and shrink with easing
            const fadeScale = 1 - Math.pow(diamond.rippleProgress, 1.5) * 0.35
            const scaledSize = diamond.size * fadeScale
            const alpha = Math.max(0, Math.pow(1 - diamond.rippleProgress, 1.2))
            
            drawDiamond(diamond.x, diamond.y, scaledSize, diamond.rotation, alpha, diamond.hue, true)
          } else {
            diamond.rippleDelay -= 0.016
            drawDiamond(diamond.x, diamond.y, diamond.size, diamond.rotation, 1, diamond.hue)
          }
        } else {
          drawDiamond(diamond.x, diamond.y, diamond.size, diamond.rotation, 1, diamond.hue)
        }
      })

      // Check if transition is complete - smooth handoff (only trigger once)
      if (triggerRipple && !transitionTriggeredRef.current && diamondsRef.current.every(d => d.rippleProgress >= 0.9)) {
        transitionTriggeredRef.current = true
        // Immediate transition for seamless feel
        setTimeout(() => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
          }
          onTransitionComplete()
        }, 100)
        return
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [triggerRipple, onTransitionComplete])

  const handleClick = (e: React.MouseEvent) => {
    clickPosRef.current = { x: e.clientX, y: e.clientY }
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  )
})

DiamondBackground.displayName = 'DiamondBackground'

export default DiamondBackground

