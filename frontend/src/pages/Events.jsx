import EventsGrid from '../components/events/EventsGrid.jsx';

export default function EventsPage({ onOpenModal, onNavigate }) {
  return <EventsGrid onOpenModal={onOpenModal} onNavigate={onNavigate} />;
}
