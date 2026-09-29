import { useState } from 'react';
import { faqs } from '../data/faq/faq.js';
import { coreContacts } from '../data/site.js';

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Event Registration',
    college: '',
    msg: '',
  });

  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.msg.trim()) {
      onShowToast?.('Please complete all required fields.', 'error');
      return;
    }
    onShowToast?.(
      `Thanks ${formData.name}! Message sent. We'll get back to you within 24 hrs.`,
      'success'
    );
    setFormData({
      name: '',
      phone: '',
      email: '',
      topic: 'Event Registration',
      college: '',
      msg: '',
    });
  }

  function toggleFaq(id) {
    setOpenFaq((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <section className="bg-charcoal text-ivory pt-14 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[.07] halftone"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="font-grotesk font-bold text-xs tracking-[.3em] text-mustard">
            SPONSORSHIPS • QUERIES • LOST &amp; FOUND
          </div>
          <h1 className="font-display text-6xl md:text-8xl mt-2">
            TALK TO <span className="text-mustard">US.</span>
          </h1>
          <p className="text-ivory/70 max-w-2xl mt-3 md:text-lg">
            We reply fast — usually between lectures. For urgent fest-day help, call the helpline.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-12 md:py-16 paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="bg-paper border-[3px] border-charcoal hard-lg p-6 md:p-9"
            >
              <h2 className="font-display text-3xl">SEND A MESSAGE</h2>
              <p className="text-sm text-smoke mt-1">
                For event doubts, passes, stalls &amp; sponsorships.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="font-grotesk font-bold text-xs tracking-widest">
                    YOUR NAME *
                  </label>
                  <input
                    required
                    id="c-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    className="mt-2 w-full border-[2.5px] border-charcoal bg-ivory px-4 py-3 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="font-grotesk font-bold text-xs tracking-widest">
                    PHONE *
                  </label>
                  <input
                    required
                    id="c-phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    type="tel"
                    pattern="[0-9+ ]{10,15}"
                    placeholder="98765 43210"
                    className="mt-2 w-full border-[2.5px] border-charcoal bg-ivory px-4 py-3 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="font-grotesk font-bold text-xs tracking-widest">
                  EMAIL *
                </label>
                <input
                  required
                  id="c-email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="you@college.edu"
                  className="mt-2 w-full border-[2.5px] border-charcoal bg-ivory px-4 py-3 text-sm font-semibold"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="font-grotesk font-bold text-xs tracking-widest">
                    TOPIC
                  </label>
                  <select
                    id="c-topic"
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="mt-2 w-full border-[2.5px] border-charcoal bg-ivory px-4 py-3 text-sm font-semibold"
                  >
                    <option>Event Registration</option>
                    <option>Passes &amp; Entry</option>
                    <option>Sponsorship</option>
                    <option>Stall Booking</option>
                    <option>Volunteering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-grotesk font-bold text-xs tracking-widest">
                    COLLEGE
                  </label>
                  <input
                    id="c-college"
                    value={formData.college}
                    onChange={(e) =>
                      setFormData({ ...formData, college: e.target.value })
                    }
                    type="text"
                    placeholder="Your college name"
                    className="mt-2 w-full border-[2.5px] border-charcoal bg-ivory px-4 py-3 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="font-grotesk font-bold text-xs tracking-widest">
                  MESSAGE *
                </label>
                <textarea
                  required
                  id="c-msg"
                  value={formData.msg}
                  onChange={(e) =>
                    setFormData({ ...formData, msg: e.target.value })
                  }
                  rows="4"
                  placeholder="Tell us how we can help…"
                  className="mt-2 w-full border-[2.5px] border-charcoal bg-ivory px-4 py-3 text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                id="contactBtn"
                className="btn btn-terra w-full py-4 mt-6 text-sm"
              >
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
              <p className="text-center text-xs text-smoke mt-3">
                We usually reply within 24 hours on working days.
              </p>
            </form>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                QUICK ANSWERS
              </h3>
              <div className="space-y-3" id="faqWrap">
                {faqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="faq-item bg-paper border-[2.5px] border-charcoal hard-sm"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex justify-between items-center p-4 font-grotesk font-bold text-left text-sm md:text-base"
                      >
                        {faq.question}{' '}
                        <span className="faq-icon w-8 h-8 bg-charcoal text-ivory flex items-center justify-center text-lg shrink-0 ml-3">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer px-4">
                          <p className="pb-4 text-sm text-smoke">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-terracotta text-ivory border-[3px] border-charcoal hard p-6">
              <h3 className="font-display text-2xl">FIND US ON CAMPUS</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="flex gap-3">
                  <i className="fa-solid fa-location-dot mt-1 text-mustard"></i>
                  <span>
                    <strong>OORJA Committee Room, Student Activity Centre,</strong>
                    <br />
                    North Campus, University of Delhi,
                    <br />
                    Delhi — 110007
                  </span>
                </p>
                <p className="flex gap-3 items-center">
                  <i className="fa-solid fa-phone text-mustard"></i>
                  <span>
                    <strong>Helpline:</strong> +91 98110 24680 (10 AM – 8 PM)
                  </span>
                </p>
                <p className="flex gap-3 items-center">
                  <i className="fa-solid fa-envelope text-mustard"></i>
                  <span>
                    <strong>hello@oorjafest.in</strong>
                  </span>
                </p>
              </div>
              <div className="flex gap-2 mt-5">
                {['instagram', 'youtube', 'x-twitter', 'facebook-f', 'spotify'].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onShowToast(`Opening ${platform}…`, 'success');
                      }}
                      className="w-10 h-10 bg-ivory text-charcoal border-2 border-charcoal flex items-center justify-center hover:bg-mustard transition-colors"
                    >
                      <i className={`fa-brands fa-${platform}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="border-[3px] border-charcoal hard overflow-hidden bg-paper">
              <iframe
                title="Campus Map"
                src="https://www.google.com/maps?q=North+Campus,+University+of+Delhi&output=embed"
                className="w-full h-64 grayscale-[.3] contrast-[1.05]"
                loading="lazy"
              ></iframe>
              <div className="p-4 flex items-center justify-between bg-paper border-t-[3px] border-charcoal">
                <span className="font-grotesk font-bold text-xs tracking-widest">
                  NEAREST METRO: VISHWAVIDYALAYA • GATE 2
                </span>
                <i className="fa-solid fa-train-subway text-terracotta"></i>
              </div>
            </div>

            <div className="bg-olive text-ivory border-[3px] border-charcoal hard p-6">
              <h3 className="font-display text-xl">CORE CONTACTS</h3>
              <div className="mt-3 space-y-2 text-sm">
                {coreContacts.map((contact, idx) => (
                  <div
                    key={contact.name}
                    className={`flex justify-between ${
                      idx < coreContacts.length - 1
                        ? 'border-b border-ivory/20 pb-2'
                        : ''
                    }`}
                  >
                    <span>
                      {contact.name} ({contact.role})
                    </span>
                    <strong>{contact.phone}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
