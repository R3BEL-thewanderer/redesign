import { motion } from 'framer-motion';

const pastSpeakers = [
  {
    name: 'Bhavya Jain',
    title: 'Co-Founder, Kala Akshar',
    bio: 'Bhavya Jain is the 17-year old co-founder of Kala Akshar — an innovative approach to transform rural education in India. Jain co-founded Kala Akshar, along with his sisters, to experiment innovative ways of attracting village children to schools and reduce drop-outs. The method used is to combine fun, recreation and sports with studies. It has received overwhelming success in rural schools of Rajasthan. Bhavya is currently studying at Cheltenham College in UK and is a part of the Extended Project Qualification (EPQ) addressing "Should developed and developing countries take equal responsibility for reducing greenhouse gas emissions".',
  },
  {
    name: 'Anju Bist',
    title: 'Padwoman, Social Entrepreneur',
    bio: 'Her journey has been extremely inspirational. Her visionary leadership inspired her to create innovative solutions such as the Saukhyam Reusable Sanitary Pads made of banana fiber. These pads meet the monthly hygiene demands and encourage environmental sustainability. Her worldwide recognition raised awareness about the power of dedication and potential to create meaningful impact through persistent efforts.',
  },
  {
    name: 'Harshveer Jain',
    title: 'Co-founder of Mingout, Content Creator and Storyteller',
    bio: 'Have you ever thought who is behind the dazzling doodles that make you lose track of time? One of India\'s top storytellers, comic strip creator, and doodler is Harshveer Jain. He is never without a tale to tell or a message to impart. His primary goal is to use his tales to inspire people to be better and more compassionate. With 430k Followers on his social media, Harshveer has never failed to entertain the internet with his quirky content. @storysellercomics on Instagram is where one can catch up with his daily dose of humorous panels with a side of hard hitting reality checks without any sugar coating. He is an IIM Calcutta and IIT Bombay alumnus and received a perfect score on the CAT 2014 exam. In addition to this, he is a co-founder of Mingout, a community and lifestyle platform.',
  },
  {
    name: 'Aakarsh Sethi',
    title: 'Senior Product Manager, Infinx Healthcare',
    bio: 'Aakarsh Sethi is currently the Senior Product Manager at INFINX Healthcare, Austin. He has five years of experience in a fast-paced start-up environment building V1 technology solutions for the healthcare industry.',
  },
  {
    name: 'Prathamesh Jaju',
    title: 'Astrophotographer',
    bio: 'Prathamesh Jaju is an amateur astronomer and Astrophotographer from Pune, India. He is currently 16 years old. He has been in field of Astronomy for 5 years and Astrophotography for 3 years. He\'s a member and volunteer at an organisation called Jyotirvidya Parisanstha, which is India\'s oldest association of amateur astronomers. He has been taking photos of the night sky and the celestial objects for the past few years and he tries his best to enhance his processing skills and learn new techniques to make the images look better. Besides Astronomy & Astrophotography, he has been playing Athletics — Long Jump since 2012 from Deccan Gymkhana and has participated for the National Level Competitions in Long Jump in 2019. He gained recognition for his work in Astrophotography for his Last Quarter Mineral Moon image which was his clearest picture of the Moon. He captured 50,000 images and merged them into one 52mp image of the Moon.',
  },
  {
    name: 'Parag Doodhya',
    title: 'Fitness Motivator, Public Speaker & Marathon Runner',
    bio: 'Parag Doodhya was 15 years old when he was diagnosed with a kidney disease, Nephrotic Syndrome — a condition wherein large amount of protein leaks out from the blood. He was put up on medicines including steroids for multiple years. By 2015, while the disease was brought under control, Parag had gained lot of weight as a side effect of the steroids. He experienced increased risk of infections, thinning bones, slower wound healing and had acne all over his body, all of which were side effects of his medication. Fast forward a couple of years and today, Parag is a transformed 21 year old, a superfit and confident engineering student who is regular in running marathons. He\'s now a fitness motivator & a public speaker who helps people in staying fit and also inspires people to fight from all odds of their life. For someone who couldn\'t run a few hundred meters to becoming a capable runner who can run miles, he surely has come a long way.',
  },
  {
    name: 'Debasshish Ghosh',
    title: 'World Motorcycle Rider',
    bio: 'Debasshish Ghosh is a world motorcycle rider whose adventures have taken him across continents and cultures. His journey is a testament to the power of choice — choosing the road less traveled, embracing the unknown, and finding purpose in every mile.',
  },
];

