import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const videos = [
  {
    id: 'kYJzX2eQv6Y',
    title: 'The Spirit of Entrepreneurship | Amol Nitave | TEDxTCET',
    duration: '19:07',
  },
  {
    id: 'R9j0Y7P7x5Y',
    title: 'Be your own SUPAhero | Supreet Bedi | TEDxTCET',
    duration: '19:52',
  },
  {
    id: 'kYJtV_n6r-k',
    title: "A Wholesome Period Experience? Yes, It's Possible! | Anju Bist | TEDxTCET",
    duration: '16:08',
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="bg-transparent py-28 md:py-40 px-6 overflow-hidden relative flex justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="w-full max-w-6xl relative z-10 flex flex-col">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl text-white tracking-tight font-bold">All Videos</h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#eb0028] font-medium cursor-pointer hover:text-white transition-colors duration-300">
             <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
               <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-current ml-0.5" />
             </div>
             <span>Play Video</span>
          </div>
        </motion.div>

        {/* Main Video Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] bg-black/50 rounded-3xl overflow-hidden mb-8 shadow-2xl relative group liquid-glass p-2"
        >
           <div className="w-full h-full rounded-2xl overflow-hidden">
             <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              />
           </div>
        </motion.div>

        {/* Thumbnail Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
           {videos.map(video => (
              <button 
                key={video.id} 
                onClick={() => setActiveVideo(video)}
                className={`relative aspect-video rounded-xl overflow-hidden liquid-glass transition-all duration-300 text-left group ${
                  activeVideo.id === video.id ? 'ring-2 ring-[#eb0028] scale-[1.02]' : 'opacity-60 hover:opacity-100 hover:scale-[1.02]'
                }`}
              >
                 <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                    <p className="text-white font-medium text-sm md:text-base line-clamp-2 leading-snug">{video.title}</p>
                    <div className="flex items-center gap-3 mt-3">
                       <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                         <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-current ml-0.5" />
                       </div>
                       <span className="text-white/80 text-xs font-medium uppercase tracking-wider">Play Video</span>
                    </div>
                 </div>
                 <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded-md tracking-wider">
                   {video.duration}
                 </div>
              </button>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
