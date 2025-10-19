import { useEffect, useRef, useState, useMemo } from 'react'

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      ),
    []
  )

  useEffect(() => {
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [observer])

  return { ref, isVisible }
}

