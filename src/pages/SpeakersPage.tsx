import { motion } from 'framer-motion';

const speakers = [
  {
    name: 'Raj Deshmukh',
    title: 'Environmental & Social Impact Leader, Founder – Jagruti Group Pune, Advisory Board Member – Worship Earth Foundation',
    bio: 'Raj Deshmukh, an Environmental & Social Impact Leader, serves as an Advisory Board Member of Worship Earth Foundation and is the Founder of Jagruti Group Pune. He has driven grassroots initiatives ranging from river clean-ups, heritage site restoration, and tree plantations to voter awareness, digital literacy, and women\'s empowerment. His impactful efforts include record-breaking blood donation drives during COVID-19, large-scale clothes and footwear distributions for rural workers, and collaborations with Green Thumb Foundation for environmental rejuvenation. Known as the go-to person during natural calamities, Raj has been at the forefront of swift aid distribution and relief support in times of crisis.\n\nOn a personal note, Raj and his wife adopted 13 girls to provide them with free education, reflecting his deep belief in empowering future generations. Recipient of over 68 awards — including the Sunrise Yuvratna, Suryadatta National, and Pride of Pune Awards — his journey blends environmental action with human compassion, inspiring communities to create lasting, meaningful change.',
    social: { instagram: 'https://www.instagram.com/rajdeshmukh.speaks/' },
  },
  {
    name: 'Dr. Milind Bhoi',
    title: 'Doctor, Author, Social Reformer, State Coordinator – Maharashtra Police Anti-Narcotics Task Force',
    bio: 'Prof. Dr. Milind Bhoi, M.S. (E.N.T.), Consultant in Oral Cancer Surgery & Voice Care Specialist, is a renowned doctor and social reformer with over 31 years of service. Recipient of 51 awards including the prestigious National Youth Award (2002) by the Hon\'ble President of India, he has pioneered research on oral cancer and tobacco, authored the acclaimed book Voice Care for Singers, and developed the patented Ayurvedic formulation Melo Voice, trusted by singers and performers across India.\n\nBeyond medicine, Dr. Bhoi worked under the mentorship of Dr. A.P.J. Abdul Kalam for six years as a coordinator in the Vision India 2020 project, shaping youth-centric initiatives. Currently, he is leading the fight against Narcotic drugs abuse as State Coordinator for the Maharashtra Police Anti-Narcotics Task Force. He has produced a widely appreciated documentary on narcotics and delivered 192 awareness lectures in schools and colleges, while also contributing to farmer suicide rehabilitation and prisoner reform.',
    social: {},
  },
  {
    name: 'Dr. Archana Srivastava',
    title: 'Artist, Historian, Founder of ArtSage, Co-founder of Les Trésors',
    bio: 'Dr. Archana Srivastava is an artist, historian, and cultural visionary who has spent over twenty-five years bringing India\'s timeless heritage to life through her art. Rooted in figurative compositions inspired by Vedic spirituality and classical poetry, her work has been celebrated on global stages — from Mumbai to New York, Tokyo to Cannes.\n\nHonoured with accolades including the Make in India Award, the Woman of Excellence Award, and the Leonardo da Vinci Prize, she continues to redefine creativity by seamlessly blending history with contemporary expression. Beyond the canvas, Dr. Srivastava is the Co-founder of Les Trésors Art Gallery in Mumbai and the Founder of ArtSage, a platform dedicated to empowering folk and tribal artists. Through Les Trésors Art Gallery, she curates exceptional artistic expressions and celebrates the dynamic spirit of contemporary art.\n\nToday, she invites us to embark on a journey into a world where art is not just creation, but a living bridge between heritage, identity, and the choices we make for the future.',
    social: { website: 'https://archanasrivastava.com/' },
  },
  {
    name: 'Dipesh Tank',
    title: 'Humanitarian, Social Impact Leader, Founder of Youth for People',
    bio: 'Dipesh Tank is a humanitarian and social impact leader who has risked his life to make Mumbai\'s streets, trains, and communities safer. As the founder of Youth for People and the "War Against Railway Rowdies" (WARR) campaign, he has worked relentlessly to protect women and children from harassment, trafficking, and violence.\n\nHis efforts have helped rescue over 300 trafficked minors from illegal trafficking networks and assisted police in nabbing more than 150 harassers. After meeting a 13-year-old trafficking survivor, Dipesh left his corporate career to fight exploitation full-time, dedicating himself to prevention, rescue operations, and rehabilitation. He now focuses on building long-term solutions — from healthcare and digital learning centers for rural children to community programs that empower vulnerable youth and break cycles of exploitation.\n\nHis life\'s work has inspired the documentary "Dear Men", which calls for a cultural shift toward accountability and safer spaces for women. Dipesh continues to stand at the forefront of change, proving that one individual\'s courage can protect countless lives and create safer communities for all.',
    social: { instagram: 'https://www.instagram.com/dipeshtank' },
  },
  {
    name: 'Captain Amit Rai',
    title: 'Army Veteran, Founder & Director of BuildINT',
    bio: 'Captain Amit Rai, Founder and Director of BuildINT Co — an IoT Greentech Innovation Company, has dedicated his life to service in two distinct yet connected fields. He began his career as a tech officer in the Indian Army\'s Corps of EME, where he gained deep insights into discipline, resilience, and leadership. Building on this foundation, he transitioned into the world of technology and sustainability, carrying forward the same commitment to purpose and impact.\n\nToday, as Director at BuildINT, he drives Business Excellence and Product Strategy, helping enterprises adopt intelligent energy-management solutions. His journey through SBI Life, Fullerton India, and IIFL gave him the corporate lens, but it is his soldier\'s mindset that defines how he builds products, teams, and partnerships. From safeguarding borders to safeguarding the planet\'s future, Capt. Rai continues to serve — this time by bringing innovation and sustainability together for a greener tomorrow.',
    social: { linkedin: 'https://www.linkedin.com/in/captain-amit-rai-710b8a10/' },
  },
  {
    name: 'Srishti Srivastava',
    title: 'Founder & CEO of Infiheal',
    bio: 'Srishti Srivastava, the Founder and CEO of InfiHeal, is a visionary entrepreneur dedicated to transforming mental healthcare through innovation and empathy. Her journey began with personal struggles that ignited a deep understanding of the barriers surrounding therapy, from stigma to affordability and access. After completing her education from IIT Bombay (B.Tech) and Cornell University (Executive MBA) and gaining valuable experience across sectors, she channelled her passion into creating Healo, an award-winning AI mental health companion that provides round-the-clock counselling and seamlessly connects users to human support when needed.\n\nBuilt on proprietary datasets and informed by Responsible AI principles, her work ensures clinical reliability, safety, cultural inclusivity, and accessibility in over 93 languages. Recognized by PM Modi in Mann Ki Baat, and leading platforms including UNDP, World Bank, Forbes Top 100 Startups, IBM, Nasscom — Srishti\'s work reflects her belief that innovation must serve humanity. With her authentic storytelling and mission-driven approach, Srishti inspires audiences by blending personal experience with professional expertise, showing how technology can make mental healthcare more stigma-free, inclusive, and accessible for all.',
    social: { linkedin: 'https://www.linkedin.com/in/srishti-srivastava139' },
  },
];

