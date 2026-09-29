import { useState } from 'react';
import { EVENTS } from '../../data/events/index.js';

export default function EventModal({ eventId, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
  });

  if (!eventId) return null;
  const event = EVENTS.find((e) => e.id === eventId);
  if (!event) return null;

  function handleRegister(e) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      onShowToast?.('Please enter your name and phone number.', 'error');
      return;
    }
    onShowToast?.(
      `Registered for ${event.title}! Confirmation sent to ${formData.phone}.`,
      'success'
    );
    setFormData({ name: '', phone: '', college: '' });
    onClose();
  }

  return (
    <div
      id="eventModal"
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 modal-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel bg-ivory border-[3px] border-charcoal hard-lg w-full max-w-2xl max-h-[92vh] overflow-y-auto">
        <div className="relative h-60 md:h-72">
          <img
            id="em-img"
            src={event.img}
            className="w-full h-full object-cover"
            alt={event.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-ivory border-2 border-charcoal flex items-center justify-center hover:bg-terracotta hover:text-ivory transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="absolute bottom-4 left-5">
            <span
              id="em-tag"
              className={`font-grotesk font-bold text-[10px] tracking-widest px-3 py-1.5 border-2 border-charcoal ${
                event.type === 'official'
                  ? 'bg-mustard text-charcoal'
                  : 'bg-olive text-ivory'
              }`}
            >
              {event.type.toUpperCase()} • {event.cat.toUpperCase()}
            </span>
            <h3
              id="em-title"
              className="font-display text-3xl md:text-5xl text-ivory mt-2"
            >
              {event.title}
            </h3>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-paper border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest text-smoke">
                DATE
              </div>
              <div id="em-date" className="font-bold text-sm">
                {event.date}
              </div>
            </div>
            <div className="bg-paper border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest text-smoke">
                TIME
              </div>
              <div id="em-time" className="font-bold text-sm">
                {event.time}
              </div>
            </div>
            <div className="bg-paper border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest text-smoke">
                VENUE
              </div>
              <div id="em-venue" className="font-bold text-sm">
                {event.venue}
              </div>
            </div>
            <div className="bg-terracotta text-ivory border-2 border-charcoal p-3">
              <div className="text-[10px] font-grotesk font-bold tracking-widest">
                PRIZE
              </div>
              <div id="em-prize" className="font-bold text-sm">
                {event.prize}
              </div>
            </div>
          </div>

          <p id="em-desc" className="mt-5 text-[15px] leading-relaxed text-smoke">
            {event.desc}
          </p>

          <div className="bg-cream border-2 border-charcoal p-4 mt-5 text-sm">
            <strong>RULES IN SHORT:</strong>{' '}
            <span id="em-rules">{event.rules}</span>
          </div>

          <form
            onSubmit={handleRegister}
            className="mt-6 bg-paper border-[2.5px] border-charcoal p-5"
          >
            <h4 className="font-grotesk font-bold tracking-widest text-sm">
              QUICK REGISTER
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                placeholder="Your name *"
                className="border-2 border-charcoal bg-ivory px-3 py-2.5 text-sm font-semibold"
              />
              <input
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                type="tel"
                placeholder="Phone *"
                className="border-2 border-charcoal bg-ivory px-3 py-2.5 text-sm font-semibold"
              />
            </div>
            <input
              required
              value={formData.college}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              type="text"
              placeholder="College + team size (e.g. Hindu College, Team of 4)"
              className="mt-3 w-full border-2 border-charcoal bg-ivory px-3 py-2.5 text-sm font-semibold"
            />
            <button className="btn btn-terra w-full py-3 mt-4 text-xs">
              Register For This Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
