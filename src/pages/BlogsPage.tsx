import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'The Ouroboros Paradox',
    author: 'Adhish Kaushal',
    excerpt:
      'Exploring the eternal cycle of creation and destruction — how the choices we make today ripple through time, shaping the very fabric of our existence. A deep dive into the paradox that binds beginnings and endings.',
  },
  {
    title: 'Through the Peaks and Valleys: Navigating the Cycles of Life',
    author: 'Shreya Mishra',
    excerpt:
      'Life is never a straight line. It\'s a journey of highs and lows, moments of triumph and lessons in resilience. This blog explores how embracing both peaks and valleys can lead to a more fulfilling and purposeful existence.',
  },
  {
    title: 'Embracing the Journey: Unleashing the Power of Late Bloomers',
    author: 'Bhargav Nadiyana',
    excerpt:
      'Not everyone blooms at the same time, and that\'s perfectly okay. Discover the inspiring stories of late bloomers who defied timelines and conventional success, proving that greatness has no expiry date.',
  },
  {
    title: 'Unleashing the Power Within',
    author: 'Disha Dahanukar',
    excerpt:
      'Every person carries within them an untapped reservoir of potential. This blog explores the science and art of unlocking your inner power — from mindset shifts to daily habits that transform ordinary lives into extraordinary journeys.',
  },
  {
    title: 'A Little Spark of Determination',
    author: 'TEDxTCET Editorial',
    excerpt:
      'Sometimes all it takes is a tiny spark to ignite a roaring fire of change. Read about the moments of determination that defined ordinary people\'s journeys into extraordinary achievements — and what we can learn from their choices.',
  },
];

export default function BlogsPage() {
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
            Ideas Worth Reading
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#eb0028]">Blogs</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Stories, insights, and perspectives from the TEDxTCET community.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl overflow-hidden group hover:bg-white/[0.03] transition-all duration-300"
            >
              {/* Empty image area */}
              <div className="w-full h-48 bg-white/[0.02] flex items-center justify-center border-b border-white/5">
                <div className="w-16 h-16 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-white/10 text-[9px] tracking-wider uppercase">Cover</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#eb0028] transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-[#eb0028] text-xs font-medium mb-3">By {blog.author}</p>
                <p className="text-white/40 text-sm leading-relaxed mb-5 line-clamp-3">
                  {blog.excerpt}
                </p>
                <button className="text-[#eb0028] hover:text-[#ff4d6a] text-sm font-bold tracking-wider uppercase transition-colors flex items-center gap-2 group/btn">
                  DISCOVER
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Write for us CTA */}
      <section className="py-20 px-6 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-2xl p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Be a Published <span className="text-[#eb0028]">Writer</span>!
          </h2>
          <p className="text-white/40 text-sm mb-6 leading-relaxed">
            Have an idea worth sharing? Send through your submissions now and get featured on
            the TEDxTCET blog. We're always looking for fresh perspectives and compelling stories.
          </p>
          <a
            href="mailto:contact@tedxtcet.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#eb0028] hover:bg-[#ff1a3d] text-white font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
          >
            SUBMIT YOUR BLOG
          </a>
        </motion.div>
      </section>
    </div>
  );
}
