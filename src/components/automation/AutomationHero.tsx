import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { automation } from '../../data/automation'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function AutomationHero() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="min-h-[90vh] flex flex-col items-center justify-center section-padding pt-28 pb-16 relative"
    >
      <motion.p
        className="text-sm text-[var(--color-muted)] tracking-[0.3em] uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {automation.subheadline}
      </motion.p>

      <motion.h1
        className="font-display text-5xl md:text-7xl lg:text-[6rem] text-white text-center mb-12 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {automation.headline}
      </motion.h1>

      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p variants={item} className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed">
          {automation.intro}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
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
