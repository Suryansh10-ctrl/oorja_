import { useState, useCallback, useEffect } from 'react';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import Preloader from './components/common/Preloader.jsx';
import ScrollProgress from './components/common/ScrollProgress.jsx';
import BackToTop from './components/common/BackToTop.jsx';
import { ToastContainer } from './components/common/Toast.jsx';
import PassModal from './components/common/PassModal.jsx';
import EventModal from './components/events/EventModal.jsx';

import Home from './pages/Home.jsx';
import EventsPage from './pages/Events.jsx';
import TeamPage from './pages/Team.jsx';
import GalleryPage from './pages/Gallery.jsx';
import ContactPage from './pages/Contact.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [passModalOpen, setPassModalOpen] = useState(false);
  const [passModalType, setPassModalType] = useState('full');
  const [eventModalId, setEventModalId] = useState(null);
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  function navigateTo(pageId) {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goHomeSection(sectionId) {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function openPassModal(type = 'full') {
    setPassModalType(type);
    setPassModalOpen(true);
  }

  function openEventModal(eventId) {
    setEventModalId(eventId);
  }

  return (
    <div id="oorja-app" className="bg-paper min-h-screen flex flex-col text-charcoal">
      <Preloader />
      <ScrollProgress />

      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onGoHomeSection={goHomeSection}
        onOpenPassModal={openPassModal}
      />

      <div className="flex-1">
        {activePage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onGoHomeSection={goHomeSection}
            onOpenPassModal={openPassModal}
          />
        )}
        {activePage === 'events' && (
          <EventsPage
            onOpenModal={openEventModal}
            onNavigate={navigateTo}
          />
        )}
        {activePage === 'team' && (
          <TeamPage onNavigate={navigateTo} />
        )}
        {activePage === 'gallery' && (
          <GalleryPage onShowToast={showToast} />
        )}
        {activePage === 'contact' && (
          <ContactPage onShowToast={showToast} />
        )}
      </div>

      <Footer
        onNavigate={navigateTo}
        onGoHomeSection={goHomeSection}
        onShowToast={showToast}
      />

      <BackToTop />

      <PassModal
        isOpen={passModalOpen}
        passType={passModalType}
        onClose={() => setPassModalOpen(false)}
        onShowToast={showToast}
      />

      <EventModal
        eventId={eventModalId}
        onClose={() => setEventModalId(null)}
        onShowToast={showToast}
      />

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
