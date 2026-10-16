'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Preloader from '../components/common/Preloader';
import ScrollProgress from '../components/common/ScrollProgress';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BackToTop from '../components/common/BackToTop';
import PassModal from '../components/common/PassModal';
import EventModal from '../components/events/EventModal';
import NightModal from '../components/common/NightModal';
import { ToastContainer } from '../components/common/Toast';
import { ToastItem } from '../types';

interface FestContextType {
  openPassModal: (type?: string) => void;
  closePassModal: () => void;
  openEventModal: (eventId: number) => void;
  closeEventModal: () => void;
  openNightModal: (nightId: string) => void;
  closeNightModal: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: number) => void;
}

const FestContext = createContext<FestContextType | undefined>(undefined);

export function useFest() {
  const context = useContext(FestContext);
  if (!context) {
    throw new Error('useFest must be used within a FestProvider');
  }
  return context;
}

export function FestProvider({ children }: { children: ReactNode }) {
  const [passModalOpen, setPassModalOpen] = useState(false);
  const [passModalType, setPassModalType] = useState('full');
  const [eventModalId, setEventModalId] = useState<number | null>(null);
  const [nightModalId, setNightModalId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, msg: message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const openPassModal = useCallback((type = 'full') => {
    setPassModalType(type);
    setPassModalOpen(true);
  }, []);

  const closePassModal = useCallback(() => {
    setPassModalOpen(false);
  }, []);

  const openEventModal = useCallback((eventId: number) => {
    setEventModalId(eventId);
  }, []);

  const closeEventModal = useCallback(() => {
    setEventModalId(null);
  }, []);

  const openNightModal = useCallback((nightId: string) => {
    setNightModalId(nightId);
  }, []);

  const closeNightModal = useCallback(() => {
    setNightModalId(null);
  }, []);

  return (
    <FestContext.Provider
      value={{
        openPassModal,
        closePassModal,
        openEventModal,
        closeEventModal,
        openNightModal,
        closeNightModal,
        showToast,
        removeToast,
      }}
    >
      <div id="oorja-app" className="bg-paper min-h-screen flex flex-col text-charcoal">
        <canvas id="confetti" className="fixed inset-0 pointer-events-none z-[999] hidden"></canvas>
        <Preloader />
        <ScrollProgress />
        <Navbar onOpenPassModal={openPassModal} />
        <div className="flex-1">{children}</div>
        <Footer onShowToast={showToast} />
        <BackToTop />
        <PassModal
          isOpen={passModalOpen}
          passType={passModalType}
          onClose={closePassModal}
          onShowToast={showToast}
        />
        <EventModal
          eventId={eventModalId}
          onClose={closeEventModal}
          onShowToast={showToast}
        />
        <NightModal
          nightId={nightModalId}
          onClose={closeNightModal}
          onOpenPassModal={openPassModal}
        />
        <ToastContainer toasts={toasts} />
      </div>
    </FestContext.Provider>
  );
}
