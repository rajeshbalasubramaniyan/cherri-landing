import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function BrandStory() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cherry font-body font-bold text-sm tracking-widest uppercase">How Cherri Was Born</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            From Four Letters to a Daydream
          </h2>
          <div className="w-16 h-1 bg-cherry rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-600 leading-relaxed font-body">
            It started a couple of years ago when Anthra announced she was going to build her own company. She was going to make "innovative things." She said it like it was already decided. No discussion needed. She even suggested the name. Cherry. Because why not.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed font-body">
            Her Dada took it from there. His professional brain kicked in. First came <strong>CHRY</strong>, short for <em>Cutting-edge Hub for Revolution and You</em>. But four-letter domains don't come cheap, and it felt too corporate for a kid's brand. Cherry.com wasn't available either. So he played with the spelling until <strong>CHERRI</strong> felt right. A lot of thought went into a name that started as a casual suggestion from a little girl. He designed a logo, printed business cards, gave her a title: <strong className="text-cherry">Founder and Chief Cherri Officer</strong>. She went around showing it to every friend and neighbour she could find.
            The tagline came first as "Your Hub for Infinite Possibilities."
          </p>

          <p className="text-lg text-gray-600 leading-relaxed font-body">
            But when CHERRI PICK started taking shape, the tagline didn't feel right anymore. "Your Hub for Infinite Possibilities" was too corporate for a brand born from a 9-year-old's imagination. It needed to sound like her. Like the way she thinks. Like the way she daydreams solutions to problems nobody asked her to solve.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cherry-50 rounded-2xl p-8 text-center"
          >
            <p className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Where Daydreams <span className="text-cherry">Work!</span>
            </p>
            <p className="text-gray-500 font-body text-sm">That felt like her.</p>
          </motion.div>

          <p className="text-lg text-gray-600 leading-relaxed font-body">
            And then, almost like it was meant to be, <strong>cherri.group</strong> was available. A domain that felt like it was waiting for a little girl to come along and claim it. A group. A hub. A place where her ideas could live and grow into something real.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed font-body">
            This is the first step of a journey that nobody planned. A lot of thought went into this brand, not knowing it would one day become this. And who knows what it might become tomorrow. But it started the way all good things do. She spoke. He listened. And he started building.
          </p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-handwritten text-3xl text-cherry/70 text-center pt-4"
          >
            She spoke. He listened. He started building.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
