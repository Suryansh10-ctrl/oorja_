import { DEPT_COLORS } from '../../data/team/index.js';

export default function TeamCard({ member, onShowToast }) {
  const colorClass = DEPT_COLORS[member.dept] || 'bg-paper text-charcoal';

  return (
    <div className="team-card bg-paper border-[2.5px] border-charcoal hard overflow-hidden">
      <div className="h-72 overflow-hidden border-b-[2.5px] border-charcoal relative">
        <img
          src={member.img}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(1.05) contrast(1.03)' }}
          alt={member.name}
        />
        <span className={`absolute top-3 left-3 ${colorClass} font-grotesk font-bold text-[10px] tracking-widest px-2.5 py-1.5 border-2 border-charcoal`}>
          {member.dept.toUpperCase()}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-grotesk font-bold text-lg">{member.name}</h3>
        <div className="font-grotesk text-xs font-bold tracking-widest text-terracotta">{member.role.toUpperCase()}</div>
        <p className="font-hand text-lg text-smoke mt-1">"{member.quote}"</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onShowToast(`Opening ${member.name.split(' ')[0]}'s Instagram…`, 'success')}
            className="flex-1 border-2 border-charcoal py-2 text-xs font-grotesk font-bold tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"
          >
            <i className="fa-brands fa-instagram mr-1"></i>INSTA
          </button>
          <button
            onClick={() => onShowToast('Opening LinkedIn…', 'success')}
            className="flex-1 border-2 border-charcoal py-2 text-xs font-grotesk font-bold tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"
          >
            <i className="fa-brands fa-linkedin mr-1"></i>LINKEDIN
          </button>
        </div>
      </div>
    </div>
  );
}
