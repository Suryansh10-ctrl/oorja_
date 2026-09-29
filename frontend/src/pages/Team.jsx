import { useState } from 'react';
import { TEAM, TEAM_DEPTS } from '../data/team/index.js';
import TeamCard from '../components/team/TeamCard.jsx';

export default function TeamPage({ onNavigate }) {
  const [activeDept, setActiveDept] = useState('all');

  const filteredTeam = TEAM.filter(
    (member) => activeDept === 'all' || member.dept === activeDept
  );

  return (
    <>
      <section className="bg-terracotta text-ivory pt-14 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 halftone"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="font-grotesk font-bold text-xs tracking-[.3em] text-mustardLight">
            THE HUMANS BEHIND THE CHAOS
          </div>
          <h1 className="font-display text-6xl md:text-8xl mt-2">
            MEET THE <span className="text-mustard">TEAM.</span>
          </h1>
          <p className="text-ivory/85 max-w-2xl mt-3 md:text-lg">
            60+ volunteers. 15 leads. 1 family. We plan for 6 months so you can party for 3 days.
          </p>

          <div className="flex gap-2 mt-6 overflow-x-auto pb-2" id="teamFilters">
            {TEAM_DEPTS.map((dept) => (
              <button
                key={dept}
                className={`filter-pill${activeDept === dept ? ' active' : ''}`}
                onClick={() => setActiveDept(dept)}
              >
                {dept === 'all' ? 'Everyone' : dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 md:py-16 paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            id="teamGrid"
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTeam.map((member, i) => (
              <TeamCard key={member.name + i} member={member} />
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div
              className="bg-charcoal text-ivory border-[3px] border-charcoal p-7 hard"
              style={{ boxShadow: '6px 6px 0 #C65332' }}
            >
              <h3 className="font-display text-3xl">
                WANT TO JOIN <span className="text-mustard">OORJA ’27?</span>
              </h3>
              <p className="text-ivory/70 mt-2 text-sm">
                Recruitment opens every August. Volunteers get certificates, merch, afterparty access and memories for life.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-terra px-6 py-3 text-xs mt-5"
              >
                Register Interest
              </button>
            </div>
            <div className="bg-paper border-[3px] border-charcoal hard p-7">
              <h3 className="font-display text-3xl">
                FACULTY <span className="text-terracotta">MENTORS</span>
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-olive text-ivory rounded-full flex items-center justify-center font-grotesk font-bold border-2 border-charcoal">
                    DR
                  </div>
                  <div>
                    <strong>Dr. Ritu Malhotra</strong> — Convenor, Cultural Council
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center font-grotesk font-bold border-2 border-charcoal">
                    PS
                  </div>
                  <div>
                    <strong>Prof. Sanjay Yadav</strong> — Co-Convenor, Student Affairs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
