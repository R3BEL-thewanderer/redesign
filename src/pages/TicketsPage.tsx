import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ticketTiers = [
  {
    name: 'Standard Pass',
    price: '₹799',
    
    popular: false,
    features: [
      'Entry to all TEDx Talks',
      'UnlimiTED 5-course buffet lunch',
      'Goodie bag with awesome cool stuff',
      'Access to networking sessions',
      'Event badge & lanyard',
    ],
  },
  {
    name: 'Premium Pass',
    price: '₹1,499',
    
    popular: true,
    features: [
      'Everything in Standard Pass',
      'Priority seating in the auditorium',
      'Speaker Interaction: 1-on-1 Meet & Greet',
      'Premium goodie bag',
      'Certificate of participation',
      'Exclusive networking lounge access',
    ],
  },
  {
    name: 'VIP Experience',
    price: '₹2,499',
    
    popular: false,
    features: [
      'Everything in Premium Pass',
      'Front-row reserved seating',
      'Exclusive backstage access',
      'Photo-op with speakers',
      'VIP-only premium goodie bag',
      'Priority food & beverage service',
      'Personalized event memorabilia',
    ],
  },
];

const includedFeatures = [
  {
    icon: '🎤',
    title: 'Speaker Interaction',
    description:
      'One-on-one Meet & Greet with all speakers. Get personal insights, ask your burning questions, and connect with minds that are shaping the future.',
  },
  {
    icon: '🍽️',
    title: 'UnlimiTED 5 Course Buffet Lunch',
    description:
      'A gourmet dining experience curated exclusively for TEDxTCET attendees. Enjoy a lavish spread while exchanging ideas with fellow attendees.',
  },
  {
    icon: '🎁',
    title: 'Goodie Bag',
    description:
      'Packed with awesome cool stuff from our amazing partners! Take home exclusive merchandise and memories from the event. Check out our partners at tedxtcet.com/partners.',
  },
];

