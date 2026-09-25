import type { Project } from './components/ProjectTable/ProjectTable';

export const projects: Project[] = [
  {
    name: 'Website redesign',
    team: ['Maya Chen', 'Jonas Weber', 'Priya Raman', 'Sam Okafor'],
    status: 'On track',
    progress: 72,
    due: 'Oct 14',
  },
  {
    name: 'Mobile onboarding',
    team: ['Lena Ortiz', 'Theo Park'],
    status: 'At risk',
    progress: 45,
    due: 'Oct 21',
  },
  {
    name: 'Billing migration',
    team: ['Sam Okafor', 'Priya Raman', 'Maya Chen'],
    status: 'Behind',
    progress: 28,
    due: 'Oct 3',
  },
  {
    name: 'Q3 launch',
    team: ['Jonas Weber', 'Lena Ortiz'],
    status: 'Done',
    progress: 100,
    due: 'Sep 30',
  },
];

export const stats = [
  {
    label: 'Active projects',
    value: '128',
    change: 12.5,
    trend: [18, 22, 20, 26, 25, 31, 29, 34, 38, 36, 42],
  },
  {
    label: 'Tasks completed',
    value: '1,904',
    change: 4.1,
    trend: [30, 28, 33, 35, 31, 36, 38, 37, 41, 40, 43],
  },
  {
    label: 'Open issues',
    value: '37',
    change: -8.2,
    trend: [40, 42, 39, 44, 41, 38, 40, 36, 35, 37, 33],
  },
];
