import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter = memo(({ end, duration = 2, prefix = '', suffix = '', className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animateCount)
  }, [inView, end, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  )
})

AnimatedCounter.displayName = 'AnimatedCounter'

export default AnimatedCounter

