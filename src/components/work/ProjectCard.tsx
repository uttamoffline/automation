import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex-shrink-0 w-[min(85vw,380px)] md:w-[420px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] mb-4 aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {(project.liveUrl || project.caseStudyUrl) && (
          <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
              >
                Live
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                className="text-xs uppercase tracking-widest border border-white/50 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
              >
                Case Study
              </a>
            )}
          </div>
        )}
      </div>

      <h3 className="font-display text-xl md:text-2xl text-white mb-2 group-hover:text-white/90 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs text-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
