import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { automation } from '../../data/automation'
import { AnimatedText } from '../ui/AnimatedText'

export function PipelineFlow() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding py-24 md:py-32 border-t border-[var(--color-border)] overflow-hidden">
      <div className="container-max">
        <AnimatedText>
          <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-4">
            Full Stack Coverage
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            From API to Android. Website to infra.
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-[var(--color-muted)] max-w-2xl mb-16 leading-relaxed">
            Every layer of the stack, wired into one coherent automation fabric.
            Nothing siloed. Nothing manual.
          </p>
        </AnimatedText>

        <div className="relative">
          {automation.layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className="relative flex items-center gap-6 md:gap-10 py-5 md:py-6 border-b border-[var(--color-border)] last:border-b-0 group"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative flex-shrink-0 w-12 md:w-16 flex justify-center">
                <motion.div
                  className="w-3 h-3 rounded-full bg-white"
                  animate={
                    isInView
                      ? {
                          boxShadow: [
                            '0 0 0 0 rgba(255,255,255,0.4)',
                            '0 0 0 12px rgba(255,255,255,0)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.5 + i * 0.3,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: automation.layers.length * 0.3,
                  }}
                />
                {i < automation.layers.length - 1 && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-full bg-[var(--color-border)]" />
                )}
              </div>

              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <motion.span
                  className="font-display text-2xl md:text-3xl text-white group-hover:translate-x-2 transition-transform duration-300"
                >
                  {layer.label}
                </motion.span>
                <span className="text-sm text-[var(--color-muted)] md:text-right max-w-md">
                  {layer.description}
                </span>
              </div>

              <motion.div
                className="hidden md:block w-24 h-px bg-gradient-to-r from-white/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}

          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1 overflow-hidden hidden md:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="w-full h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"
              animate={{ y: ['-32px', '100%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
