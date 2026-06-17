import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { automation } from '../../data/automation'

export function AutomationTeaser() {
  return (
    <section className="section-padding py-20 md:py-28 border-t border-[var(--color-border)] overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedText>
              <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-4">
                Specialty
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
                Thinking in <span className="italic">Automation</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <p className="text-[var(--color-muted)] max-w-xl mb-10 leading-relaxed">
                30+ pipelines. Full-stack coverage. From Android keyboards to cloud infra —
                I build systems that run while you sleep.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <Link to="/automation">
                <motion.span
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-white border border-[var(--color-border)] rounded-full px-8 py-4 hover:border-white/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore My Approach
                  <span aria-hidden>→</span>
                </motion.span>
              </Link>
            </AnimatedText>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/automation" className="block group">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3]">
                <motion.img
                  src={automation.workspaceImage}
                  alt={automation.workspaceImageAlt}
                  className="w-full h-full object-cover object-center opacity-80 brightness-110 contrast-105 group-hover:opacity-95 group-hover:brightness-115 transition-all duration-700"
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-white/70 transition-colors">
                    The workspace
                  </span>
                  <span className="text-white/30 group-hover:text-white/50 transition-colors" aria-hidden>
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
