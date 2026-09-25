import { AvatarGroup } from '../Avatar/Avatar';
import { Badge, type BadgeTone } from '../Badge/Badge';
import './project-table.css';

export interface Project {
  name: string;
  team: string[];
  status: 'On track' | 'At risk' | 'Behind' | 'Done';
  progress: number;
  due: string;
}

const tones: Record<Project['status'], BadgeTone> = {
  'On track': 'success',
  'At risk': 'warning',
  Behind: 'danger',
  Done: 'neutral',
};

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="project-table">
      <table>
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col" className="project-table__team">
              Team
            </th>
            <th scope="col">Status</th>
            <th scope="col" className="project-table__progress">
              Progress
            </th>
            <th scope="col" className="project-table__due">
              Due
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.name}>
              <th scope="row">{project.name}</th>
              <td className="project-table__team">
                <AvatarGroup names={project.team} max={3} />
              </td>
              <td>
                <Badge tone={tones[project.status]} dot>
                  {project.status}
                </Badge>
              </td>
              <td className="project-table__progress">
                <div className="progress">
                  <div
                    className="progress__bar"
                    role="progressbar"
                    aria-label={`${project.name} progress`}
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span style={{ width: `${project.progress}%` }} />
                  </div>
                  <span className="progress__value">{project.progress}%</span>
                </div>
              </td>
              <td className="project-table__due">{project.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
