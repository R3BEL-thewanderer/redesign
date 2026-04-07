import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'R9j0Y7P7x5Y';

  return (
    <section className="bg-transparent py-28 md:py-40 px-6 overflow-hidden flex justify-center">
      <div className="w-full max-w-6xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Power <em className="font-[Instrument_Serif] italic text-white/40">x</em> <span className="text-[#eb0028]">Choice</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative w-full"
          >
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title="TEDx Talk 2"
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
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#eb0028] flex items-center justify-center shadow-2xl shadow-[#eb0028]/40 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1" />
                  </div>
                </div>
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center gap-12"
          >
            <div>
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">Crossroads</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every day, we stand at countless crossroads, some obvious, some hidden. A smile given to a stranger, a risk taken, a dream postponed; all of them shaping who we are and who we will become.
              </p>
            </div>
            
            <div className="w-full h-[1px] bg-white/10" />
            
            <div>
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">Bridge the Gap</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                In a world overflowing with possibilities, the true power lies not in having infinite options, but in daring to choose with purpose. To listen to the quiet pull of intuition and embrace the unknown.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
