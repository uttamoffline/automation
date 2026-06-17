import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { site } from '../../data/site'
import { StatCounter } from '../ui/AnimatedText'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const line = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ManifestoHero() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center section-padding pt-24 pb-16 relative"
    >
      <motion.h1
        className="font-display text-5xl md:text-7xl lg:text-8xl text-white text-center mb-16 md:mb-24 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {site.headline}
      </motion.h1>

      <motion.div
        className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8 mb-20"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {site.quote.map((lineText, i) => (
          <motion.p
            key={i}
            variants={line}
            className={`leading-relaxed ${
              i === 0 || i === 2
                ? 'text-xl md:text-2xl text-white font-light'
                : 'text-base md:text-lg text-[var(--color-muted)]'
            }`}
          >
            {lineText}
          </motion.p>
        ))}
      </motion.div>

      <motion.p
        className="text-3xl md:text-4xl text-white mb-20"
        style={{ fontFamily: 'var(--font-signature)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {site.signature}
      </motion.p>

      <motion.div
        className="grid grid-cols-3 gap-8 md:gap-16 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        {site.stats.map((stat) => (
          <StatCounter
            key={stat.label}
            target={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
