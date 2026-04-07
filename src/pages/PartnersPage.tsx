import { motion } from 'framer-motion';

const partners = [
  { name: 'Burger King', tier: 'Title Partner' },
  { name: 'Tata Play Fiber', tier: 'Co-Title Partner' },
  { name: 'Nescafé', tier: 'Beverage Partner' },
  { name: 'MOD', tier: 'Style Partner' },
];

export default function PartnersPage() {
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
            Our Collaborators
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#eb0028]">Partners</span>
          </h1>
        </motion.div>
      </section>

      {/* Description */}
      <section className="px-6 max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-2xl p-8 md:p-10 text-center"
        >
          <p className="text-white/60 leading-relaxed text-sm md:text-base">
            TEDxTCET is not only an event. It's a spirit, a mindset, an interactive community
            and also a platform for collaboration and knowledge-sharing between speakers, community
            members and partners from the worlds of technology, design, science, education, business
            and arts. We highly appreciate these collaborations and say THANK YOU to each and everyone
            who helps and supports us in every way they can. TEDxTCET would not be the same without you!
          </p>
        </motion.div>
      </section>

      {/* Thank You heading */}
      <section className="px-6 max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          We would like to <span className="text-[#eb0028]">thank</span> our partners for supporting us!
        </h2>
      </section>

      {/* Partner Logo Grid */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/[0.03] transition-all duration-300 group aspect-square"
            >
              {/* Empty logo area */}
              <div className="w-24 h-24 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center mb-4 group-hover:border-white/20 transition-colors">
                <span className="text-white/10 text-[10px] tracking-wider uppercase">Logo</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{partner.name}</h3>
              <span className="text-[#eb0028] text-xs">{partner.tier}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-2xl p-10 md:p-14 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Become a <span className="text-[#eb0028]">Partner</span>
          </h2>
          <p className="text-white/40 mb-8 text-sm leading-relaxed">
            Interested in partnering with TEDxTCET? We'd love to collaborate with you.
            Reach out to us and let's create something amazing together.
          </p>
          <p className="text-white/30 text-xs tracking-wider uppercase mb-6">
            To be a partner, contact us at
          </p>
          <a
            href="mailto:partner@tedxtcet.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#eb0028] hover:bg-[#ff1a3d] text-white font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
          >
            partner@tedxtcet.com
          </a>
        </motion.div>
      </section>
    </div>
  );
}
