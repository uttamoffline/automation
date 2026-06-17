import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { site } from '../../data/site'

type NavItem = {
  label: string
  href: string
  hash?: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/', hash: 'work' },
  { label: 'Automation', href: '/automation' },
  { label: 'About', href: '/', hash: 'about' },
  { label: 'Experience', href: '/', hash: 'experience' },
  { label: 'Contact', href: '/', hash: 'contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()
  const navigate = useNavigate()
  const isAutomation = location.pathname === '/automation'

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)

      if (location.pathname !== '/') return

      const sections = ['hero', 'work', 'about', 'experience', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  function isActive(item: NavItem) {
    if (item.href === '/automation') return isAutomation
    if (isAutomation) return false
    if (item.hash) return activeSection === item.hash
    return location.pathname === '/' && activeSection === 'hero'
  }

  function handleNavClick(item: NavItem) {
    setMobileOpen(false)

    if (item.hash) {
      if (location.pathname !== '/') {
        navigate(`/#${item.hash}`)
      } else {
        document.getElementById(item.hash)?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    if (item.href === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    navigate(item.href)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-signature text-xl text-white"
            style={{ fontFamily: 'var(--font-signature)' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {site.signature}
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`text-sm tracking-wide transition-colors cursor-pointer ${
                  isActive(item)
                    ? 'text-white'
                    : 'text-[var(--color-muted)] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className="text-2xl font-display text-white cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
