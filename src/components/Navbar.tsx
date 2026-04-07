import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/blogs', label: 'BLOGS' },
  { to: '/about', label: 'ABOUT' },
  { to: '/speakers', label: 'SPEAKERS' },
  { to: '/team', label: 'TEAM' },
  { to: '/tickets', label: 'TICKETS' },
  { to: '/partners', label: 'PARTNERS' },
];

const moreLinks = [
  { to: '/history', label: 'HISTORY' },
  { to: '/faqs', label: 'FAQs' },
  { href: 'mailto:contact@tedxtcet.com', label: 'CONTACT' },
  { href: 'https://docs.google.com/forms/d/e/1FAIpQLScWrNo8Zh6fA5MzKTdp1zM3mXHg6jIQf5ZHgMcfvu6UXAP9SQ/viewform', label: 'Book Online' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
      isActive
        ? 'text-[#eb0028]'
        : 'text-white/90 hover:text-[#eb0028]'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col cursor-pointer group">
          <span className="text-white font-bold text-2xl lg:text-3xl tracking-tighter">
            <span className="text-[#eb0028] group-hover:brightness-125 transition-all">TEDx</span>TCET
          </span>
          <span className="text-white/50 text-[9px] tracking-widest mt-0.5">
            x = independently organized TED event
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}

          {/* MORE Dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onMouseEnter={() => setMoreOpen(true)}
              className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1 ${
                moreOpen ? 'text-[#eb0028]' : 'text-white/90 hover:text-[#eb0028]'
              }`}
            >
              MORE
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setMoreOpen(false)}
                  className="absolute right-0 top-full mt-3 w-52 rounded-xl liquid-glass py-2 border border-white/10 shadow-2xl shadow-black/40"
                >
                  {moreLinks.map((link) =>
                    link.to ? (
                      <NavLink
                        key={link.label}
                        to={link.to}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-sm tracking-wider transition-all duration-200 ${
                            isActive ? 'text-[#eb0028] bg-white/5' : 'text-white/80 hover:text-[#eb0028] hover:bg-white/5'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => setMoreOpen(false)}
                        className="block px-5 py-3 text-sm tracking-wider text-white/80 hover:text-[#eb0028] hover:bg-white/5 transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-black/90 backdrop-blur-2xl border-l border-white/10 lg:hidden z-50 overflow-y-auto"
            >
              <div className="p-6 pt-20 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                        isActive
                          ? 'text-[#eb0028] bg-[#eb0028]/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="h-px bg-white/10 my-3" />
                <span className="px-4 py-2 text-xs text-white/30 tracking-widest uppercase">More</span>

                {moreLinks.map((link) =>
                  link.to ? (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-lg text-sm font-medium tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'text-[#eb0028] bg-[#eb0028]/10'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href?.startsWith('http') ? '_blank' : undefined}
                      rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 rounded-lg text-sm font-medium tracking-wider text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
