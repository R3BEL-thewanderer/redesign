import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FeaturedVideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <iframe
            className="w-full h-full object-cover pointer-events-none"
            src="https://www.youtube.com/embed/kYJzX2eQv6Y?autoplay=1&mute=1&loop=1&playlist=kYJzX2eQv6Y&controls=0&showinfo=0&rel=0"
            title="TEDx Talk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
