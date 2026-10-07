import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const STATS = [
  { number: '93%', label: 'of adults report some level of math anxiety', source: 'Change the Equation, 2016', url: 'https://www.apa.org/topics/math-anxiety' },
  { number: 'Age 6', label: 'is when math anxiety is first detected in children', source: 'Ramirez et al., 2013', url: 'https://doi.org/10.1080/15248372.2013.797906' },
  { number: '#1', label: "Singapore's global math ranking after adopting multi-method CPA teaching", source: 'TIMSS Assessments', url: 'https://timssandpirls.bc.edu/' },
  { number: '34pts', label: 'lower scores for math-anxious students (nearly 1 year behind)', source: 'OECD PISA', url: 'https://www.oecd.org/en/publications/pisa-2022-results-volume-i_53f23881-en.html' },
]

const METHODS_EVIDENCE = [
  {
    name: 'Visual Arrays (Picture Grid)',
    evidence: 'The Institute of Education Sciences recommends visual representations as a core strategy for math instruction. Research shows arrays build multiplicative thinking by making the structure of groups visible.',
    source: 'IES Practice Guide, Woodward et al., 2012',
    url: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/26',
  },
  {
    name: 'Singapore Bar Models',
    evidence: "Singapore has ranked #1 or #2 globally in math since adopting the Concrete-Pictorial-Abstract approach in the 1980s. Studies in England found Singapore-style textbooks produced positive effects on achievement.",
    source: 'Jerrim & Vignoles, Frontiers in Education, 2019',
    url: 'https://doi.org/10.3389/feduc.2019.00021',
  },
  {
    name: 'Japanese Line Method',
    evidence: 'Visual-spatial methods for multiplication are widely used in East Asian curricula. Research shows they reduce working memory load and help children who struggle with abstract number manipulation.',
    source: 'Geary, 1996; cross-national studies',
    url: 'https://doi.org/10.1111/j.2044-8279.1996.tb01239.x',
  },
  {
    name: 'Lattice Multiplication',
    evidence: 'Used in US special education and intervention programs. Research shows it reduces errors by organizing partial products visually, particularly effective for struggling learners.',
    source: 'Randolph & Sherman, 2001',
    url: 'https://www.nctm.org/',
  },
  {
    name: 'Story-Based Problems',
    evidence: 'Contextual math problems improve transfer and retention. When problems are themed around interests, engagement increases significantly. Narrative structure helps children build mental models of mathematical relationships.',
    source: 'Koedinger & Nathan, 2004',
    url: 'https://doi.org/10.1207/s15327809jls1302_1',
  },
  {
    name: 'Skip Counting',
    evidence: 'Skip counting is a foundational strategy endorsed by every major math curriculum framework. It builds number sense and establishes the connection between repeated addition and multiplication.',
    source: 'Common Core Standards; NCERT India',
    url: 'https://www.corestandards.org/Math/',
  },
]

export default function Science() {
  return (
    <section id="science" className="py-24 px-6 bg-gradient-to-b from-cherry-50/30 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cherry font-body font-bold text-sm tracking-widest uppercase">For the Skeptics (We Get It)</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            The Science Behind the Daydream
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-body">
            You're wondering if this actually works, or if it's just another screen. Fair question. Here's what the research says.
          </p>
          <div className="w-16 h-1 bg-cherry rounded-full mx-auto mt-4" />
        </motion.div>

        {/* The Problem - Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-gray-900 text-center mb-3">The Problem is Real</h3>
          <p className="text-gray-500 text-center font-body max-w-xl mx-auto mb-8">
            Math anxiety isn't laziness. It's a real condition that starts as early as first grade and follows kids into adulthood if left unaddressed.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-cherry mb-2">{stat.number}</div>
                <p className="text-xs text-gray-600 font-body leading-relaxed">{stat.label}</p>
                <a href={stat.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-cherry/50 hover:text-cherry mt-2 font-body italic block transition-colors">{stat.source} ↗</a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Multiple Methods Work */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-gray-900 text-center mb-3">Why Letting Kids Choose Works</h3>
          <div className="max-w-3xl mx-auto space-y-6 font-body text-gray-600">
            <p className="text-lg leading-relaxed">
              <strong className="text-gray-900">Self-Determination Theory</strong> (Deci & Ryan, 2000) shows that when children have autonomy over how they learn, their intrinsic motivation increases. They engage deeper, persist longer, and retain more. This isn't speculation. It's decades of peer-reviewed research.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-gray-900">Jerome Bruner's CPA framework</strong> (1966) established that children learn math best when they move between concrete (hands-on), pictorial (visual), and abstract (symbolic) representations. Singapore adopted this nationally and went from average to #1 in global math rankings.
            </p>
            <p className="text-lg leading-relaxed">
              CHERRI PICK doesn't just give kids multiple methods. It lets them <strong className="text-gray-900">choose which method feels right to them</strong>. The same child might prefer stories for 3 x 4 and picture grids for 7 x 8. That's not inconsistency. That's a brain finding its own path.
            </p>
          </div>
        </motion.div>

        {/* Screen Time Concern */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">
            "But isn't more screen time bad?"
          </h3>
          <div className="max-w-2xl mx-auto space-y-4 font-body text-gray-600">
            <p className="text-lg leading-relaxed">
              The American Academy of Pediatrics distinguishes between <strong className="text-gray-900">passive screen time</strong> (watching videos, scrolling) and <strong className="text-gray-900">active, interactive screen time</strong> (problem-solving, creating, learning). They're not the same thing.
            </p>
            <p className="text-lg leading-relaxed">
              A 2020 study from Oxford University found that <strong className="text-gray-900">moderate use of educational technology had no negative effect on wellbeing</strong> and was associated with improved learning outcomes when the content was interactive and cognitively engaging.
            </p>
            <p className="text-lg leading-relaxed">
              CHERRI PICK is designed to be <strong className="text-gray-900">cognitively active, not passively addictive</strong>. There are no infinite scroll feeds, no reward loops designed to keep kids glued, no autoplay. A child solves a problem, picks a method, thinks, answers, and moves on. It's structured learning, not entertainment disguised as education.
            </p>
            <div className="bg-cherry-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-cherry-800 font-semibold text-center">
                No ads. No social features. No notifications. No data tracking. Just math, taught the way your child's brain prefers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Method Evidence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold text-gray-900 text-center mb-3">Every Method is Research-Backed</h3>
          <p className="text-gray-500 text-center font-body max-w-xl mx-auto mb-8">
            These aren't random ideas. Each teaching method in CHERRI PICK is grounded in educational research and used in classrooms worldwide.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {METHODS_EVIDENCE.map((method, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h4 className="font-display font-bold text-gray-900 mb-2">{method.name}</h4>
                <p className="text-sm text-gray-600 font-body leading-relaxed mb-2">{method.evidence}</p>
                <a href={method.url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-cherry/50 hover:text-cherry font-body italic block transition-colors">{method.source} ↗</a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Convinced? Let your child try it.
          </h3>
          <p className="text-gray-500 font-body max-w-lg mx-auto mb-8">
            The research is clear. Kids learn better when they have a say in how they're taught. CHERRI PICK puts that choice in their hands.
          </p>
          <motion.a
            href="https://pick.cherri.group"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cherry text-white font-display font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-cherry/30 hover:bg-cherry-600 transition-colors inline-block"
          >
            Try CHERRI PICK 🍒
          </motion.a>
          <p className="text-xs text-gray-400 mt-3 font-body">Free prototype. No signup required. Just sit with your child and let them pick.</p>
        </motion.div>
      </div>
    </section>
  )
}
