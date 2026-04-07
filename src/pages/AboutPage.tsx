import { motion } from 'framer-motion';

const aboutSections = [
  {
    title: 'About TED',
    content:
      'TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world\'s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.',
  },
  {
    title: 'About TEDx',
    content:
      'In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)',
  },
  {
    title: 'About TEDxTCET',
    content:
      'TEDxTCET has been spreading ideas and knowledge since 2018. Since then, TCET has been a house to extraordinary TEDx speakers from different fields. We believe in diversity — all our speakers come from various backgrounds. TEDxTCET has contributed to more than 1.5 million views on the main TEDx YouTube channel. Thakur College of Engineering & Technology has always been supportive for all the resources required while bringing the event on the floor.',
  },
];

const tedLinks = [
  {
    title: 'History of TED',
    description: 'Learn how a one-off conference became a viral video phenomenon and worldwide community.',
    url: 'https://www.ted.com/about/our-organization/history-of-ted',
  },
  {
    title: 'TED Blog',
    description: 'Updates from TED and highlights from the global community.',
    url: 'https://blog.ted.com/',
  },
  {
    title: 'How TED Works',
    description: 'Get answers to commonly asked questions — and a few misconceptions — about how TED operates.',
    url: 'https://www.ted.com/about/our-organization',
  },
  {
    title: 'Policies and Terms',
    description: 'TED is a platform for sharing ideas, with basic ground rules around privacy, civility and the rights of creators.',
    url: 'https://www.ted.com/about/our-organization/our-policies-terms',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 page-enter">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#eb0028] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-[#eb0028]">TEDx</span>TCET
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            In the spirit of ideas worth spreading, TEDxTCET is an independently organized TED event.
            Our goal is to bring together bright minds to give talks that are idea-focused, on a
            wide range of subjects, to foster learning, inspiration and wonder — and provoke
            conversations that matter.
          </p>
        </motion.div>
      </section>

      {/* About Sections */}
      <section className="py-10 px-6 max-w-4xl mx-auto space-y-10">
        {aboutSections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
              {section.title.includes('TEDx') && !section.title.includes('TCET') ? (
                <>About <span className="text-[#eb0028]">TEDx</span></>
              ) : section.title.includes('TCET') ? (
                <>About <span className="text-[#eb0028]">TEDx</span>TCET</>
              ) : (
                <>About <span className="text-[#eb0028]">TED</span></>
              )}
            </h2>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              {section.content}
            </p>
          </motion.div>
        ))}
      </section>

      {/* TED Links Grid */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Learn More About <span className="text-[#eb0028]">TED</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {tedLinks.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-7 group hover:bg-white/[0.03] transition-all duration-300 block"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#eb0028] transition-colors flex items-center gap-2">
                {link.title}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '2018', label: 'Established' },
            { value: '1.5M+', label: 'YouTube Views' },
            { value: '50+', label: 'Speakers' },
            { value: '6+', label: 'Editions' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#eb0028] mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
