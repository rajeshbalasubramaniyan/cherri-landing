import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const doi = id => `https://doi.org/${id}`

// Every source below was checked against the publisher or the Crossref registry.
// Do not add a claim here without a source you have opened yourself.
const SHARED = [
  {
    title: 'A child who chooses, cares',
    text: 'Self-Determination Theory says people learn with more energy when they have a real say in what they do. A review of 41 studies found that giving people a choice raised their motivation, effort and performance. Every CHERRI app starts with a choice the child makes.',
    source: 'Deci & Ryan, 2000; Patall, Cooper & Robinson, 2008',
    url: doi('10.1037/0033-2909.134.2.270'),
  },
  {
    title: 'Hands first, symbols later',
    text: 'Jerome Bruner showed that children understand an idea best when they meet it as something to handle, then as a picture, and only then as symbols. A review of 55 studies found that teaching maths with objects children can move worked better than teaching with symbols alone.',
    source: 'Bruner, 1966; Carbonneau, Marley & Selig, 2013',
    url: doi('10.1037/a0031084'),
  },
]

const PICK_STATS = [
  { number: '93%', label: 'of adults in the US say they feel some level of maths anxiety', source: 'Luttenberger et al., 2018', url: doi('10.2147/PRBM.S141421') },
  { number: 'Age 6', label: 'maths anxiety can already be measured in first and second graders', source: 'Ramirez et al., 2013', url: doi('10.1080/15248372.2012.664593') },
  { number: '#1', label: 'Singapore in the TIMSS maths rankings. Its curriculum moves from objects to pictures to symbols', source: 'TIMSS Assessments', url: 'https://timssandpirls.bc.edu/' },
  { number: '34pts', label: 'lower maths scores for students with high maths anxiety, close to a year of school', source: 'OECD PISA 2012', url: doi('10.1787/5js6b2579tnx-en') },
]

