import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { site } from '../../data/site'
import { SkillsMarquee } from './SkillsMarquee'

export function AboutSection() {
  return (
    <section id="about" className="section-padding py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-max">
        <AnimatedText>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">About Me</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-[var(--color-muted)] mb-12 max-w-xl">
            Software engineer with a strong systems and AI foundation
          </p>
        </AnimatedText>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start mb-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {site.bio.map((paragraph, i) => (
              <AnimatedText key={i} delay={0.15 + i * 0.1}>
                <p className="text-[var(--color-muted)] leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              </AnimatedText>
            ))}
          </div>

          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 xl:w-64 rounded-2xl overflow-hidden border border-white/[0.08]">
              <img
                src={site.aboutImage}
                alt={site.aboutImageAlt}
                className="w-full h-auto object-cover opacity-90 brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
            <p className="mt-3 text-xs text-[var(--color-muted)]/60 text-center tracking-wide">
              automate · iterate · optimize
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {site.achievements.map((item, i) => (
            <AnimatedText key={item.title} delay={0.2 + i * 0.1}>
              <div className="border border-[var(--color-border)] rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.3}>
          <h3 className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-6">
            Technical Skills
          </h3>
        </AnimatedText>
        <SkillsMarquee skills={site.skills} />
      </div>
    </section>
  )
}
