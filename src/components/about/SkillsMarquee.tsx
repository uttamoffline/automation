import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface SkillsMarqueeProps {
  skills: string[]
}

export function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  const reducedMotion = useReducedMotion()
  const doubled = reducedMotion ? skills : [...skills, ...skills]

  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] py-6">
      <motion.div
        className={`flex gap-4 ${reducedMotion ? 'flex-wrap justify-center' : 'whitespace-nowrap'}`}
        animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={reducedMotion ? undefined : { duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center text-sm text-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-5 py-2"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
