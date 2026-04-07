import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/tedxtcet',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tedxtcet',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/tedxtcet',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tedxtcet',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@tedxtcet',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-[#eb0028] hover:scale-110 transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Connect + Address */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Connect */}
          <div className="text-center md:text-left">
            <h3 className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5 font-medium">
              Connect With Us
            </h3>
            <div className="space-y-2">
              <a href="mailto:organizer@tedxtcet.com" className="block text-white/60 hover:text-[#eb0028] text-sm transition-colors">
                organizer@tedxtcet.com
              </a>
              <a href="mailto:contact@tedxtcet.com" className="block text-white/60 hover:text-[#eb0028] text-sm transition-colors">
                contact@tedxtcet.com
              </a>
              <a href="mailto:partner@tedxtcet.com" className="block text-white/60 hover:text-[#eb0028] text-sm transition-colors">
                partner@tedxtcet.com
              </a>
              <div className="pt-2 space-y-1">
                <p className="text-white/40 text-sm">Tabrez Tisekar: <span className="text-white/60">+91 - 9518588117</span></p>
                <p className="text-white/40 text-sm">Zeenat Khatib: <span className="text-white/60">+91 - 8669250760</span></p>
                <p className="text-white/40 text-sm">Ashutosh Shukla: <span className="text-white/60">+91 - 9324029476</span></p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="text-center md:text-right">
            <h3 className="text-white/40 text-xs tracking-[0.3em] uppercase mb-5 font-medium">
              Address
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm md:ml-auto">
              Thakur College of Engineering & Technology, A-Block, Thakur Educational Campus,
              Shyamnarayan Thakur Marg, Thakur Village, Kandivali (E), Mumbai - 400101
            </p>
            <div className="mt-6">
              <Link
                to="/tickets"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#eb0028] hover:bg-[#ff1a3d] text-white text-sm font-medium tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0028]/30"
              >
                BOOK TICKETS
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            Copyright © TEDxTCET 2024
          </p>
          <p className="text-white/25 text-xs tracking-wide text-center">
            This independent event is operated under license from TED. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
