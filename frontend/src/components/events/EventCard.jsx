function typeBadge(event) {
  if (event.type === 'official') {
    return (
      <span className="bg-terracotta text-ivory text-[10px] font-grotesk font-bold tracking-widest px-2 py-1 border border-charcoal">
        OFFICIAL • {event.cat.toUpperCase()}
      </span>
    );
  }
  return (
    <span className="bg-olive text-ivory text-[10px] font-grotesk font-bold tracking-widest px-2 py-1 border border-charcoal">
      UNOFFICIAL • {event.cat.toUpperCase()}
    </span>
  );
}

export default function EventCard({ event, onOpenModal }) {
  return (
    <div className="event-card bg-paper border-[2.5px] border-charcoal hard overflow-hidden flex flex-col">
      <div className="h-52 overflow-hidden border-b-[2.5px] border-charcoal relative">
        <img
          src={event.img}
          loading="lazy"
          className="w-full h-full object-cover"
          alt={event.title}
        />
        <div className="absolute top-3 left-3">{typeBadge(event)}</div>
        <div className="absolute bottom-3 right-3 bg-mustard text-charcoal font-grotesk font-bold text-[11px] px-2.5 py-1 border-2 border-charcoal">
          {event.prize}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-grotesk font-bold text-lg leading-tight">{event.title}</h3>
        <div className="text-[11px] font-bold tracking-wider text-smoke mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          <span><i className="fa-solid fa-calendar-days text-terracotta"></i> {event.date}</span>
          <span><i className="fa-solid fa-location-dot text-terracotta"></i> {event.venue}</span>
        </div>
        <p className="text-sm text-smoke mt-2.5 leading-relaxed flex-1">
          {event.desc.slice(0, 110)}…
        </p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onOpenModal(event.id)}
            className="btn btn-terra flex-1 py-2.5 text-[11px]"
          >
            Details + Register
          </button>
          <button
            onClick={() => onOpenModal(event.id)}
            className="btn w-11 py-2.5 border-charcoal hover:bg-charcoal hover:text-ivory"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
