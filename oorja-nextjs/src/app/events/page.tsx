'use client';

import EventsGrid from '../../components/events/EventsGrid';
import { useFest } from '../../context/FestContext';

export default function EventsPage() {
  const { openEventModal } = useFest();

  return <EventsGrid onOpenModal={openEventModal} />;
}
