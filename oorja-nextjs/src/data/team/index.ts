import { coreTeam } from './coreTeam';
import { coordinators } from './coordinators';
import { TeamMember } from '../../types';

export const TEAM: TeamMember[] = [...coreTeam, ...coordinators];

export const TEAM_DEPTS = ["all", "Core", "Cultural", "Technical", "Marketing", "Logistics", "Creative"];

export const DEPT_COLORS: Record<string, string> = {
  Core: 'bg-terracotta text-ivory',
  Cultural: 'bg-mustard text-charcoal',
  Technical: 'bg-charcoal text-ivory',
  Marketing: 'bg-warmorange text-ivory',
  Logistics: 'bg-olive text-ivory',
  Creative: 'bg-ivory text-charcoal',
};

export { coreTeam, coordinators };
