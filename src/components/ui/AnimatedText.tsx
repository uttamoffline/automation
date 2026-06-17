import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'span'
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Component = motion[as] as typeof motion.div

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}

interface CounterProps {
  target: number
  suffix?: string
  label: string
}

export function StatCounter({ target, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1500
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-[var(--color-muted)] tracking-wide">{label}</div>
    </div>
  )
}