const APPS = [
  {
    id: 'pick',
    name: 'CHERRI PICK',
    subject: 'Multiplication',
    emoji: '🍒',
    color: '#FF0000',
    url: 'https://pick.cherri.group',
    question: 'She said multiplication was too hard. What if the problem was not her, but being shown only one way to do it?',
    intro: 'Maths anxiety is not laziness. It starts early and follows children into adulthood if nobody steps in.',
    evidence: [
      { name: 'Picture grids', text: 'The US Institute of Education Sciences recommends objects and pictures as a core way to teach maths to children who are finding it hard. An array lets a child see the groups inside a multiplication.', source: 'IES Practice Guide, Fuchs et al., 2021', url: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/26' },
      { name: 'Singapore bar models', text: 'Singapore teaches maths by moving from objects to pictures to symbols, and has led the world rankings for years. When primary schools in England tried a Singapore-based textbook, Year 1 children made slightly more progress in maths by the end of the year.', source: 'Lindorff, Hall & Sammons, 2019', url: doi('10.3389/feduc.2019.00037') },
      { name: 'Story problems', text: 'Students in one well-known study solved more problems when they were told as a story than as a bare equation. A story gives you something to reason with. That study was with older students, and we think the idea holds for younger ones.', source: 'Koedinger & Nathan, 2004', url: doi('10.1207/s15327809jls1302_1') },
      { name: 'Skip counting', text: 'Counting in twos, fives and tens is how school curricula connect adding to multiplying. It is in the Common Core and in national curricula around the world.', source: 'Common Core State Standards', url: 'https://www.corestandards.org/Math/' },
      { name: 'Lattice grids', text: 'A different written method that breaks one big multiplication into small ones inside a grid. Teachers offer it as an option because some children find it easier to keep track of each step.', source: 'Randolph & Sherman, 2001', url: doi('10.5951/TCM.7.8.0480') },
      { name: 'Japanese line method', text: 'You draw lines and count where they cross. We could not find good research on this method itself. We include it because it turns place value into a picture, and because some children simply love it.', source: 'No direct study. Rests on the picture principle above', url: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/26' },
      { name: 'Mastery before moving on', text: 'In the times table journey a child masters one table before the next one opens. A review of 108 studies found that mastery learning raised achievement, most of all for children who were struggling.', source: 'Kulik, Kulik & Bangert-Drowns, 1990', url: doi('10.3102/00346543060002265') },
      { name: 'Quick checks that help memory', text: 'Being quizzed on something makes it stick better than studying it again. That is why each table ends with a short check instead of more practice.', source: 'Roediger & Karpicke, 2006', url: doi('10.1111/j.1467-9280.2006.01693.x') },
    ],
  },
  {
    id: 'tales',
    name: 'CHERRI TALES',
    subject: 'Bedtime stories',
    emoji: '🌙',
    color: '#6C3FA0',
    url: 'https://tales.cherri.group',
    question: 'No books in reach, so she described the story she wanted. What happens when a child directs the story instead of just hearing it?',
    intro: 'Stories are how children meet most of the words they will ever know. The research is about sharing them, and about letting the child take part.',
    evidence: [
      { name: 'Reading together builds language', text: 'A large review of studies found that parents reading with young children was linked to stronger language, early literacy and later reading.', source: 'Bus, van IJzendoorn & Pellegrini, 1995', url: doi('10.3102/00346543065001001') },
      { name: 'Taking part beats listening', text: 'When children are asked questions and help tell the story, their vocabulary grows more than when they only listen. In TALES the child chooses the heroes, the world and the mood before a word is written.', source: 'Whitehurst et al., 1988; Mol et al., 2008', url: doi('10.1080/10409280701838603') },
      { name: 'Stories about them', text: 'Young children learned more new words from the parts of a book that were personalised to them than from the parts that were not.', source: 'Kucirkova, Messer & Sheehy, 2014', url: doi('10.1177/0142723714534221') },
      { name: 'A steady bedtime routine', text: 'In a study of over 10,000 families, children with a regular bedtime routine fell asleep sooner, woke less and slept longer. The more nights the routine happened, the better the sleep.', source: 'Mindell et al., 2015', url: doi('10.5665/sleep.4662') },
    ],
    note: 'An honest note: TALES is a screen, and bright screens close to bedtime are not ideal for sleep. So it uses a dark night theme and can read the story aloud. Put the screen face down and let your child just listen, with you beside them.',
  },
  {
    id: 'shapes',
    name: 'CHERRI SHAPES',
    subject: 'Geometry',
    emoji: '🔷',
    color: '#0284C7',
    url: 'https://shapes.cherri.group',
    question: 'She could read the textbook definition and still not understand the shape. What if definitions come last, not first?',
    intro: 'Geometry is usually taught as words to memorise. The research says understanding grows the other way round.',
    evidence: [
      { name: 'Definitions come last', text: 'Pierre van Hiele found that children pass through levels of geometric thinking. First they know a shape by how it looks, then by its properties, and only later through definitions. What moves a child up is experience, not age. A definition given too early does not land.', source: 'van Hiele, 1999', url: doi('10.5951/TCM.5.6.0310') },
      { name: 'Things you can move', text: 'Teaching maths with objects children can handle works better than symbols alone. In SHAPES the objects are on screen: you tap corners, drag shapes, fold nets and count cubes.', source: 'Carbonneau, Marley & Selig, 2013', url: doi('10.1037/a0031084') },
      { name: 'Spatial thinking can be trained', text: 'A review of 217 studies found that spatial skills improve with practice, that the gains last, and that they carry over to tasks that were not practised.', source: 'Uttal et al., 2013', url: doi('10.1037/a0028446') },
      { name: 'A clear path from easy to hard', text: 'The US Institute of Education Sciences recommends teaching geometry along a developmental path: recognise shapes, compare them, then take them apart and put them together. SHAPES follows that path across four age groups.', source: 'IES Practice Guide, Frye et al., 2013', url: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/18' },
    ],
  },
  {
    id: 'words',
    name: 'CHERRI WORDS',
    subject: 'English',
    emoji: '🔤',
    color: '#E02424',
    url: 'https://words.cherri.group',
    question: 'If cut is cut, why is cute cute? What if English spelling does make sense once someone explains it?',
    intro: 'English has around 44 sounds and many more ways to spell them. Children do best when those links are taught on purpose and in order.',
    evidence: [
      { name: 'Teach the sounds, in order', text: 'The US National Reading Panel reviewed decades of studies and found that systematic phonics teaching helps children learn to read and spell better than teaching without it, most of all when it starts early.', source: 'National Reading Panel, 2000', url: 'https://www.nichd.nih.gov/publications/pubs/nrp/smallbook' },
      { name: 'Blend sounds into words', text: 'England made systematic synthetic phonics its main way of teaching early reading after an independent review of the evidence. A seven-year study in Scotland found children taught this way read and spelt words well above what was expected for their age.', source: 'Rose Review, 2006; Johnston & Watson, 2005', url: 'https://dera.ioe.ac.uk/id/eprint/5551/2/report.pdf' },
      { name: 'Words are built from parts', text: 'Teaching children how words are built from prefixes, roots and suffixes improved their reading, spelling and vocabulary across 22 studies. It helped younger and struggling readers the most.', source: 'Bowers, Kirby & Deacon, 2010', url: doi('10.3102/0034654309359353') },
      { name: 'Word families explain silent letters', text: 'Children taught how related words share spellings, like sign and signal, were better at working out words they had never been taught. This is the idea behind Word Detectives.', source: 'Bowers & Kirby, 2010', url: doi('10.1007/s11145-009-9172-z') },
    ],
    note: 'An honest note: the stories in Word Detectives about where spellings came from are standard language history. Teaching children that history is much less studied than phonics. We do it because it answers the questions children really ask.',
  },
]

function Source({ source, url, color }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-[11px] font-body italic block transition-opacity opacity-60 hover:opacity-100" style={{ color }}>
      {source} ↗
    </a>
  )
}

export default function Science() {
  return (
    <section id="science" className="py-24 px-6 bg-gradient-to-b from-cherry-50/30 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-cherry font-body font-bold text-sm tracking-widest uppercase">For the Skeptics (We Get It)</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            The Science Behind the Daydreams
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-body">
            You're wondering if this actually works, or if it's just another screen. Fair question. Here is the research behind each app, with a link to every source.
          </p>
          <div className="w-16 h-1 bg-cherry rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Jump links */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {APPS.map(app => (
            <a key={app.id} href={`#science-${app.id}`} className="font-display font-bold text-sm px-4 py-2 rounded-full bg-white border-2 transition-colors hover:text-white"
              style={{ borderColor: app.color, color: app.color }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = app.color }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff' }}>
              {app.emoji} {app.subject}
            </a>
          ))}
        </div>

        {/* Shared ideas */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="font-display text-2xl font-bold text-gray-900 text-center mb-3">Two Ideas Run Through Every App</h3>
          <p className="text-gray-500 text-center font-body max-w-xl mx-auto mb-8">
            The subjects are different. The way a child meets them is the same.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {SHARED.map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-display font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 font-body leading-relaxed mb-3">{item.text}</p>
                <Source source={item.source} url={item.url} color="#FF0000" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* One section per app */}
        {APPS.map(app => (
          <motion.div key={app.id} id={`science-${app.id}`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="mb-20 scroll-mt-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-2">{app.emoji}</div>
              <span className="font-body font-bold text-xs tracking-widest uppercase" style={{ color: app.color }}>{app.subject}</span>
              <h3 className="font-display text-3xl font-bold text-gray-900 mt-1 mb-3">{app.name}</h3>
              <p className="font-handwritten text-xl max-w-2xl mx-auto leading-snug mb-3" style={{ color: app.color }}>{app.question}</p>
              <p className="text-gray-500 font-body max-w-xl mx-auto">{app.intro}</p>
            </div>

            {app.id === 'pick' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {PICK_STATS.map(stat => (
                  <div key={stat.number} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                    <div className="font-display text-3xl md:text-4xl font-bold text-cherry mb-2">{stat.number}</div>
                    <p className="text-xs text-gray-600 font-body leading-relaxed mb-2">{stat.label}</p>
                    <Source source={stat.source} url={stat.url} color="#FF0000" />
                  </div>
                ))}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {app.evidence.map(item => (
                <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4" style={{ borderLeftColor: app.color }}>
                  <h4 className="font-display font-bold text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-600 font-body leading-relaxed mb-2">{item.text}</p>
                  <Source source={item.source} url={item.url} color={app.color} />
                </div>
              ))}
            </div>

            {app.note && (
              <p className="text-sm text-gray-600 font-body leading-relaxed bg-gray-50 rounded-xl p-4 mt-4 max-w-3xl mx-auto">{app.note}</p>
            )}

            <div className="text-center mt-6">
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="inline-block font-display font-bold text-white px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105" style={{ backgroundColor: app.color }}>
                Try {app.name} {app.emoji}
              </a>
            </div>
          </motion.div>
        ))}

        {/* Screen time */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="mb-12 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">
            "But isn't more screen time bad?"
          </h3>
          <div className="max-w-2xl mx-auto space-y-4 font-body text-gray-600">
            <p className="text-lg leading-relaxed">
              The American Academy of Pediatrics no longer talks only about minutes. Its guidance is about <strong className="text-gray-900">what the screen is for and who is there</strong>: good content, used together with a parent, with sleep, play and family time protected.{' '}
              <a href={doi('10.1542/peds.2016-2592')} target="_blank" rel="noopener noreferrer" className="text-cherry/70 hover:text-cherry text-sm italic">AAP, 2016 ↗</a>
            </p>
            <p className="text-lg leading-relaxed">
              A study of more than 120,000 teenagers in England found that <strong className="text-gray-900">moderate screen use was not linked to lower wellbeing</strong>. Problems showed up only at high levels of use. That study was with 15-year-olds, so treat it as a guide, not a promise.{' '}
              <a href={doi('10.1177/0956797616678438')} target="_blank" rel="noopener noreferrer" className="text-cherry/70 hover:text-cherry text-sm italic">Przybylski & Weinstein, 2017 ↗</a>
            </p>
            <p className="text-lg leading-relaxed">
              CHERRI apps are built to be <strong className="text-gray-900">short and active</strong>. There are no endless feeds, no autoplay and no tricks to keep a child glued. A child does one thing, thinks, answers and stops. Every app is meant to be used with a parent nearby.
            </p>
            <div className="bg-cherry-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-cherry-800 font-semibold text-center">
                No ads. No social features. No notifications. No analytics trackers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What we have not proven */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="mb-20 rounded-3xl p-8 md:p-10 border-2 border-dashed border-gray-200">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">What We Have Not Proven</h3>
          <div className="max-w-2xl mx-auto space-y-4 font-body text-gray-600">
            <p className="text-lg leading-relaxed">
              The research above supports the <strong className="text-gray-900">teaching methods</strong> inside our apps. It does not prove that the apps themselves work. Nobody has run a study on CHERRI PICK, TALES, SHAPES or WORDS yet. They are early prototypes built by one Dada for one child.
            </p>
            <p className="text-lg leading-relaxed">
              So try them with your child and trust what you see. If something helps, or doesn't, we would love to hear it at{' '}
              <a href="mailto:daydream@cherri.group" className="text-cherry font-semibold">daydream@cherri.group</a>.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Convinced? Let your child try one.
          </h3>
          <p className="text-gray-500 font-body max-w-lg mx-auto mb-8">
            Children learn better when they have a say and something to do with their hands. Pick the subject your child finds hardest and start there.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {APPS.map(app => (
              <motion.a key={app.id} href={app.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="text-white font-display font-bold px-6 py-3 rounded-full shadow-md inline-block" style={{ backgroundColor: app.color }}>
                {app.emoji} {app.name}
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 font-body">Free prototypes. No signup required. Just sit with your child.</p>
        </motion.div>
      </div>
    </section>
  )
}