export default function SpeakersPage() {
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
            TEDxTCET 2025
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#eb0028]">Speakers</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the extraordinary minds who will share ideas worth spreading
            at TEDxTCET 2025 — Power of Choice.
          </p>
        </motion.div>
      </section>

      {/* Speaker Cards */}
      <section className="py-10 px-6 max-w-5xl mx-auto space-y-12">
        {speakers.map((speaker, i) => (
          <motion.div
            key={speaker.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="liquid-glass rounded-2xl overflow-hidden"
          >
            <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Image placeholder area — left empty for user to add real photos */}
              <div className="w-full md:w-80 h-72 md:h-auto flex-shrink-0 bg-white/[0.02] flex items-center justify-center border-b md:border-b-0 border-white/5">
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-white/15 text-xs tracking-wider uppercase">Photo</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{speaker.name}</h3>
                <p className="text-[#eb0028] text-sm font-medium mb-5">{speaker.title}</p>
                <div className="text-white/50 text-sm leading-relaxed whitespace-pre-line">
                  {speaker.bio}
                </div>

                {/* Social Links */}
                {Object.keys(speaker.social).length > 0 && (
                  <div className="flex gap-3 mt-6">
                    {speaker.social.instagram && (
                      <a
                        href={speaker.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#eb0028] hover:bg-white/10 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    )}
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#eb0028] hover:bg-white/10 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {speaker.social.website && (
                      <a
                        href={speaker.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#eb0028] hover:bg-white/10 transition-all duration-300"
                        aria-label="Website"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
