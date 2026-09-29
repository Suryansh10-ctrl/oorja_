import { useState, useCallback } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress.js';

export default function Navbar({ activePage, onNavigate, onGoHomeSection, onOpenPassModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled } = useScrollProgress();

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  function navTo(page) {
    onNavigate(page);
    setMenuOpen(false);
  }

  function goSection(id) {
    onGoHomeSection(id);
    setMenuOpen(false);
  }

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-[80] bg-ivory/95 backdrop-blur-sm border-b-[3px] border-charcoal transition-all duration-300${scrolled ? ' shadow-[0_4px_0_rgba(36,35,33,1)]' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); navTo('home'); }} className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-terracotta border-[2.5px] border-charcoal hard-sm flex items-center justify-center font-display text-ivory text-2xl pt-0.5 group-hover:rotate-[-6deg] transition-transform">O</div>
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide">OORJA<span className="text-terracotta">.</span></div>
            <div className="font-grotesk text-[9px] font-bold tracking-[.3em] text-smoke">EST. 2012 • FEST COMMITTEE</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          <a href="#" data-nav="home" onClick={(e) => { e.preventDefault(); navTo('home'); }} className={`nav-link${activePage === 'home' ? ' active' : ''}`}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); goSection('about'); }} className="nav-link">About</a>
          <a href="#" onClick={(e) => { e.preventDefault(); goSection('lineup'); }} className="nav-link">Nights</a>
          <a href="#" data-nav="events" onClick={(e) => { e.preventDefault(); navTo('events'); }} className={`nav-link${activePage === 'events' ? ' active' : ''}`}>Events</a>
          <a href="#" data-nav="team" onClick={(e) => { e.preventDefault(); navTo('team'); }} className={`nav-link${activePage === 'team' ? ' active' : ''}`}>Team</a>
          <a href="#" data-nav="gallery" onClick={(e) => { e.preventDefault(); navTo('gallery'); }} className={`nav-link${activePage === 'gallery' ? ' active' : ''}`}>Gallery</a>
          <a href="#" data-nav="contact" onClick={(e) => { e.preventDefault(); navTo('contact'); }} className={`nav-link${activePage === 'contact' ? ' active' : ''}`}>Contact</a>
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button onClick={() => onOpenPassModal('full')} className="btn btn-terra text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 hidden sm:inline-flex">
            Free Entry <i className="fa-solid fa-ticket"></i>
          </button>
          <button id="hamburger" onClick={toggleMenu} className="lg:hidden w-11 h-11 border-[2.5px] border-charcoal bg-paper hard-sm flex flex-col items-center justify-center gap-[5px]">
            <span id="hb1" className="w-5 h-[2.5px] bg-charcoal block transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }}></span>
            <span id="hb2" className="w-5 h-[2.5px] bg-charcoal block transition-all" style={{ opacity: menuOpen ? '0' : '1' }}></span>
            <span id="hb3" className="w-5 h-[2.5px] bg-charcoal block transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobileMenu" className={`lg:hidden${menuOpen ? '' : ' hidden'} border-t-[3px] border-charcoal bg-paper`}>
        <div className="px-6 py-6 flex flex-col gap-1 font-grotesk font-bold uppercase tracking-widest text-lg">
          <a href="#" onClick={(e) => { e.preventDefault(); navTo('home'); }} className="py-3 border-b-2 border-cream flex justify-between items-center">Home <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <a href="#" onClick={(e) => { e.preventDefault(); goSection('about'); }} className="py-3 border-b-2 border-cream flex justify-between items-center">About <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <a href="#" onClick={(e) => { e.preventDefault(); goSection('lineup'); }} className="py-3 border-b-2 border-cream flex justify-between items-center">3 Nights <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <a href="#" onClick={(e) => { e.preventDefault(); navTo('events'); }} className="py-3 border-b-2 border-cream flex justify-between items-center">Events <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <a href="#" onClick={(e) => { e.preventDefault(); navTo('team'); }} className="py-3 border-b-2 border-cream flex justify-between items-center">Team <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <a href="#" onClick={(e) => { e.preventDefault(); navTo('gallery'); }} className="py-3 border-b-2 border-cream flex justify-between items-center">Gallery <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <a href="#" onClick={(e) => { e.preventDefault(); navTo('contact'); }} className="py-3 flex justify-between items-center">Contact <i className="fa-solid fa-arrow-right text-terracotta"></i></a>
          <button onClick={() => { onOpenPassModal('full'); setMenuOpen(false); }} className="btn btn-terra w-full py-4 mt-3">Free Entry <i className="fa-solid fa-ticket"></i></button>
        </div>
      </div>
    </header>
  );
}
