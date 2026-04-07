import { useEffect, useRef } from 'react';

export default function IndexHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start immediately at 2 seconds
    video.currentTime = 2;
    video.play().catch(e => console.log("Play interrupted:", e));

    const handleTimeUpdate = () => {
      if (video.currentTime >= 8) {
        video.currentTime = 2;
        video.play().catch(e => console.log("Play interrupted:", e));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        muted
        autoPlay
        playsInline
        loop
        preload="auto"
        poster="/Hero_Section-image.webp"
        src="/Hero_Section-video.mp4"
      />
      
      {/* Dark overlay for better navbar readability */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/20 pointer-events-none" />
    </section>
  );
}
