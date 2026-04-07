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
        preload="auto"
        src="/Hero_Section-video.mp4"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
