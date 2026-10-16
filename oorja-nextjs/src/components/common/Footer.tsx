'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface FooterProps {
  onShowToast?: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export default function Footer({ onShowToast }: FooterProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleSection(sectionId: string, e: React.MouseEvent) {
    e.preventDefault();
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

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onShowToast?.('Subscribed! Welcome to the OORJA fam.', 'success');
    e.currentTarget.reset();
  }

  return (
    <footer className="bg-charcoal text-ivory pt-14 pb-6 relative overflow-hidden border-t-[3px] border-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-terracotta border-2 border-ivory flex items-center justify-center font-display text-2xl pt-0.5">
                O
              </div>
              <div className="font-display text-3xl">
                OORJA<span className="text-terracotta">.</span>
              </div>
            </Link>
            <p className="text-ivory/60 text-sm mt-4 leading-relaxed">
              The annual cultural heartbeat of North Campus. Run by students, powered by energy, remembered forever.
            </p>
            <div className="flex gap-2 mt-5">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast?.('Opening Instagram…', 'success');
                }}
                className="w-10 h-10 bg-ivory/10 border border-ivory/20 flex items-center justify-center hover:bg-terracotta transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast?.('Opening YouTube…', 'success');
                }}
                className="w-10 h-10 bg-ivory/10 border border-ivory/20 flex items-center justify-center hover:bg-terracotta transition-colors"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast?.('Opening X…', 'success');
                }}
                className="w-10 h-10 bg-ivory/10 border border-ivory/20 flex items-center justify-center hover:bg-terracotta transition-colors"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast?.('Opening Spotify…', 'success');
                }}
                className="w-10 h-10 bg-ivory/10 border border-ivory/20 flex items-center justify-center hover:bg-terracotta transition-colors"
              >
                <i className="fa-brands fa-spotify"></i>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="font-grotesk font-bold text-xs tracking-[.25em] text-mustard">EXPLORE</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
              <li>
                <Link href="/" className="hover:text-mustard">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" onClick={(e) => handleSection('about', e)} className="hover:text-mustard">
                  About OORJA
                </a>
              </li>
              <li>
                <a href="/#lineup" onClick={(e) => handleSection('lineup', e)} className="hover:text-mustard">
                  3 Nights
                </a>
              </li>
              <li>
                <Link href="/events" className="hover:text-mustard">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-mustard">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Events */}
          <div className="md:col-span-3">
            <h4 className="font-grotesk font-bold text-xs tracking-[.25em] text-mustard">TOP EVENTS</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
              <li>
                <Link href="/events" className="hover:text-mustard">
                  Battle of Bands
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-mustard">
                  Nritya Dance Face-Off
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-mustard">
                  HackOORJA
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-mustard">
                  Nukkad Natak
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-mustard">
                  Fashion Show — Vastra
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-grotesk font-bold text-xs tracking-[.25em] text-mustard">GET UPDATES</h4>
            <p className="text-sm text-ivory/60 mt-4">
              Lineup drops, early-bird alerts &amp; aftermovies. No spam, only dhamaka.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input
                id="newsEmail"
                required
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-ivory/10 border border-ivory/20 px-4 py-3 text-sm placeholder:text-ivory/40 !shadow-none focus:!shadow-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-terracotta px-4 border border-terracotta hover:bg-mustard hover:text-charcoal hover:border-mustard transition-colors"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
            <p className="text-xs text-ivory/40 mt-3">March 6–8, 2026 • Main Ground, North Campus</p>
          </div>
        </div>

        {/* Big watermark */}
        <div className="font-display text-[19vw] md:text-[11rem] leading-none text-center text-ivory/[.05] select-none mt-8 -mb-4 md:-mb-8">
          OORJA
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/15 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/50 font-grotesk tracking-wider">
          <span>© 2026 OORJA FEST COMMITTEE • DESIGNED WITH LOVE BY THE STUDENT DESIGN TEAM</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-mustard">PRIVACY</a>
            <a href="#" className="hover:text-mustard">TERMS</a>
            <Link href="/contact" className="hover:text-mustard">CONTACT</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
