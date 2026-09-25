import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import {
  ProjectTable,
  type Project,
} from '../../components/ProjectTable/ProjectTable';
import {
  StatCard,
  type StatCardProps,
} from '../../components/StatCard/StatCard';
import './dashboard.css';

export interface DashboardProps {
  userName: string;
  stats: StatCardProps[];
  projects: Project[];
}

export function Dashboard({ userName, stats, projects }: DashboardProps) {
  return (
    <div className="dashboard">
      <Header user={{ name: userName }} unreadCount={3} />
      <main className="dashboard__main">
        <div className="dashboard__intro">
          <div>
            <h1>Good morning, {userName.split(' ')[0]}</h1>
            <p>Here’s what happened across your projects this week.</p>
          </div>
          <Button icon="plus">New project</Button>
        </div>
        <div className="dashboard__stats">
          {stats.map(stat => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        <section className="dashboard__section">
          <div className="dashboard__section-header">
            <h2>Projects</h2>
            <Button variant="ghost" size="sm" icon="arrowRight">
              View all
            </Button>
          </div>
          <ProjectTable projects={projects} />
        </section>
      </main>
    </div>
  );
}