const faqData = [
  {
    category: 'REGISTRATIONS',
    items: [
      {
        q: 'What is the minimum age requirement to be eligible to attend the event?',
        a: 'A person should be above 12 years of age in order to be eligible to attend the event.',
      },
      {
        q: 'Is it necessary to register?',
        a: 'Yes, only registered attendees are allowed inside the venue. Follow the link to register yourself: www.tedxtcet.com/tickets',
      },
      {
        q: 'After registering, how and from where can I collect my tickets?',
        a: 'Once you\'re successfully registered, an e-ticket will be sent to you on your registered email. Please carry it along on the event day in order to attain your event badge from the venue.',
      },
      {
        q: 'What documents do I need to carry along to the event?',
        a: 'Please bring your e-ticket (printout or softcopy) and a valid government verified photo-identity card such as Aadhar Card, Voter\'s ID, Passport, Pan Card etc to avail for an event badge.',
      },
      {
        q: 'Can I cancel my tickets? Will I get a refund in any circumstances?',
        a: 'All event tickets are non-refundable and cancellation at any time will not entitle you to any refund, under any circumstances.',
      },
      {
        q: 'Can I buy tickets at the door?',
        a: 'No. Tickets must be purchased in advance from our tickets page — www.tedxtcet.com/tickets',
      },
    ],
  },
  {
    category: 'DELEGATES / ATTENDEES',
    items: [
      {
        q: "I can't come for the whole day, is it ok to come and go as I need?",
        a: "Re-entry into the venue is strictly prohibited. Attendees will have to submit event badge to the security at the exit. The same will not be given back. We have constructed this experience specifically for us to enjoy the entire day together. Please commit to it. If you do need to leave the room whilst the show is in progress, we will ask you to wait outside until the next break as a courtesy to the speaker and other attendees.",
      },
      {
        q: 'Where can I find details about the Speakers & the Program/Agenda?',
        a: 'The speaker details and other program details will be published on our website www.tedxtcet.com. Also, on the day of the event, the complete program itinerary and agenda will be made available to all the attendees.',
      },
      {
        q: 'Is personal photography and videography allowed? Can I record the event myself?',
        a: 'No. Personal photography and videography is strictly prohibited. Any person found violating the terms and conditions of the event will be asked to leave. Kindly adhere to the event\'s rules & regulations.',
      },
    ],
  },
  {
    category: 'SPEAKERS / PARTNERS / VOLUNTEERS',
    items: [
      {
        q: 'How can I nominate a speaker for TEDxTCET?',
        a: 'Please write to us at contact@tedxtcet.com. If selected, our curation team will reach out to you.',
      },
      {
        q: 'Can I volunteer for TEDxTCET?',
        a: 'Please write to us at contact@tedxtcet.com and tell us why would you like to volunteer with us and how. If there are any volunteering opportunities available, our team will reach out to you.',
      },
      {
        q: 'I still have some questions for you. How can I contact you?',
        a: 'We have answers! Just shoot us an email at contact@tedxtcet.com and expect a quick response.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#eb0028]/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-white/90 font-medium text-sm md:text-base pr-4 group-hover:text-white transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-[#eb0028] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-white/50 text-sm leading-relaxed pl-1">{a}</p>
      </div>
    </div>
  );
}

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<typeof ticketTiers[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 page-enter">
      {/* ===== HERO BANNER ===== */}
      <section className="py-20 md:py-28 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#eb0028] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            TEDxTCET 2025 — Power of Choice
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">TICKETS ARE</span>{' '}
            <span className="text-[#eb0028]">LIVE!</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Secure your seat at the most anticipated TEDx event in Mumbai.
            Ideas worth spreading await you.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScWrNo8Zh6fA5MzKTdp1zM3mXHg6jIQf5ZHgMcfvu6UXAP9SQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#eb0028] hover:bg-[#ff1a3d] text-white font-bold text-lg tracking-wider transition-all duration-300 glow-pulse hover:scale-105"
          >
            BOOK NOW
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-white/30 text-xs mt-6 tracking-wide">
            Tickets Once Purchased Cannot be Refunded In Any Circumstances
          </p>
        </motion.div>
      </section>

      {/* ===== TICKET TIER CARDS ===== */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Choose Your <span className="text-[#eb0028]">Experience</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Every ticket includes access to groundbreaking talks, gourmet dining, and unforgettable connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ticketTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ticket-shimmer ${
                tier.popular ? 'md:-mt-4 md:mb-0' : ''
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#eb0028] text-white text-xs font-bold tracking-[0.2em] text-center py-2 uppercase z-10">
                  Most Popular
                </div>
              )}

              <div className={`liquid-glass rounded-2xl h-full flex flex-col ${tier.popular ? 'border border-[#eb0028]/30' : ''}`}>
                {/* Top accent stripe */}
                <div className={`h-1.5 ${tier.popular ? 'bg-[#eb0028]' : 'bg-gradient-to-r from-white/10 via-white/20 to-white/10'}`} />

                <div className={`p-8 flex flex-col flex-1 ${tier.popular ? 'pt-10' : ''}`}>
                  {/* Tier info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-white/30 text-sm">/person</span>
                    </div>
                  </div>

                  {/* Perforation line */}
                  <div className="ticket-perforation my-6" />

                  {/* Features list */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#eb0028] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedTicket(tier)}
                    className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] ${
                      tier.popular
                        ? 'bg-[#eb0028] hover:bg-[#ff1a3d] text-white shadow-lg shadow-[#eb0028]/20'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    BOOK THIS TICKET
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What's <span className="text-[#eb0028]">Included</span>
          </h2>
          <p className="text-white/40">Every ticket comes packed with an unforgettable experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {includedFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass rounded-2xl p-8 text-center hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </span>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/partners"
            className="text-[#eb0028] hover:text-[#ff4d6a] text-sm font-medium transition-colors underline underline-offset-4"
          >
            Check out our partners here →
          </Link>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked <span className="text-[#eb0028]">Questions</span>
          </h2>
        </div>

        <div className="space-y-12">
          {faqData.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[#eb0028] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                {category.category}
              </h3>
              <div>
                {category.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to be <span className="text-[#eb0028]">inspired</span>?
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            Join hundreds of curious minds at TEDxTCET 2025. Don't miss the ideas that will shape tomorrow.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScWrNo8Zh6fA5MzKTdp1zM3mXHg6jIQf5ZHgMcfvu6UXAP9SQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#eb0028] hover:bg-[#ff1a3d] text-white font-bold text-lg tracking-wider transition-all duration-300 glow-pulse hover:scale-105"
          >
            BOOK YOUR TICKETS NOW
          </a>
        </motion.div>
      </section>

      {/* ===== TICKET PREVIEW MODAL ===== */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/40">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: 20 }}
             className="relative w-full max-w-5xl liquid-glass bg-[#050510]/40 rounded-[2rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden border border-white/10"
           >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedTicket(null)} 
                className="absolute top-4 right-4 text-white/50 hover:text-white z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md transition-all"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Left Side: Live Ticket Preview */}
              <div className="w-full md:w-[45%] p-6 md:p-10 relative border-b md:border-b-0 md:border-r border-white/10 overflow-y-auto">
                  {/* Header label */}
                  <p className="text-[#eb0028] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
                    TEDxTCET 2025 — Live Preview
                  </p>

                  {/* Logo text */}
                  <h2 className="text-2xl font-bold text-white mb-5 font-display">
                    <span className="text-[#eb0028]">TEDx</span>TCET
                  </h2>

                  {/* Tier badge */}
                  <div className={`inline-block px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-6 ${
                    selectedTicket.name === 'VIP Experience' 
                      ? 'bg-[#eb0028] text-white' 
                      : selectedTicket.popular 
                        ? 'bg-[#eb0028] text-white' 
                        : 'bg-white/10 text-white/80'
                  }`}>
                    {selectedTicket.name === 'Standard Pass' ? 'General' : selectedTicket.name === 'Premium Pass' ? 'Premium' : 'VIP'}
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-5xl md:text-6xl font-bold text-white font-display">{selectedTicket.price}</span>
                  </div>
                  <p className="text-white/40 text-sm mb-8">per person · all inclusive</p>

                  {/* Attendee Name */}
                  <div className="mb-6">
                    <label className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium block mb-2">Attendee Name</label>
                    <input 
                      type="text" 
                      placeholder="Type your name here..." 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#eb0028]/40 transition-colors"
                    />
                  </div>

                  {/* Perforation */}
                  <div className="ticket-perforation my-6" />

                  {/* Attendee details */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Attendee</p>
                      <p className="text-white font-[Instrument_Serif] italic text-lg">Your Name</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1">Date</p>
                        <p className="text-white/80 text-sm font-medium">March 15, 2025</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1">Time</p>
                        <p className="text-white/80 text-sm font-medium">9:00 AM onwards</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1">Venue</p>
                      <p className="text-white/80 text-sm font-medium">Thakur College, Mumbai</p>
                    </div>
                  </div>
              </div>

              {/* Right Side: What's Included + Purchase */}
              <div className="w-full md:w-[55%] flex flex-col h-full max-h-[90vh]">
                 <div className="p-6 md:p-10 pb-6 flex-1 overflow-y-auto min-h-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-display">What's Included</h3>
                    
                    <div className="space-y-6">
                       {/* Live Talks */}
                       <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-[#eb0028]/10 flex items-center justify-center flex-shrink-0 text-lg">
                           🎤
                         </div>
                         <div>
                           <h4 className="text-white font-semibold text-sm mb-0.5">Live Talks</h4>
                           <p className="text-white/40 text-sm">Front-row experience with world-class speakers</p>
                         </div>
                       </div>

                       {/* UnlimiTED Buffet */}
                       <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-[#eb0028]/10 flex items-center justify-center flex-shrink-0 text-lg">
                           🍽️
                         </div>
                         <div>
                           <h4 className="text-white font-semibold text-sm mb-0.5">UnlimiTED Buffet</h4>
                           <p className="text-white/40 text-sm">5-course buffet lunch, complimentary all day</p>
                         </div>
                       </div>

                       {/* Goodie Bag */}
                       <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-[#eb0028]/10 flex items-center justify-center flex-shrink-0 text-lg">
                           🎁
                         </div>
                         <div>
                           <h4 className="text-white font-semibold text-sm mb-0.5">Goodie Bag</h4>
                           <p className="text-white/40 text-sm">Exclusive TEDxTCET merchandise & keepsakes</p>
                         </div>
                       </div>

                       {/* Full Day Access */}
                       <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-[#eb0028]/10 flex items-center justify-center flex-shrink-0 text-lg">
                           📋
                         </div>
                         <div>
                           <h4 className="text-white font-semibold text-sm mb-0.5">Full Day Access</h4>
                           <p className="text-white/40 text-sm">All sessions from morning to closing ceremony</p>
                         </div>
                       </div>

                       {/* Dynamic tier-specific features */}
                       {selectedTicket.features
                         .filter(f => !f.toLowerCase().includes('entry') && !f.toLowerCase().includes('buffet') && !f.toLowerCase().includes('goodie'))
                         .map((feature, idx) => (
                         <div key={idx} className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-xl bg-[#eb0028]/10 flex items-center justify-center flex-shrink-0">
                             <svg className="w-5 h-5 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                             </svg>
                           </div>
                           <div>
                             <h4 className="text-white font-semibold text-sm mb-0.5">{feature}</h4>
                             <p className="text-white/40 text-sm">Included with your {selectedTicket.name}</p>
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Bottom CTA */}
                 <div className="p-6 md:p-10 pt-4 border-t border-white/5">
                   <p className="text-[#eb0028] text-[10px] font-medium tracking-widest uppercase mb-4 text-center">
                     * Tickets Once Purchased Cannot be Refunded
                   </p>
                   <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScWrNo8Zh6fA5MzKTdp1zM3mXHg6jIQf5ZHgMcfvu6UXAP9SQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-center py-4 rounded-xl bg-[#eb0028] hover:bg-[#ff1a3d] text-white font-bold text-base tracking-[0.1em] transition-all duration-300 shadow-xl shadow-[#eb0028]/30 hover:shadow-[#eb0028]/50 hover:-translate-y-1"
                    >
                      PROCEED TO PURCHASE
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                 </div>
              </div>
           </motion.div>
        </div>
      )}
    </div>
  );
}
