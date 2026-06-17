import { motion } from 'framer-motion'
import { automation } from '../../data/automation'
import { AnimatedText } from '../ui/AnimatedText'

export function CapabilitiesGrid() {
  return (
    <section className="section-padding py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-max">
        <AnimatedText>
          <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-4">
            What I&apos;ve Built
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-16">
            Systems that ship themselves
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automation.capabilities.map((cap, i) => (
            <motion.article
              key={cap.title}
              className="group border border-[var(--color-border)] rounded-2xl p-8 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-8 h-px bg-white/40 mb-6 group-hover:w-12 transition-all duration-300"
              />
              <h3 className="font-display text-xl text-white mb-3">{cap.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {cap.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
