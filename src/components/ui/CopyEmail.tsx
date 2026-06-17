import { useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../../data/site'

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      className="group relative text-2xl md:text-4xl font-display text-white border border-[var(--color-border)] rounded-full px-8 py-4 hover:border-white/30 transition-colors cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-[var(--color-muted)] text-sm block mb-1 tracking-widest uppercase">
        {copied ? 'Copied!' : 'Click to copy'}
      </span>
      {site.email}
    </motion.button>
  )
}
