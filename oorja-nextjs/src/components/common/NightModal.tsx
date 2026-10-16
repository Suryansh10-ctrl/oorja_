'use client';

import React, { useEffect } from 'react';
import { nights } from '../../data/nights/nights';

interface NightModalProps {
  nightId: string | null;
  onClose: () => void;
  onOpenPassModal: (type: string) => void;
}

export default function NightModal({
  nightId,
  onClose,
  onOpenPassModal,
}: NightModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (nightId && e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nightId, onClose]);

  if (!nightId) return null;
  const night = nights.find((n) => n.id === nightId);
  if (!night) return null;

  return (
    <div
      id="nightModal"
      className="fixed inset-0 z-[95] flex items-center justify-center p-3 sm:p-5 modal-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel bg-ivory border-[3.5px] border-charcoal hard-lg w-full max-w-3xl max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Modal Hero Banner */}
        <div className="relative h-60 sm:h-72 shrink-0 overflow-hidden border-b-[3px] border-charcoal">
          <img
            src={night.img}
            alt={`${night.titleLine1} ${night.titleLine2}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-10 h-10 bg-ivory border-2 border-charcoal text-charcoal flex items-center justify-center hover:bg-terracotta hover:text-ivory transition-colors z-20"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="bg-mustard text-charcoal font-grotesk font-bold text-xs tracking-widest px-3 py-1.5 border-2 border-charcoal">
              {night.dayLabel}
            </span>
            <span className="bg-charcoal text-ivory font-grotesk font-bold text-xs tracking-widest px-3 py-1.5 border-2 border-charcoal">
              {night.tagLabel}
            </span>
            <span className="bg-olive text-ivory font-grotesk font-bold text-xs tracking-widest px-3 py-1.5 border-2 border-charcoal">
              FREE ENTRY
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
            <div className="font-grotesk text-xs tracking-[.25em] text-mustardLight font-bold">
              {night.date}
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-ivory mt-1 leading-none">
              {night.titleLine1} {night.titleLine2}
            </h2>
            <p className="font-hand text-xl text-mustardLight mt-1">"{night.quote}"</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Key Facts Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-paper border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest text-smoke">
                DATE
              </div>
              <div className="font-bold text-sm text-charcoal mt-0.5">{night.fullDate}</div>
            </div>
            <div className="bg-paper border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest text-smoke">
                NIGHT STAGE
              </div>
              <div className="font-bold text-sm text-charcoal mt-0.5">{night.venue}</div>
            </div>
            <div className="bg-paper border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest text-smoke">
                TIMINGS
              </div>
              <div className="font-bold text-sm text-charcoal mt-0.5">{night.time}</div>
            </div>
            <div className="bg-mustard text-charcoal border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest">
                ADMISSION
              </div>
              <div className="font-display text-lg mt-0.5">100% FREE</div>
            </div>
          </div>

          {/* Day Overview / What Happens on this day */}
          <div className="bg-cream border-[2.5px] border-charcoal p-5 hard-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-terracotta rounded-full"></span>
              <h3 className="font-grotesk font-bold text-xs tracking-[.25em] text-charcoal">
                WHAT HAPPENS ON {night.dayLabel} • DAY OVERVIEW
              </h3>
            </div>
            <h4 className="font-display text-2xl text-charcoal">{night.dayTheme}</h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-smoke mt-2">
              {night.daySummary}
            </p>
          </div>

          {/* Full Day Timeline / Schedule */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl sm:text-3xl text-charcoal">
                COMPLETE DAY SCHEDULE &amp; EVENTS
              </h3>
              <span className="font-grotesk text-xs font-bold text-terracotta tracking-wider">
                {night.schedule.length} EVENTS
              </span>
            </div>

            <div className="space-y-3">
              {night.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-paper border-2 border-charcoal p-4 transition-all hover:bg-ivory"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-charcoal/15 pb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-charcoal text-mustard font-grotesk font-bold text-[11px] tracking-wider px-2.5 py-1 border border-charcoal">
                        <i className="fa-regular fa-clock mr-1"></i> {item.time}
                      </span>
                      <span
                        className={`text-[10px] font-grotesk font-bold tracking-widest px-2 py-0.5 border border-charcoal ${
                          item.type === 'Official'
                            ? 'bg-terracotta text-ivory'
                            : item.type === 'Headline Night'
                            ? 'bg-mustard text-charcoal font-black'
                            : 'bg-olive text-ivory'
                        }`}
                      >
                        {item.type.toUpperCase()}
                      </span>
                      {item.cat && (
                        <span className="text-[10px] font-grotesk font-bold text-smoke tracking-wider">
                          • {item.cat.toUpperCase()}
                        </span>
                      )}
                    </div>
                    {item.prize && (
                      <span className="bg-mustard/90 text-charcoal font-grotesk font-bold text-xs px-2.5 py-0.5 border border-charcoal self-start sm:self-auto">
                        <i className="fa-solid fa-trophy mr-1 text-terracotta"></i> {item.prize}
                      </span>
                    )}
                  </div>

                  <div className="mt-2.5">
                    <h4 className="font-grotesk font-bold text-base sm:text-lg text-charcoal leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-smoke font-semibold mt-1 flex items-center gap-1.5">
                      <i className="fa-solid fa-location-dot text-terracotta"></i> {item.venue}
                    </p>
                    <p className="text-sm text-smoke mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Night Highlights Checklist */}
          <div className="bg-charcoal text-ivory border-[2.5px] border-charcoal p-5 hard-sm">
            <h4 className="font-display text-xl text-mustard">
              KEY HIGHLIGHTS OF {night.titleLine1} {night.titleLine2}
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5 mt-3 text-sm">
              {night.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-terracotta text-ivory rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="text-ivory/90">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Admission & Guidelines */}
          <div className="border-2 border-dashed border-charcoal/40 p-4 bg-paper/60 text-xs text-smoke space-y-1">
            <p className="font-bold text-charcoal flex items-center gap-1.5">
              <i className="fa-solid fa-circle-info text-terracotta"></i> FREE ENTRY GUIDELINES:
            </p>
            <p>
              • Entry to all competitions and night concerts is 100% Free of Cost for all registered attendees.
            </p>
            <p>
              • Carry a valid college or government photo ID card to present at Campus Gate 1 &amp; Gate 2.
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t-[3px] border-charcoal bg-paper flex flex-col sm:flex-row gap-3 justify-end items-center sticky bottom-0 z-10">
          <button
            type="button"
            onClick={onClose}
            className="btn w-full sm:w-auto px-6 py-3 text-xs border-charcoal hover:bg-cream"
          >
            Close Window
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPassModal(night.id);
            }}
            className="btn btn-terra w-full sm:w-auto px-7 py-3 text-xs"
          >
            Claim Free Pass for {night.dayLabel} <i className="fa-solid fa-ticket ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
