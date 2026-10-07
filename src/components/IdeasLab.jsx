import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function IdeasLab() {
  return (
    <section id="ideas" className="py-24 px-6 bg-gradient-to-b from-white to-cherry-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-cherry font-body font-bold text-sm tracking-widest uppercase">Ideas Lab</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Got a Daydream?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-12 font-body">
            Anthra believes every problem is just a daydream waiting to be built. If your child faces a challenge, we want to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-cherry-100 text-center"
        >
          <div className="text-6xl mb-6">💭</div>
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
            The Daydream Factory is Brewing
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto font-body">
            Soon, you'll be able to submit your daydreams right here. Anthra and her dad will pick the best ones and turn them into real apps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { emoji: '💭', title: 'Share a Daydream', desc: 'What challenge does your child face?' },
              { emoji: '🌟', title: 'We Dream Together', desc: 'Anthra picks the ones that spark joy' },
              { emoji: '🚀', title: 'We Build It', desc: 'Daydreams become real, working apps' },
            ].map((step, i) => (
              <div key={i} className="p-4 rounded-2xl bg-cherry-50/50">
                <div className="text-3xl mb-2">{step.emoji}</div>
                <div className="font-display font-bold text-sm text-gray-800">{step.title}</div>
                <div className="text-xs text-gray-500 mt-1 font-body">{step.desc}</div>
              </div>
            ))}
          </div>

          <p className="font-handwritten text-2xl text-cherry/60">
            Coming soon — keep daydreaming!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
