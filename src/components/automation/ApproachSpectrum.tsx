import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { automation } from '../../data/automation'
import { AnimatedText } from '../ui/AnimatedText'

export function ApproachSpectrum() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="section-padding py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-max">
        <AnimatedText>
          <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-4">
            {automation.philosophy.title}
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-16 md:mb-20">
            {automation.philosophy.subtitle}
          </h2>
        </AnimatedText>

        <div className="relative mb-16 md:mb-24">
          <div className="h-px bg-[var(--color-border)] w-full" />
          <motion.div
            className="absolute top-0 left-0 h-px bg-white origin-left"
            style={{ width: lineWidth }}
          />
          <div className="flex justify-between mt-4">
            {automation.philosophy.tiers.map((tier, i) => (
              <motion.span
                key={tier.id}
                className={`text-xs md:text-sm tracking-widest uppercase ${
                  tier.emphasis ? 'text-white' : 'text-[var(--color-muted)]/50'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              >
                {tier.label}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {automation.philosophy.tiers.map((tier, i) => (
            <motion.article
              key={tier.id}
              className={`relative rounded-2xl p-8 md:p-10 border transition-colors duration-500 ${
                tier.emphasis
                  ? 'border-white/20 bg-white/[0.03]'
                  : 'border-[var(--color-border)] bg-transparent opacity-60'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: tier.emphasis ? 1 : 0.6, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={tier.emphasis ? { borderColor: 'rgba(255,255,255,0.35)' } : undefined}
            >
              <motion.div
                className={`font-display text-4xl md:text-5xl mb-2 ${
                  tier.emphasis ? 'text-white' : 'text-[var(--color-muted)]'
                }`}
                animate={
                  isInView && tier.emphasis
                    ? { scale: [1, 1.02, 1] }
                    : {}
                }
                transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
              >
                {tier.label}
              </motion.div>
              <p
                className={`text-sm md:text-base mb-6 italic ${
                  tier.emphasis ? 'text-white/80' : 'text-[var(--color-muted)]'
                }`}
              >
                {tier.tagline}
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {tier.description}
              </p>

              {tier.emphasis && (
                <motion.div
                  className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
