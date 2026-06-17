import type { Project } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

interface ProjectStripProps {
  projects: Project[]
}

export function ProjectStrip({ projects }: ProjectStripProps) {
  return (
    <div className="project-strip flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory -mx-[clamp(1.5rem,5vw,4rem)] px-[clamp(1.5rem,5vw,4rem)]">
      {projects.map((project, i) => (
        <div key={project.id} className="snap-start">
          <ProjectCard project={project} index={i} />
        </div>
      ))}
    </div>
  )
}
