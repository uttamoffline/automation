import { StatCounter } from '../ui/AnimatedText'
import { automation } from '../../data/automation'
import { AnimatedText } from '../ui/AnimatedText'

export function AutomationStats() {
  return (
    <section className="section-padding py-20 md:py-28 border-t border-[var(--color-border)]">
      <div className="container-max">
        <AnimatedText>
          <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-12 text-center">
            By the Numbers
          </p>
        </AnimatedText>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {automation.stats.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
