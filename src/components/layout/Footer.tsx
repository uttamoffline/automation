import { site } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-padding py-12 border-t border-[var(--color-border)]">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[var(--color-muted)]">
          © 2018–{year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
