import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { experience } from '../../data/experience'

export function Timeline() {
  return (
    <section id="experience" className="section-padding py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-max">
        <AnimatedText>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">Experience</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-[var(--color-muted)] mb-16 max-w-xl">
            Building software systems across AI and consumer platforms
          </p>
        </AnimatedText>

        <div className="relative">
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 md:pl-12"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute left-0 md:left-4 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-white" />

      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
        <h3 className="font-display text-xl md:text-2xl text-white">{item.role}</h3>
        <span className="text-[var(--color-muted)] text-sm">
          {item.company} · {item.location}
        </span>
        <span className="text-[var(--color-muted)] text-sm md:ml-auto">{item.period}</span>
      </div>

      <ul className="space-y-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="text-sm text-[var(--color-muted)] leading-relaxed flex gap-3">
            <span className="text-white/30 mt-1.5">—</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
