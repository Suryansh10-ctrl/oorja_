const HEIGHT_CLASSES = ['h-80', 'h-56', 'h-72', 'h-64'];
const ROTATE_CLASSES = ['rotate-[-1deg]', 'rotate-[1deg]', 'rotate-0'];

export default function GalleryCard({ item, index, onOpenLightbox }) {
  const heightClass = HEIGHT_CLASSES[index % 4];
  const rotateClass = ROTATE_CLASSES[index % 3];

  return (
    <div
      className={`gal-item bg-white border-[2.5px] border-charcoal hard-sm overflow-hidden cursor-pointer ${rotateClass} hover:!rotate-0 transition-transform`}
      onClick={() => onOpenLightbox(index)}
    >
      <div className="overflow-hidden">
        <img
          src={item.src}
          loading="lazy"
          className={`w-full object-cover ${heightClass}`}
          alt={item.cap}
        />
      </div>
      <div className="p-3 flex justify-between items-center border-t-2 border-charcoal bg-paper">
        <span className="font-hand text-lg leading-none">{item.cap}</span>
        <span className="font-grotesk text-[9px] font-bold tracking-widest bg-cream border border-charcoal px-2 py-1 shrink-0 ml-2">
          {item.cat.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
