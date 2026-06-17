import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { automation } from '../../data/automation'
import { AnimatedText } from '../ui/AnimatedText'
import { CopyEmail } from '../ui/CopyEmail'

export function AutomationClosing() {
  return (
    <section className="section-padding py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-max text-center">
        <AnimatedText>
          <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-16 leading-relaxed italic">
            {automation.closing}
          </p>
        </AnimatedText>

        <AnimatedText delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link to="/#contact">
              <motion.span
                className="inline-flex text-sm uppercase tracking-widest text-[var(--color-muted)] hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                View full portfolio →
              </motion.span>
            </Link>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <CopyEmail />
        </AnimatedText>
      </div>
    </section>
  )
}
