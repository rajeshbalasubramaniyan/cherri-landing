import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Story() {
  return (
    <section id="story" className="py-24 px-6 bg-gradient-to-b from-white to-cherry-50/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cherry font-body font-bold text-sm tracking-widest uppercase">The Daydreamer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Every Daydream Starts Somewhere
          </h2>
          <div className="w-16 h-1 bg-cherry rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-cherry-100 to-cherry-200 rounded-3xl rotate-3 shadow-xl flex items-center justify-center">
                <div className="text-[140px] md:text-[160px] -rotate-3 select-none">👧🏻</div>
              </div>
              <motion.span animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -right-6 text-4xl">🦄</motion.span>
              <motion.span animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-4 -left-6 text-4xl">🐉</motion.span>
              <motion.span animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute top-4 -left-8 text-3xl">🚀</motion.span>
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="absolute -bottom-6 right-4 text-2xl">💭</motion.span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Anthra Rajesh, age 9
            </h3>
            <p className="text-sm text-cherry font-body font-semibold">Founder and Chief Cherri Officer</p>

            <p className="text-lg text-gray-600 leading-relaxed font-body">
              Anthra builds worlds inside her head. Kingdoms with unicorn guards, galaxies where dragons fly spaceships, stories that overlap and loop and somehow all make sense to her. She talks about them like they're real because to her, they are.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-body">
              She's a drama queen, a cuddle monster, and the kind of kid who asks "but why?" about everything. One evening she was crying over her multiplication homework. Not because she's not smart. Because nobody was teaching it the way her brain works. She wanted it as a story. Or a picture. Or anything but rows of numbers on a page.
            </p>

            <p className="font-handwritten text-3xl text-cherry font-semibold">
              "Dada, this is SO hard. Why can't it just be a story or something?"
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-body">
              She didn't ask for an app. She just said what was hard. Her Dada was the one who thought "what if?" That's how CHERRI PICK was born. And that's how Cherri works. Anthra talks about her world, jumbles three ideas together into something that sounds impossible, and her Dada figures out how to build it.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-400 font-body">
                Built by <strong className="text-gray-600">Rajesh Balasubramaniyan</strong>, Anthra's Dada. She daydreams. He listens. Then he builds.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
