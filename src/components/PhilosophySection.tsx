import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            className="rounded-3xl overflow-hidden aspect-[4/3] relative w-full pointer-events-none"
          >
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/R9j0Y7P7x5Y?autoplay=1&mute=1&loop=1&playlist=R9j0Y7P7x5Y&controls=0&showinfo=0&rel=0"
              title="TEDx Talk 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
