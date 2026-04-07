import { motion } from 'framer-motion';

const teamSections = [
  {
    title: 'Faculty',
    members: [
      { name: 'Dr. Sujata Alegavi', role: 'Faculty In-charge' },
      { name: 'Mr. Sunil Khatri', role: 'Faculty' },
      { name: 'Dr. Archana Belge', role: 'Faculty' },
      { name: 'Mr. Sumit Kumar', role: 'Faculty' },
    ],
  },
  {
    title: 'Curators',
    members: [
      { name: 'Tabrez Tisekar', role: 'Curator' },
      { name: 'Aman Jain', role: 'Co-Curator' },
      { name: 'Ashutosh Shukla', role: 'Co-Curator' },
    ],
  },
  {
    title: 'Managers',
    members: [
      { name: 'Ayush Sinha', role: 'Creative Manager' },
      { name: 'Zeenat Khatib', role: 'Executive Manager' },
      { name: 'Tanvi Pandey', role: 'Sponsorship & Marketing Manager' },
    ],
  },
  {
    title: 'Organising Committee',
    members: [
      { name: 'Arya Vardhan Singh', role: 'Technical Head' },
      { name: 'Nandini Yadav', role: 'Social Media Lead' },
      { name: 'Saish Kotian', role: 'Creative Lead' },
      { name: 'Ananya Kalia', role: 'Correspondence' },
      { name: 'Nidhi Shukla', role: 'Correspondence' },
      { name: 'Sanchita Warkad', role: 'Correspondence' },
      { name: 'Tiya Rai', role: 'Correspondence' },
      { name: 'Isha Samant', role: 'Marketing' },
      { name: 'Nimeet Chouhan', role: 'Marketing' },
      { name: 'Gautam Kumar', role: 'Creative' },
      { name: 'Mohd. Zakiullah Khatib', role: 'Creative' },
      { name: 'Shreya Shahi', role: 'Creative' },
      { name: 'Pratha Shukla', role: 'Social Media' },
      { name: 'Siddharth Bajpai', role: 'Social Media' },
      { name: 'Akshata Rai', role: 'Technical' },
      { name: 'Girik Shukla', role: 'Technical' },
      { name: 'Vignesh Bordikar', role: 'Technical' },
      { name: 'Asma Qureshi', role: 'Hospitality' },
      { name: 'Pranjal Kanojia', role: 'Hospitality' },
      { name: 'Rudransh Puthan', role: 'Hospitality' },
      { name: 'Vaibhavi Tiwari', role: 'Hospitality' },
      { name: 'Zidane Shikalgar', role: 'Hospitality' },
      { name: 'Ritik Purohit', role: 'Marketing' },
      { name: 'Sagar Sardesai', role: 'Marketing' },
      { name: 'Manini Raval', role: 'Marketing' },
    ],
  },
];

const roleColors: Record<string, string> = {
  'Faculty In-charge': 'bg-[#eb0028]/20 text-[#eb0028]',
  'Faculty': 'bg-white/10 text-white/70',
  'Curator': 'bg-[#eb0028]/20 text-[#eb0028]',
  'Co-Curator': 'bg-[#eb0028]/15 text-[#ff4d6a]',
  'Creative Manager': 'bg-purple-500/15 text-purple-400',
  'Executive Manager': 'bg-blue-500/15 text-blue-400',
  'Sponsorship & Marketing Manager': 'bg-amber-500/15 text-amber-400',
  'Technical Head': 'bg-emerald-500/15 text-emerald-400',
  'Social Media Lead': 'bg-pink-500/15 text-pink-400',
  'Creative Lead': 'bg-violet-500/15 text-violet-400',
  'Correspondence': 'bg-cyan-500/15 text-cyan-400',
  'Marketing': 'bg-amber-500/15 text-amber-400',
  'Creative': 'bg-violet-500/15 text-violet-400',
  'Social Media': 'bg-pink-500/15 text-pink-400',
  'Technical': 'bg-emerald-500/15 text-emerald-400',
  'Hospitality': 'bg-sky-500/15 text-sky-400',
};

function getRoleColor(role: string) {
  return roleColors[role] || 'bg-white/10 text-white/60';
}

export default function TeamPage() {
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
            The People Behind The Event
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Meet The <span className="text-[#eb0028]">Team</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            The passionate individuals who make TEDxTCET possible — from vision to execution.
          </p>
        </motion.div>
      </section>

      {/* Team Sections */}
      <section className="py-10 px-6 max-w-6xl mx-auto space-y-20">
        {teamSections.map((section) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              {section.title}
            </h2>

            <div
              className={`grid gap-6 ${
                section.members.length <= 4
                  ? 'grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              }`}
            >
              {section.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="liquid-glass rounded-2xl p-5 text-center group hover:bg-white/[0.03] transition-all duration-300"
                >
                  {/* Empty image placeholder */}
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/10 mx-auto mb-4 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <span className="text-white/10 text-[10px] tracking-wider uppercase">Photo</span>
                  </div>

                  <h3 className="text-white font-bold text-sm mb-2 leading-tight">{member.name}</h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider ${getRoleColor(
                      member.role
                    )}`}
                  >
                    {member.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
