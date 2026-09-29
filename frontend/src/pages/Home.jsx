import { useEffect, useRef } from 'react';
import { useCountdown } from '../hooks/useCountdown.js';
import { useReveal } from '../hooks/useReveal.js';
import { nights } from '../data/nights/nights.js';
import { homeEventPreviews, testimonials, sponsorBrands } from '../data/site.js';

export default function Home({ onNavigate, onGoHomeSection, onOpenPassModal }) {
  const { days, hours, mins, secs } = useCountdown();
  const pageRef = useRef(null);

  useReveal(pageRef);

  return (
    <main ref={pageRef} id="page-home" className="page active">
      {/* HERO */}
      <section className="relative min-h-[94vh] flex items-end md:items-center overflow-hidden bg-charcoal">
        <img
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1920&auto=format&fit=crop"
          alt="OORJA festival crowd"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-2 diagonal-stripes opacity-90"></div>

        {/* Floating polaroids desktop */}
        <div className="hidden xl:block absolute right-10 top-24 z-20">
          <div className="polaroid tape w-52 rotate-[6deg] floaty" style={{ '--r': '6deg' }}>
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop"
              className="w-full h-36 object-cover border border-charcoal"
              alt="Concert"
            />
            <p className="font-hand text-lg text-center py-1">star night '25</p>
          </div>
        </div>
        <div className="hidden xl:block absolute right-56 bottom-40 z-20">
          <div
            className="polaroid tape-terra w-48 rotate-[-7deg] floaty"
            style={{ '--r': '-7deg', animationDelay: '1.2s' }}
          >
            <img
              src="https://images.unsplash.com/photo-1576089172869-4f5c6f315251?q=80&w=600&auto=format&fit=crop"
              className="w-full h-32 object-cover border border-charcoal"
              alt="Colours"
            />
            <p className="font-hand text-lg text-center py-1">rang &amp; dhol!</p>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-16 pb-14 md:py-20">
          <div
            className="hero-anim inline-flex items-center gap-2 bg-mustard text-charcoal font-grotesk font-bold text-[11px] md:text-xs tracking-[.25em] px-4 py-2 border-2 border-charcoal hard-sm mb-5"
            style={{ animationDelay: '.1s' }}
          >
            <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></span> ANNUAL COLLEGE FEST • 2026 • NORTH CAMPUS
          </div>
          <h1
            className="hero-anim font-display text-ivory leading-[.85] text-[26vw] sm:text-[20vw] lg:text-[11rem] xl:text-[12.5rem]"
            style={{ animationDelay: '.25s' }}
          >
            OORJA<span className="text-mustard">.</span>
          </h1>
          <h2
            className="hero-anim font-grotesk font-bold text-mustardLight md:text-mustard text-xl sm:text-2xl md:text-4xl tracking-tight mt-3"
            style={{ animationDelay: '.4s' }}
          >
            WHERE ENERGY <span className="text-ivory">MEETS</span> CELEBRATION.
          </h2>
          <p
            className="hero-anim text-ivory/85 text-sm md:text-lg max-w-xl mt-4 leading-relaxed"
            style={{ animationDelay: '.55s' }}
          >
            Three days of music, culture, competition, creativity and memories that stay with you long after the lights go down.
          </p>
          <div
            className="hero-anim flex flex-wrap gap-4 mt-8"
            style={{ animationDelay: '.7s' }}
          >
            <button
              onClick={() => onGoHomeSection('lineup')}
              className="btn btn-terra px-7 py-4 text-sm"
            >
              Explore Oorja <i className="fa-solid fa-arrow-down"></i>
            </button>
            <button
              onClick={() => onNavigate('team')}
              className="btn btn-outline-ivory px-7 py-4 text-sm"
            >
              Meet The Team
            </button>
          </div>

          {/* Countdown */}
          <div
            className="hero-anim mt-10 flex flex-wrap items-center gap-3 md:gap-4"
            style={{ animationDelay: '.85s' }}
          >
            <div className="font-grotesk text-ivory/70 text-[11px] font-bold tracking-[.25em] w-full md:w-auto mb-1 md:mb-0">
              COUNTDOWN TO DAY 1 — MAIN GROUND • 6 PM
            </div>
            <div className="flex gap-2 md:gap-3">
              <div className="bg-ivory border-2 border-charcoal hard-sm px-3 md:px-5 py-2 md:py-3 text-center min-w-[68px] md:min-w-[86px]">
                <div id="cd-d" className="font-display text-2xl md:text-4xl">
                  {days}
                </div>
                <div className="font-grotesk text-[9px] md:text-[10px] font-bold tracking-[.2em]">
                  DAYS
                </div>
              </div>
              <div className="bg-ivory border-2 border-charcoal hard-sm px-3 md:px-5 py-2 md:py-3 text-center min-w-[68px] md:min-w-[86px]">
                <div id="cd-h" className="font-display text-2xl md:text-4xl">
                  {hours}
                </div>
                <div className="font-grotesk text-[9px] md:text-[10px] font-bold tracking-[.2em]">
                  HOURS
                </div>
              </div>
              <div className="bg-terracotta text-ivory border-2 border-charcoal hard-sm px-3 md:px-5 py-2 md:py-3 text-center min-w-[68px] md:min-w-[86px]">
                <div id="cd-m" className="font-display text-2xl md:text-4xl">
                  {mins}
                </div>
                <div className="font-grotesk text-[9px] md:text-[10px] font-bold tracking-[.2em]">
                  MINS
                </div>
              </div>
              <div className="bg-mustard border-2 border-charcoal hard-sm px-3 md:px-5 py-2 md:py-3 text-center min-w-[68px] md:min-w-[86px]">
                <div id="cd-s" className="font-display text-2xl md:text-4xl">
                  {secs}
                </div>
                <div className="font-grotesk text-[9px] md:text-[10px] font-bold tracking-[.2em]">
                  SECS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute left-6 bottom-24 z-10 items-center gap-3 vertical-text font-grotesk text-[10px] tracking-[.35em] text-ivory/60 font-bold">
          SCROLL • DANCE • CELEBRATE • REPEAT
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-ivory/70">
          <span className="font-grotesk text-[10px] tracking-[.3em] font-bold">
            SCROLL
          </span>
          <div className="w-[2px] h-8 bg-ivory/40 overflow-hidden">
            <div className="w-full h-4 bg-mustard animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-charcoal text-ivory border-y-[3px] border-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-ivory/15 divide-y-2 md:divide-y-0 divide-ivory/15">
          <div className="py-6 md:py-8 text-center px-2">
            <div className="font-display text-3xl md:text-5xl text-mustard">
              <span className="counter" data-target="3">
                0
              </span>
            </div>
            <div className="font-grotesk text-[11px] tracking-[.2em] font-bold mt-1 text-ivory/70">
              DAYS OF MADNESS
            </div>
          </div>
          <div className="py-6 md:py-8 text-center px-2">
            <div className="font-display text-3xl md:text-5xl text-mustard">
              <span className="counter" data-target="40">
                0
              </span>
              +
            </div>
            <div className="font-grotesk text-[11px] tracking-[.2em] font-bold mt-1 text-ivory/70">
              EVENTS &amp; COMPETITIONS
            </div>
          </div>
          <div className="py-6 md:py-8 text-center px-2">
            <div className="font-display text-3xl md:text-5xl text-mustard">
              <span className="counter" data-target="5000">
                0
              </span>
              +
            </div>
            <div className="font-grotesk text-[11px] tracking-[.2em] font-bold mt-1 text-ivory/70">
              FOOTFALL EXPECTED
            </div>
          </div>
          <div className="py-6 md:py-8 text-center px-2">
            <div className="font-display text-3xl md:text-5xl text-mustard">
              <span className="counter" data-target="25">
                0
              </span>
              +
            </div>
            <div className="font-grotesk text-[11px] tracking-[.2em] font-bold mt-1 text-ivory/70">
              COLLEGES COMPETING
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-terracotta text-ivory py-3 md:py-4 marquee border-b-[3px] border-charcoal -rotate-[.5deg] scale-[1.01] relative z-10">
        <div className="marquee-track font-display text-xl md:text-3xl tracking-wide">
          <span className="px-4">
            DHOL ✦ DANCE ✦ MUSIC ✦ NUKKAD ✦ FASHION ✦ FOOD ✦ FRIENDS ✦ MEMORIES ✦ DHOL ✦ DANCE ✦ MUSIC ✦ NUKKAD ✦ FASHION ✦ FOOD ✦ FRIENDS ✦ MEMORIES ✦&nbsp;
          </span>
          <span className="px-4">
            DHOL ✦ DANCE ✦ MUSIC ✦ NUKKAD ✦ FASHION ✦ FOOD ✦ FRIENDS ✦ MEMORIES ✦ DHOL ✦ DANCE ✦ MUSIC ✦ NUKKAD ✦ FASHION ✦ FOOD ✦ FRIENDS ✦ MEMORIES ✦&nbsp;
          </span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="paper-grain bg-ivory py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5 reveal-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-terracotta"></div>
                <span className="font-grotesk font-bold text-xs tracking-[.3em] text-terracotta">
                  01 — WHO WE ARE
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[.9]">
                ABOUT<br />
                <span className="text-terracotta">OORJA</span>
              </h2>
              <p className="font-hand text-2xl md:text-3xl text-olive mt-3 -rotate-2">
                made by students, for students!
              </p>
              <div className="mt-8 flex gap-4">
                <div className="polaroid tape w-1/2 rotate-[-4deg]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
                    className="w-full h-44 md:h-56 object-cover border border-charcoal"
                    alt="Students"
                  />
                  <p className="font-hand text-lg text-center py-1">the fam, '25</p>
                </div>
                <div className="polaroid tape-olive w-1/2 rotate-[4deg] mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop"
                    className="w-full h-44 md:h-56 object-cover border border-charcoal"
                    alt="Celebration"
                  />
                  <p className="font-hand text-lg text-center py-1">lights &amp; laughter</p>
                </div>
              </div>
              <div className="mt-8 bg-charcoal text-ivory p-5 border-[3px] border-charcoal hard flex items-center gap-4">
                <div className="font-display text-4xl text-mustard">14</div>
                <div className="text-sm leading-snug">
                  <strong>YEARS OF OORJA.</strong>
                  <br />
                  <span className="text-ivory/70">
                    Since 2012 — run 100% by the student committee, every stage, stall &amp; spotlight.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-right">
              <p className="font-grotesk text-xl md:text-2xl font-bold leading-snug">
                OORJA is not just a fest. It’s the{' '}
                <span className="bg-mustard px-2 border-2 border-charcoal">
                  heartbeat of campus
                </span>{' '}
                — three days when classrooms empty and the ground fills with sound, colour and people.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6 text-[15px] leading-relaxed text-smoke">
                <p>
                  <span className="font-display text-4xl text-terracotta float-left mr-2 leading-[.8]">
                    W
                  </span>
                  e are a student-driven committee that galvanizes the entire campus through music, dance, competitions and creativity. From morning eliminations to midnight encore, every event is planned, hosted and hustled by students like you.
                </p>
                <p>
                  Whether you’re a singer waiting for your stage, a dancer born for the spotlight, a coder, a creator, a foodie or just here for the vibe with your friends —{' '}
                  <strong className="text-charcoal">there is a place for you at OORJA.</strong> Come for one event, stay for the people.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-paper border-[2.5px] border-charcoal hard-sm p-4 text-center">
                  <i className="fa-solid fa-microphone-lines text-terracotta text-2xl"></i>
                  <div className="font-grotesk font-bold text-sm mt-2 tracking-wide">
                    LIVE STAGES
                  </div>
                  <div className="text-xs text-smoke">Bands, DJs, folk &amp; stars</div>
                </div>
                <div className="bg-paper border-[2.5px] border-charcoal hard-sm p-4 text-center">
                  <i className="fa-solid fa-trophy text-mustard text-2xl"></i>
                  <div className="font-grotesk font-bold text-sm mt-2 tracking-wide">
                    ₹5L+ PRIZES
                  </div>
                  <div className="text-xs text-smoke">Cash, goodies &amp; glory</div>
                </div>
                <div className="bg-paper border-[2.5px] border-charcoal hard-sm p-4 text-center">
                  <i className="fa-solid fa-utensils text-olive text-2xl"></i>
                  <div className="font-grotesk font-bold text-sm mt-2 tracking-wide">
                    FOOD CARNIVAL
                  </div>
                  <div className="text-xs text-smoke">30+ stalls, all 3 days</div>
                </div>
              </div>

              {/* STANDS FOR */}
              <h3 className="font-display text-2xl md:text-3xl mt-10 mb-5">
                WHAT OORJA STANDS FOR
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-terracotta text-ivory border-[2.5px] border-charcoal hard p-5 hard-hover">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 bg-ivory text-terracotta border-2 border-charcoal rounded-full flex items-center justify-center text-xl">
                      <i className="fa-solid fa-bolt"></i>
                    </span>
                    <h4 className="font-grotesk font-bold tracking-widest">ENERGY</h4>
                  </div>
                  <p className="text-sm mt-3 text-ivory/90">
                    Raw, loud, contagious campus energy — from dhol beats at 6 AM to the last DJ drop at midnight.
                  </p>
                </div>
                <div className="bg-mustard border-[2.5px] border-charcoal hard p-5 hard-hover">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 bg-charcoal text-mustard border-2 border-charcoal rounded-full flex items-center justify-center text-xl">
                      <i className="fa-solid fa-palette"></i>
                    </span>
                    <h4 className="font-grotesk font-bold tracking-widest">CREATIVITY</h4>
                  </div>
                  <p className="text-sm mt-3 text-charcoal/80">
                    Art, fashion, theatre, film, code — every talent gets a stage and an audience that cheers.
                  </p>
                </div>
                <div className="bg-olive text-ivory border-[2.5px] border-charcoal hard p-5 hard-hover">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 bg-ivory text-olive border-2 border-charcoal rounded-full flex items-center justify-center text-xl">
                      <i className="fa-solid fa-people-group"></i>
                    </span>
                    <h4 className="font-grotesk font-bold tracking-widest">COMMUNITY</h4>
                  </div>
                  <p className="text-sm mt-3 text-ivory/90">
                    Seniors, juniors, volunteers, rivals-turned-friends. OORJA is where the campus becomes family.
                  </p>
                </div>
                <div className="bg-paper border-[2.5px] border-charcoal hard p-5 hard-hover">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 bg-warmorange text-ivory border-2 border-charcoal rounded-full flex items-center justify-center text-xl">
                      <i className="fa-solid fa-camera-retro"></i>
                    </span>
                    <h4 className="font-grotesk font-bold tracking-widest">MEMORIES</h4>
                  </div>
                  <p className="text-sm mt-3 text-smoke">
                    The photos you’ll show for years. The stories that start with “remember at OORJA when…”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 DAYS */}
      <section
        id="lineup"
        className="bg-charcoal text-ivory py-16 md:py-24 relative overflow-hidden scroll-mt-16"
      >
        <div className="absolute inset-0 opacity-[.07] halftone"></div>
        <div
          className="absolute -right-10 top-10 font-display text-[18vw] leading-none text-transparent opacity-10 select-none hidden lg:block"
          style={{ WebkitTextStroke: '2px #F7F1E5' }}
        >
          NIGHTS
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="text-center max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 bg-terracotta text-ivory font-grotesk font-bold text-[11px] tracking-[.25em] px-4 py-2 border-2 border-ivory/20 mb-5">
              02 — THE MAIN NIGHTS • 6 PM ONWARDS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[.95]">
              3 DAYS. 3 EXPERIENCES.<br />
              <span className="text-mustard">1 OORJA.</span>
            </h2>
            <p className="text-ivory/70 mt-4 md:text-lg">
              Every night hits different. Pick your vibe — or better, live all three.
            </p>
          </div>

          <div className="mt-12 md:mt-16 space-y-8 md:space-y-10">
            {nights.map((night) => (
              <article
                key={night.id}
                className={`day-card reveal overflow-hidden grid lg:grid-cols-2 ${
                  night.id === 'day1'
                    ? 'bg-ivory text-charcoal border-[3px] border-ivory hard-mustard'
                    : night.id === 'day2'
                    ? 'bg-mustard text-charcoal border-[3px] border-ivory hard-ivory'
                    : 'bg-terracotta text-ivory border-[3px] border-ivory'
                }`}
                style={night.id === 'day3' ? { boxShadow: '6px 6px 0 #D4A72C' } : {}}
              >
                {night.id !== 'day2' ? (
                  <>
                    <div className="relative min-h-[280px] lg:min-h-[420px]">
                      <img
                        src={night.img}
                        alt={night.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {night.id === 'day3' && (
                        <div className="absolute inset-0 bg-terracotta/20"></div>
                      )}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-mustard text-charcoal font-grotesk font-bold text-xs tracking-widest px-3 py-2 border-2 border-charcoal">
                          {night.dayLabel}
                        </span>
                        <span className="bg-charcoal text-ivory font-grotesk font-bold text-xs tracking-widest px-3 py-2 border-2 border-charcoal">
                          {night.tagLabel}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-ivory text-charcoal border-2 border-charcoal px-3 py-2 font-hand text-xl rotate-[-2deg]">
                        {night.quote}
                      </div>
                    </div>
                    <div className="p-6 md:p-10">
                      <div
                        className={`font-grotesk text-xs font-bold tracking-[.25em] ${
                          night.id === 'day1' ? 'text-terracotta' : 'text-mustardLight'
                        }`}
                      >
                        {night.date}
                      </div>
                      <h3 className="font-display text-4xl md:text-6xl mt-2">
                        {night.titleLine1}
                        <br />
                        {night.titleLine2}
                      </h3>
                      <p
                        className={`mt-3 md:text-[15px] ${
                          night.id === 'day1' ? 'text-smoke' : 'text-ivory/90'
                        }`}
                      >
                        {night.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 mt-5 text-sm">
                        <div className="flex items-center gap-2">
                          <i
                            className={`fa-solid fa-location-dot ${
                              night.id === 'day1' ? 'text-terracotta' : 'text-mustard'
                            }`}
                          ></i>
                          <strong>{night.venue}</strong>
                        </div>
                        <div className="flex items-center gap-2">
                          <i
                            className={`fa-solid fa-clock ${
                              night.id === 'day1' ? 'text-terracotta' : 'text-mustard'
                            }`}
                          ></i>
                          {night.time}
                        </div>
                      </div>
                      <ul className="mt-5 space-y-2 text-sm">
                        {night.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] mt-0.5 ${
                                night.id === 'day1'
                                  ? 'bg-olive text-ivory'
                                  : 'bg-mustard text-charcoal font-bold'
                              }`}
                            >
                              ✓
                            </span>{' '}
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 mt-6">
                        <button
                          onClick={() => onOpenPassModal(night.id)}
                          className={`btn ${
                            night.id === 'day1' ? 'btn-terra' : 'btn-ivory'
                          } px-6 py-3 text-xs`}
                        >
                          Claim Free Pass
                        </button>
                        <button
                          onClick={() =>
                            night.id === 'day1'
                              ? onNavigate('events')
                              : onNavigate('contact')
                          }
                          className={`btn px-6 py-3 text-xs ${
                            night.id === 'day1'
                              ? 'bg-transparent border-charcoal hover:bg-charcoal hover:text-ivory'
                              : 'border-ivory text-ivory hover:bg-ivory hover:text-charcoal'
                          }`}
                        >
                          {night.id === 'day1' ? 'View Events' : 'Sponsor Us'}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-6 md:p-10 order-2 lg:order-1">
                      <div className="font-grotesk text-xs font-bold tracking-[.25em]">
                        {night.date}
                      </div>
                      <h3 className="font-display text-4xl md:text-6xl mt-2">
                        {night.titleLine1}
                        <br />
                        {night.titleLine2}
                      </h3>
                      <p className="mt-3 md:text-[15px] text-charcoal/80">
                        {night.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 mt-5 text-sm font-semibold">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-location-dot"></i>
                          {night.venue}
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-clock"></i>
                          {night.time}
                        </div>
                      </div>
                      <ul className="mt-5 space-y-2 text-sm font-medium">
                        {night.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="w-5 h-5 bg-charcoal text-mustard rounded-full flex items-center justify-center text-[10px] mt-0.5">
                              ✓
                            </span>{' '}
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 mt-6">
                        <button
                          onClick={() => onOpenPassModal('day2')}
                          className="btn btn-charcoal px-6 py-3 text-xs"
                        >
                          Claim Free Pass
                        </button>
                        <button
                          onClick={() => onNavigate('gallery')}
                          className="btn bg-transparent border-charcoal px-6 py-3 text-xs hover:bg-charcoal hover:text-ivory"
                        >
                          See Last Year
                        </button>
                      </div>
                    </div>
                    <div className="relative min-h-[280px] lg:min-h-[420px] order-1 lg:order-2">
                      <img
                        src={night.img}
                        alt={night.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="bg-charcoal text-mustard font-grotesk font-bold text-xs tracking-widest px-3 py-2 border-2 border-charcoal">
                          {night.dayLabel}
                        </span>
                        <span className="bg-ivory text-charcoal font-grotesk font-bold text-xs tracking-widest px-3 py-2 border-2 border-charcoal">
                          {night.tagLabel}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-charcoal text-mustard border-2 border-mustard px-3 py-2 font-hand text-xl rotate-[2deg]">
                        {night.quote}
                      </div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="bg-cream py-16 md:py-24 border-y-[3px] border-charcoal paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[3px] bg-terracotta"></div>
                <span className="font-grotesk font-bold text-xs tracking-[.3em] text-terracotta">
                  03 — COMPETITIONS &amp; CARNIVAL
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[.95]">
                40+ EVENTS.<br />
                ZERO BORING <span className="text-terracotta">HOURS.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('events')}
              className="btn btn-charcoal px-6 py-3 text-sm shrink-0"
            >
              View All Events <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {homeEventPreviews.map((evt, idx) => (
              <div
                key={evt.title}
                className="event-card reveal bg-paper border-[2.5px] border-charcoal hard overflow-hidden cursor-pointer"
                onClick={() => onNavigate('events')}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="h-52 overflow-hidden border-b-[2.5px] border-charcoal relative">
                  <img
                    src={evt.img}
                    className="w-full h-full object-cover"
                    alt={evt.title}
                  />
                  <span
                    className={`absolute top-3 left-3 ${evt.badgeColor} text-[10px] font-grotesk font-bold tracking-widest px-2 py-1 border border-charcoal`}
                  >
                    {evt.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-grotesk font-bold text-lg leading-tight">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-smoke mt-1 font-semibold">{evt.meta}</p>
                  <p className="text-sm text-smoke mt-2">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 font-grotesk text-xs font-bold tracking-widest">
            <span className="bg-paper border-2 border-charcoal px-4 py-2">MUSIC</span>
            <span className="bg-paper border-2 border-charcoal px-4 py-2">DANCE</span>
            <span className="bg-paper border-2 border-charcoal px-4 py-2">THEATRE</span>
            <span className="bg-paper border-2 border-charcoal px-4 py-2">FASHION</span>
            <span className="bg-paper border-2 border-charcoal px-4 py-2">GAMING</span>
            <span className="bg-paper border-2 border-charcoal px-4 py-2">SPORTS</span>
            <button
              onClick={() => onNavigate('events')}
              className="bg-terracotta text-ivory border-2 border-charcoal px-4 py-2 hover:bg-charcoal transition-colors"
            >
              + MANY MORE →
            </button>
          </div>
        </div>
      </section>

      {/* MEMORIES WALL */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center reveal">
            <div className="font-grotesk font-bold text-xs tracking-[.3em] text-terracotta">
              04 — LOVE FROM CAMPUS
            </div>
            <h2 className="font-display text-4xl md:text-6xl mt-2">
              MEMORIES THAT <span className="text-terracotta">STAY.</span>
            </h2>
            <p className="font-hand text-2xl text-olive mt-2">
              real words from real oorja fam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`reveal p-6 ${
                  idx === 1
                    ? 'bg-charcoal text-ivory border-[2.5px] border-charcoal rotate-[1deg]'
                    : 'bg-paper border-[2.5px] border-charcoal hard rotate-[-1deg]'
                }`}
                style={
                  idx === 1
                    ? { boxShadow: '6px 6px 0 #C65332', transitionDelay: '.12s' }
                    : idx === 2
                    ? { transitionDelay: '.24s' }
                    : {}
                }
              >
                <div className="text-mustard text-lg tracking-widest">★★★★★</div>
                <p className="mt-3 text-[15px] leading-relaxed">“{t.quote}”</p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={t.img}
                    className={`w-11 h-11 rounded-full object-cover border-2 ${
                      idx === 1 ? 'border-mustard' : 'border-charcoal'
                    }`}
                    alt={t.name}
                  />
                  <div>
                    <div className="font-grotesk font-bold text-sm">{t.name}</div>
                    <div
                      className={`text-xs ${
                        idx === 1 ? 'text-ivory/60' : 'text-smoke'
                      }`}
                    >
                      {t.meta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASSES */}
      <section
        id="passes"
        className="bg-mustard py-16 md:py-24 border-y-[3px] border-charcoal relative overflow-hidden scroll-mt-16"
      >
        <div className="absolute inset-0 opacity-10 halftone"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="text-center reveal">
            <div className="inline-block bg-charcoal text-mustard font-grotesk font-bold text-[11px] tracking-[.25em] px-4 py-2 border-2 border-charcoal mb-4">
              05 — FREE ENTRY PASSES • ALL 3 NIGHTS FREE
            </div>
            <h2 className="font-display text-4xl md:text-6xl">
              GET YOUR <span className="text-terracotta">FREE PASS.</span>
            </h2>
            <p className="font-semibold text-charcoal/80 mt-2">
              All 3 Nights (Bhangra Night, DJ Night, Star Night) are 100% Free of Cost for everyone with valid ID!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto items-stretch">
            {/* Day pass */}
            <div className="reveal bg-ivory border-[3px] border-charcoal hard-lg p-7 flex flex-col ticket-notch">
              <div className="font-grotesk font-bold text-xs tracking-[.25em] text-smoke">
                DAY FREE PASS
              </div>
              <div className="font-display text-5xl mt-2 text-olive">FREE</div>
              <div className="text-xs font-bold text-smoke">
                ANY ONE NIGHT • + ENTRY TO CARNIVAL
              </div>
              <ul className="text-sm mt-5 space-y-2 flex-1">
                <li>✓ Any 1 night (Bhangra / DJ / Star)</li>
                <li>✓ Access to 10+ unofficial events</li>
                <li>✓ Food carnival entry</li>
                <li>✓ 100% Free for all students</li>
              </ul>
              <button
                onClick={() => onOpenPassModal('day1')}
                className="btn w-full py-3 mt-6 text-xs border-charcoal hover:bg-charcoal hover:text-ivory"
              >
                Claim Single Day Pass
              </button>
            </div>

            {/* Full 3-day pass */}
            <div
              className="reveal bg-charcoal text-ivory border-[3px] border-charcoal p-7 flex flex-col relative ticket-notch md:-mt-4 md:mb-[-1rem]"
              style={{ boxShadow: '8px 8px 0 #C65332', transitionDelay: '.12s' }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-ivory font-grotesk font-bold text-[11px] tracking-[.2em] px-4 py-1.5 border-2 border-charcoal whitespace-nowrap">
                ALL 3 NIGHTS FREE ★
              </div>
              <div className="font-grotesk font-bold text-xs tracking-[.25em] text-mustard mt-2">
                FULL 3-DAY PASS
              </div>
              <div className="font-display text-6xl mt-2 text-mustard">
                FREE
              </div>
              <div className="text-xs font-bold text-mustard">
                BHANGRA + DJ + STAR NIGHT • 0 COST
              </div>
              <ul className="text-sm mt-5 space-y-2 flex-1 text-ivory/90">
                <li>✓ Bhangra + DJ + Star Night Entry</li>
                <li>✓ All official eliminations access</li>
                <li>✓ Afterparty + fireworks zone</li>
                <li>✓ OORJA digital pass badge</li>
                <li>✓ 100% Free for everyone</li>
              </ul>
              <button
                onClick={() => onOpenPassModal('full')}
                className="btn btn-terra w-full py-3.5 mt-6 text-sm"
              >
                Claim All-Days Free Pass <i className="fa-solid fa-bolt"></i>
              </button>
            </div>

            {/* Squad pass */}
            <div
              className="reveal bg-ivory border-[3px] border-charcoal hard-lg p-7 flex flex-col ticket-notch"
              style={{ transitionDelay: '.24s' }}
            >
              <div className="font-grotesk font-bold text-xs tracking-[.25em] text-smoke">
                SQUAD PASS • 4 PEOPLE
              </div>
              <div className="font-display text-5xl mt-2 text-olive">FREE</div>
              <div className="text-xs font-bold text-smoke">
                COME WITH YOUR WHOLE GANG • ₹0 COST
              </div>
              <ul className="text-sm mt-5 space-y-2 flex-1">
                <li>✓ 4 × Full 3-day free passes</li>
                <li>✓ Squad photo at 360° booth</li>
                <li>✓ Group entry at main gate</li>
                <li>✓ Access to all carnival zones</li>
              </ul>
              <button
                onClick={() => onOpenPassModal('squad')}
                className="btn w-full py-3 mt-6 text-xs bg-olive text-ivory border-charcoal hover:bg-charcoal"
              >
                Claim Squad Free Pass
              </button>
            </div>
          </div>
          <p className="text-center text-xs font-bold tracking-widest mt-8 text-charcoal/80">
            ⚠ ENTRY TO ALL NIGHTS IS 100% FREE OF COST • VALID COLLEGE / GOVT ID REQUIRED AT GATE
          </p>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="bg-ivory py-12 border-b-[3px] border-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center font-grotesk font-bold text-xs tracking-[.3em] text-smoke reveal">
            POWERED BY FRIENDS WHO BELIEVE IN STUDENT CULTURE
          </p>
          <div className="marquee mt-6">
            <div className="marquee-track slow items-center gap-10 font-display text-2xl md:text-3xl text-charcoal/30">
              <span className="px-6">
                {sponsorBrands.join(' • ')} • {sponsorBrands.join(' • ')} •
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="bg-terracotta text-ivory py-16 md:py-24 relative overflow-hidden paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative reveal-scale">
          <div className="stamp inline-block px-5 py-2 font-grotesk font-bold text-xs tracking-[.3em] text-mustardLight mb-6 rotate-[-3deg]">
            MARCH 6 – 8 • MAIN GROUND
          </div>
          <h2 className="font-display text-[11vw] md:text-7xl lg:text-8xl leading-[.92]">
            WHERE THE CAMPUS<br />
            COMES <span className="text-mustard">ALIVE.</span>
          </h2>
          <p className="mt-5 text-ivory/85 max-w-xl mx-auto md:text-lg">
            Three days. One energy. Don’t hear about it later — be in the photos, the videos, the stories.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => onOpenPassModal('full')}
              className="btn btn-ivory px-8 py-4 text-sm"
            >
              Get Your Pass Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn px-8 py-4 text-sm border-ivory text-ivory hover:bg-ivory hover:text-charcoal"
            >
              Contact Committee
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}