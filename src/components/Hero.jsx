import { motion } from 'framer-motion'
import Nav from './Nav'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cherry-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-red-50 rounded-full opacity-40 blur-3xl" />
        {/* Floating daydream elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] right-[10%] text-5xl opacity-20 select-none"
        >🦄</motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[25%] left-[8%] text-4xl opacity-15 select-none"
        >🐉</motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[30%] right-[15%] text-4xl opacity-15 select-none"
        >🚀</motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[20%] left-[12%] text-3xl opacity-15 select-none"
        >💭</motion.div>
      </div>

      <Nav />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-20 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          className="mb-8"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-cherry-50 to-cherry-100 rounded-full flex items-center justify-center shadow-xl shadow-cherry-200/40">
            <img src="/cherry-icon.png" alt="" className="w-28 h-28 md:w-32 md:h-32 object-contain" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-cherry font-semibold mb-4"
        >
          CHERRI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Where Daydreams{' '}
          <span className="text-cherry relative inline-block">
            Work!
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-1 left-0 right-0 h-1.5 bg-cherry/20 rounded-full origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mb-4 font-body"
        >
          She was upset about multiplication. Between a unicorn story and a tantrum, she said it's too hard. Her Dada heard it and thought, "what if it didn't have to be?"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-handwritten text-2xl md:text-3xl text-cherry/70 mb-10"
        >
          She spoke. He listened. He started building.
        </motion.p>

        <motion.a
          href="#apps"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cherry text-white font-display font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-cherry/30 hover:bg-cherry-600 transition-colors inline-block"
        >
          Explore the Daydreams 🍒
        </motion.a>
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-4 text-sm text-gray-400 hover:text-cherry font-body font-semibold transition-colors inline-block"
        >
          or read our story first ↓
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
