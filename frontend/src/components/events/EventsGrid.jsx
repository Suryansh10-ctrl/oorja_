import { useState } from 'react';
import { EVENTS, EVENT_CATS } from '../../data/events/index.js';
import EventCard from './EventCard.jsx';

export default function EventsGrid({ onOpenModal, onNavigate }) {
  const [eventType, setEventType] = useState('all');
  const [eventCat, setEventCat] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = EVENTS.filter((e) =>
    (eventType === 'all' || e.type === eventType) &&
    (eventCat === 'all' || e.cat === eventCat) &&
    (
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.cat.toLowerCase().includes(search.toLowerCase()) ||
      e.desc.toLowerCase().includes(search.toLowerCase()) ||
      e.venue.toLowerCase().includes(search.toLowerCase())
    )
  );

  const official = filtered.filter((e) => e.type === 'official');
  const unofficial = filtered.filter((e) => e.type === 'unofficial');

  function resetFilters() {
    setEventType('all');
    setEventCat('all');
    setSearch('');
  }

  return (
    <>
      {/* Header + filters */}
      <section className="bg-charcoal text-ivory pt-14 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[.07] halftone"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="font-grotesk font-bold text-xs tracking-[.3em] text-mustard">COMPETITIONS • WORKSHOPS • CARNIVAL</div>
          <h1 className="font-display text-6xl md:text-8xl mt-2">EVENTS<span className="text-terracotta">.</span></h1>
          <p className="text-ivory/70 max-w-2xl mt-3 md:text-lg">Official championships with cash prizes &amp; trophies — plus unofficial carnival chaos just for fun. Filter, find your stage, register.</p>

          <div className="flex flex-col md:flex-row gap-3 mt-7">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-smoke"></i>
              <input
                id="eventSearch"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search events… (dance, code, food…)"
                className="w-full bg-ivory text-charcoal border-[2.5px] border-ivory pl-11 pr-4 py-3 font-semibold text-sm placeholder:text-smoke/60"
              />
            </div>
            {/* Type filters */}
            <div className="flex gap-2 flex-wrap" id="typeFilters">
              {['all', 'official', 'unofficial'].map((t, i) => (
                <button
                  key={t}
                  className={`filter-pill${eventType === t ? ' active' : ''}${i === 0 ? ' !bg-mustard' : ' !bg-ivory'}`}
                  onClick={() => setEventType(t)}
                >
                  {t === 'all' ? 'All Events' : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2" id="catFilters">
            {EVENT_CATS.map((c) => (
              <button
                key={c}
                className={`filter-pill${eventCat === c ? ' active' : ''}`}
                onClick={() => setEventCat(c)}
              >
                {c === 'all' ? 'All Categories' : c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory py-12 md:py-16 paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Official section */}
          {eventType !== 'unofficial' && (
            <div id="officialWrap">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl md:text-5xl">OFFICIAL <span className="text-terracotta">CHAMPIONSHIPS</span></h2>
                <div className="flex-1 h-[3px] bg-charcoal"></div>
                <span className="font-grotesk font-bold text-xs tracking-widest bg-charcoal text-ivory px-3 py-2">CASH PRIZES</span>
              </div>
              <div id="officialGrid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {official.length > 0
                  ? official.map((e) => <EventCard key={e.id} event={e} onOpenModal={onOpenModal} />)
                  : <p className="text-smoke col-span-full">No official events match.</p>
                }
              </div>
            </div>
          )}

          {/* Unofficial section */}
          {eventType !== 'official' && (
            <div id="unofficialWrap" className="mt-14">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl md:text-5xl">UNOFFICIAL <span className="text-olive">&amp; CARNIVAL</span></h2>
                <div className="flex-1 h-[3px] bg-charcoal"></div>
                <span className="font-grotesk font-bold text-xs tracking-widest bg-olive text-ivory px-3 py-2">JUST FOR FUN</span>
              </div>
              <div id="unofficialGrid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {unofficial.length > 0
                  ? unofficial.map((e) => <EventCard key={e.id} event={e} onOpenModal={onOpenModal} />)
                  : <p className="text-smoke col-span-full">No carnival events match.</p>
                }
              </div>
            </div>
          )}

          {/* No results */}
          <div id="noEvents" className={filtered.length > 0 ? 'hidden' : 'text-center py-16'}>
            <div className="font-display text-4xl">NO VIBES FOUND</div>
            <p className="text-smoke mt-2">Try a different search or category.</p>
            <button onClick={resetFilters} className="btn btn-terra px-6 py-3 text-xs mt-5">Reset Filters</button>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-mustard border-[3px] border-charcoal hard-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-4xl">NOT SURE WHERE YOU FIT?</h3>
              <p className="font-semibold text-charcoal/70 mt-1">DM us on Instagram or talk to any volunteer in the orange OORJA tee. We'll find your stage.</p>
            </div>
            <button onClick={() => onNavigate('contact')} className="btn btn-charcoal px-7 py-4 text-sm shrink-0">Ask The Committee</button>
          </div>
        </div>
      </section>
    </>
  );
}