const pastTeam2024 = [
  { name: 'Kshithij Shetty', role: 'Sponsorship & Publicity' },
  { name: 'Pritesh Jain', role: 'Sponsorship & Publicity' },
  { name: 'Shivam Mishra', role: 'Sponsorship & Publicity' },
  { name: 'Shruti Mishra', role: 'Sponsorship & Publicity' },
  { name: 'Kabir Jagnam', role: 'Sponsorship & Publicity' },
  { name: 'Jay Mehta', role: 'Sponsorship & Publicity' },
  { name: 'Rishabh Dubey', role: 'Social Media' },
  { name: 'Shivam Gupta', role: 'Technical Team' },
  { name: 'Aryavardhan Singh', role: 'Technical Team' },
  { name: 'Vivek Gupta', role: 'Technical Team' },
  { name: 'Zeenat Khatib', role: 'Hospitality Team' },
  { name: 'Cherita Gullapalli', role: 'Hospitality Team' },
  { name: 'Nandini Yadav', role: 'Hospitality Team' },
  { name: 'Vedant Sakhale', role: 'Hospitality Team' },
  { name: 'Mrigakshi Kaul', role: 'Hospitality Team' },
  { name: 'Nandika Bhardwaj', role: 'Anchor' },
  { name: 'Dhruv Sood', role: 'Anchor' },
  { name: 'Aryaman Mathur', role: 'Anchor' },
  { name: 'Tanvi Pandey', role: 'Anchor' },
];

const pastCoreTeam = [
  { name: 'Kshithij Shetty', role: 'Co-curator' },
  { name: 'Namit Singh', role: 'Sponsorship & Marketing' },
  { name: 'Aman Jain', role: 'Digital Marketing Manager' },
  { name: 'Shailja Jadon', role: 'Correspondence & Curation' },
  { name: 'Shubham Gadia', role: 'Technical Co-ordinator' },
  { name: 'Gayatri Menon', role: 'Technical Co-ordinator' },
  { name: 'Udita Mathur', role: 'Event Host' },
  { name: 'Deep Doshi', role: 'Event Host' },
  { name: 'Dishant Doshi', role: 'Licensee and Chief Organizer' },
];

export default function HistoryPage() {
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
            Our Journey Since 2018
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#eb0028]">History</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            A look back at the extraordinary minds who have graced the TEDxTCET stage
            and the teams that brought it all together.
          </p>
        </motion.div>
      </section>

      {/* Past Speakers */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Past <span className="text-[#eb0028]">Speakers</span>
        </h2>

        <div className="space-y-8">
          {pastSpeakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="liquid-glass rounded-2xl overflow-hidden"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Empty image area */}
                <div className="w-full md:w-64 h-52 md:h-auto flex-shrink-0 bg-white/[0.02] flex items-center justify-center border-b md:border-b-0 border-white/5">
                  <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center">
                    <span className="text-white/10 text-[10px] tracking-wider uppercase">Photo</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{speaker.name}</h3>
                  <p className="text-[#eb0028] text-sm font-medium mb-4">{speaker.title}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{speaker.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Core Team */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Past Core <span className="text-[#eb0028]">Team</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 text-xs tracking-[0.2em] uppercase px-6 py-4">Name</th>
                  <th className="text-left text-white/40 text-xs tracking-[0.2em] uppercase px-6 py-4">Position</th>
                </tr>
              </thead>
              <tbody>
                {pastCoreTeam.map((member, i) => (
                  <tr key={member.name} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                    <td className="px-6 py-3.5 text-white/80 text-sm">{member.name}</td>
                    <td className="px-6 py-3.5">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider bg-[#eb0028]/15 text-[#eb0028]">
                        {member.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Past Organising Team */}
      <section className="py-10 pb-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Past Organising <span className="text-[#eb0028]">Team</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 text-xs tracking-[0.2em] uppercase px-6 py-4">Name</th>
                  <th className="text-left text-white/40 text-xs tracking-[0.2em] uppercase px-6 py-4">Role</th>
                </tr>
              </thead>
              <tbody>
                {pastTeam2024.map((member, i) => (
                  <tr key={`${member.name}-${i}`} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                    <td className="px-6 py-3.5 text-white/80 text-sm">{member.name}</td>
                    <td className="px-6 py-3.5">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider bg-white/10 text-white/60">
                        {member.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
