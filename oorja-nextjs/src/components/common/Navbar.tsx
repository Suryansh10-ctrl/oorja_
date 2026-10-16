'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface NavbarProps {
  onOpenPassModal?: (type: string) => void;
}

export default function Navbar({ onOpenPassModal }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled } = useScrollProgress();
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  function handleSectionClick(sectionId: string, e: React.MouseEvent) {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-[80] bg-ivory/95 backdrop-blur-sm border-b-[3px] border-charcoal transition-all duration-300${
        scrolled ? ' shadow-[0_4px_0_rgba(36,35,33,1)]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <div className="w-11 h-11 bg-terracotta border-[2.5px] border-charcoal hard-sm flex items-center justify-center font-display text-ivory text-2xl pt-0.5 group-hover:rotate-[-6deg] transition-transform">
            O
          </div>
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide">
              OORJA<span className="text-terracotta">.</span>
            </div>
            <div className="font-grotesk text-[9px] font-bold tracking-[.3em] text-smoke">
              EST. 2012 • FEST COMMITTEE
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`nav-link${pathname === '/' ? ' active' : ''}`}
          >
            Home
          </Link>
          <a
            href="/#about"
            onClick={(e) => handleSectionClick('about', e)}
            className="nav-link"
          >
            About
          </a>
          <a
            href="/#lineup"
            onClick={(e) => handleSectionClick('lineup', e)}
            className="nav-link"
          >
            Nights
          </a>
          <Link
            href="/events"
            className={`nav-link${pathname === '/events' ? ' active' : ''}`}
          >
            Events
          </Link>
          <Link
            href="/team"
            className={`nav-link${pathname === '/team' ? ' active' : ''}`}
          >
            Team
          </Link>
          <Link
            href="/gallery"
            className={`nav-link${pathname === '/gallery' ? ' active' : ''}`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`nav-link${pathname === '/contact' ? ' active' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenPassModal?.('full')}
            className="btn btn-terra text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 hidden sm:inline-flex"
          >
            Free Entry <i className="fa-solid fa-ticket"></i>
          </button>
          <button
            id="hamburger"
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="lg:hidden w-11 h-11 border-[2.5px] border-charcoal bg-paper hard-sm flex flex-col items-center justify-center gap-[5px]"
          >
            <span
              id="hb1"
              className="w-5 h-[2.5px] bg-charcoal block transition-all"
              style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }}
            ></span>
            <span
              id="hb2"
              className="w-5 h-[2.5px] bg-charcoal block transition-all"
              style={{ opacity: menuOpen ? 0 : 1 }}
            ></span>
            <span
              id="hb3"
              className="w-5 h-[2.5px] bg-charcoal block transition-all"
              style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobileMenu"
        className={`lg:hidden${menuOpen ? '' : ' hidden'} border-t-[3px] border-charcoal bg-paper`}
      >
        <div className="px-6 py-6 flex flex-col gap-1 font-grotesk font-bold uppercase tracking-widest text-lg">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="py-3 border-b-2 border-cream flex justify-between items-center"
          >
            Home <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </Link>
          <a
            href="/#about"
            onClick={(e) => handleSectionClick('about', e)}
            className="py-3 border-b-2 border-cream flex justify-between items-center"
          >
            About <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </a>
          <a
            href="/#lineup"
            onClick={(e) => handleSectionClick('lineup', e)}
            className="py-3 border-b-2 border-cream flex justify-between items-center"
          >
            3 Nights <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </a>
          <Link
            href="/events"
            onClick={() => setMenuOpen(false)}
            className="py-3 border-b-2 border-cream flex justify-between items-center"
          >
            Events <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </Link>
          <Link
            href="/team"
            onClick={() => setMenuOpen(false)}
            className="py-3 border-b-2 border-cream flex justify-between items-center"
          >
            Team <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="py-3 border-b-2 border-cream flex justify-between items-center"
          >
            Gallery <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 flex justify-between items-center"
          >
            Contact <i className="fa-solid fa-arrow-right text-terracotta"></i>
          </Link>
          <button
            onClick={() => {
              onOpenPassModal?.('full');
              setMenuOpen(false);
            }}
            className="btn btn-terra w-full py-4 mt-3"
          >
            Free Entry <i className="fa-solid fa-ticket"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
