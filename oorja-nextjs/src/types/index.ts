export interface DayEventSchedule {
  time: string;
  title: string;
  venue: string;
  type: string;
  cat?: string;
  prize?: string;
  desc: string;
}

export interface Night {
  id: string;
  dayLabel: string;
  tagLabel: string;
  date: string;
  fullDate: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  venue: string;
  time: string;
  dayTheme: string;
  daySummary: string;
  highlights: string[];
  schedule: DayEventSchedule[];
  img: string;
  quote: string;
  imageOrder: 'left' | 'right';
}

export interface EventItem {
  id: number;
  title: string;
  cat: string;
  type: 'official' | 'unofficial';
  date: string;
  time: string;
  venue: string;
  prize: string;
  team: string;
  desc: string;
  rules: string;
  img: string;
}

export interface TeamMember {
  name: string;
  role: string;
  dept: string;
  img: string;
  quote: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  cat: string;
  cap: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ToastItem {
  id: number;
  message?: string;
  msg?: string;
  type?: 'success' | 'error' | 'info';
}

export interface HomeEventPreview {
  id: string;
  title: string;
  meta: string;
  desc: string;
  tag: string;
  tagClass: string;
  badge?: string;
  badgeColor?: string;
  img: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  meta: string;
  img: string;
  stars?: string;
  rotate?: string;
  style?: React.CSSProperties;
  dark?: boolean;
}
