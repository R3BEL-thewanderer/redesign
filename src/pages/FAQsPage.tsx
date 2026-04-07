import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export default function FAQsPage() {
  return (
    <div className="min-h-screen pt-20 page-enter">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#eb0028] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Got Questions?
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#eb0028]">FAQs</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about TEDxTCET 2025 — from registration
            to the event day experience.
          </p>
        </motion.div>
      </section>

      {/* FAQ Sections */}
      <section className="py-10 px-6 max-w-3xl mx-auto">
        <div className="space-y-14">
          {faqData.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="liquid-glass rounded-2xl p-8"
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

      {/* Still have questions CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still have <span className="text-[#eb0028]">questions</span>?
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-md mx-auto">
            Can't find what you're looking for? Don't hesitate to reach out — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@tedxtcet.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#eb0028] hover:bg-[#ff1a3d] text-white font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
            >
              EMAIL US
            </a>
            <Link
              to="/tickets"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider border border-white/10 transition-all duration-300 hover:scale-105"
            >
              VIEW TICKETS
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
