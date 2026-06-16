import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
}

/* Fades + slides children up the first time they enter the viewport. */
const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' in-view' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
