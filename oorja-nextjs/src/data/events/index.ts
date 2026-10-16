import { culturalEvents } from './cultural';
import { technicalEvents } from './technical';
import { sportsEvents } from './sports';
import { funEvents } from './fun';
import { EventItem } from '../../types';

export const EVENTS: EventItem[] = [
  ...culturalEvents,
  ...technicalEvents,
  ...sportsEvents,
  ...funEvents,
];

export const EVENT_CATS = [
  "all", "Music", "Dance", "Theatre", "Fashion",
  "Tech", "Art", "Fun", "Sports", "Gaming", "Food", "Literary", "Creator",
];

export { culturalEvents, technicalEvents, sportsEvents, funEvents };
