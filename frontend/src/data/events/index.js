import { culturalEvents } from './cultural.js';
import { technicalEvents } from './technical.js';
import { sportsEvents } from './sports.js';
import { funEvents } from './fun.js';

export const EVENTS = [
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
