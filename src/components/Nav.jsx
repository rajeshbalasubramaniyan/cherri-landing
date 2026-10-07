import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Our Story', href: '/#story' },
  { label: 'Our Apps', href: '/#apps' },
  { label: 'The Science', href: '/research' },
  { label: 'Ideas Lab', href: '/#ideas' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
      <a href="/">
        <img src="/cherri-full-logo.png" alt="Cherri" className="h-14 md:h-16 object-contain" />
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-6 text-sm font-semibold font-body">
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="text-gray-500 hover:text-cherry transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-gray-800 origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-gray-800"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-gray-800 origin-center"
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col py-4">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-8 py-3 text-gray-700 hover:text-cherry hover:bg-cherry-50 transition-colors font-body font-semibold text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
