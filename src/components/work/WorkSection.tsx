import { AnimatedText } from '../ui/AnimatedText'
import { ProjectStrip } from './ProjectStrip'
import type { WorkGroup } from '../../data/projects'

interface WorkSectionProps {
  groups: WorkGroup[]
}

export function WorkSection({ groups }: WorkSectionProps) {
  return (
    <section id="work" className="section-padding py-24 md:py-32">
      <div className="container-max">
        {groups.map((group, groupIndex) => (
          <div
            key={group.id}
            className={`mb-24 md:mb-32 ${groupIndex > 0 ? 'pt-8' : ''}`}
          >
            <AnimatedText delay={0.1}>
              <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase mb-4">
                {group.period}
              </p>
            </AnimatedText>

            <AnimatedText delay={0.15}>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-2">
                {group.role} at{' '}
                <span className="italic">{group.employer}</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-[var(--color-muted)] max-w-2xl mb-10 md:mb-14 leading-relaxed">
                {group.description}
              </p>
            </AnimatedText>

            <ProjectStrip projects={group.projects} />
          </div>
        ))}
      </div>
    </section>
  )
}
