import { motion } from 'framer-motion'
import { APPS } from '../data/apps'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function AppCard({ app, i }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
      className="bg-white rounded-3xl border-2 shadow-lg overflow-hidden flex flex-col"
      style={{ borderColor: app.color + '33' }}
    >
      <div className="p-7 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ backgroundColor: app.soft }}>
            {app.emoji}
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{app.name}</h3>
            <p className="text-xs font-body font-bold tracking-wide uppercase" style={{ color: app.color }}>{app.subject}</p>
          </div>
        </div>

        <p className="font-body font-semibold mb-4" style={{ color: app.color }}>{app.tagline}</p>

        {app.daydream && (
          <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: app.soft }}>
            <p className="font-handwritten text-lg leading-snug" style={{ color: app.color }}>{app.daydream}</p>
          </div>
        )}

        <p className="text-gray-600 font-body leading-relaxed text-sm mb-4">{app.description}</p>

        <div className="space-y-1.5 mb-6">
          {app.highlights.map(h => (
            <div key={h} className="flex items-start gap-2 text-sm text-gray-600 font-body">
              <span className="mt-0.5" style={{ color: app.color }}>&#10003;</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 flex-wrap">
          <span className="text-xs font-body font-semibold text-gray-500 bg-gray-100 rounded-full px-3 py-1">Ages {app.ages}</span>
          <motion.a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="text-white font-display font-bold px-6 py-3 rounded-full shadow-md inline-block"
            style={{ backgroundColor: app.color }}
          >
            Open {app.name.replace('CHERRI ', '')} {app.emoji}
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Apps() {
  return (
    <section id="apps" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-cherry font-body font-bold text-sm tracking-widest uppercase">Daydreams Built</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Four Daydreams, Live
          </h2>
          <p className="text-gray-500 font-body max-w-2xl mx-auto">
            Each one started with something Anthra found hard, or wished for. Maths, reading and English, built so your child learns their way. Free to try, no ads, no tracking.
          </p>
          <div className="w-16 h-1 bg-cherry rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {APPS.map((app, i) => <AppCard key={app.id} app={app} i={i} />)}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
        >
          <a href="/research" className="inline-flex items-center gap-2 bg-cherry-50 border-2 border-cherry-200 text-cherry font-body font-bold text-sm px-6 py-3 rounded-full hover:bg-cherry-100 hover:border-cherry transition-all">
            <span>🔬</span> The science behind them →
          </a>
          <a href="/#ideas" className="inline-flex items-center gap-2 border-2 border-dashed border-gray-300 text-gray-500 font-body font-bold text-sm px-6 py-3 rounded-full hover:border-cherry hover:text-cherry transition-all">
            <span>💭</span> The next daydream is brewing
          </a>
        </motion.div>
      </div>
    </section>
  )
}
