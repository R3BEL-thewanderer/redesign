import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FeaturedVideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'kYJzX2eQv6Y';

  return (
    <section className="bg-transparent pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden flex justify-center">
      <div className="w-full max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden aspect-video relative w-full"
        >
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
              title="TEDx Talk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-full h-full relative group cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="TEDxTCET Talk"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#eb0028] flex items-center justify-center shadow-2xl shadow-[#eb0028]/40 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-1.5" />
                </div>
              </div>
            </button>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto">
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md">
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-3">The Theme</h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                What did you choose today? The words you spoke. The silence you kept. The path you walked. The one you left behind.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium self-start md:self-auto"
            >
              Explore more
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
