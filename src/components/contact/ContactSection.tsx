import { AnimatedText } from '../ui/AnimatedText'
import { CopyEmail } from '../ui/CopyEmail'
import { site } from '../../data/site'

export function ContactSection() {
  return (
    <section id="contact" className="section-padding py-24 md:py-32 border-t border-[var(--color-border)]">
      <div className="container-max text-center">
        <AnimatedText>
          <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-4">
            Message Me
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-12">
            Let&apos;s build something great
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <div className="flex justify-center mb-12">
            <CopyEmail />
          </div>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div className="flex items-center justify-center gap-8">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-white transition-colors tracking-wide"
            >
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-white transition-colors tracking-wide"
            >
              GitHub
            </a>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}
