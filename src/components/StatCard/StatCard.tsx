import { Icon } from '../Icon/Icon';
import './stat-card.css';

export interface StatCardProps {
  label: string;
  value: string;
  change: number;
  trend: number[];
}

function sparklinePath(values: number[], width: number, height: number) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const step = width / (values.length - 1);
  return values
    .map((value, i) => {
      const x = i * step;
      const y = height - ((value - min) / (max - min || 1)) * (height - 4) - 2;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

export function StatCard({ label, value, change, trend }: StatCardProps) {
  const up = change >= 0;
  const line = sparklinePath(trend, 120, 40);
  return (
    <section className="stat-card">
      <h3 className="stat-card__label">{label}</h3>
      <div className="stat-card__body">
        <div>
          <p className="stat-card__value">{value}</p>
          <p
            className={`stat-card__change stat-card__change--${up ? 'up' : 'down'}`}
          >
            <Icon name={up ? 'trendingUp' : 'trendingDown'} size={14} />
            {up ? '+' : '−'}
            {Math.abs(change)}%<span> vs last week</span>
          </p>
        </div>
        <svg
          className={`stat-card__sparkline stat-card__sparkline--${up ? 'up' : 'down'}`}
          width="120"
          height="40"
          viewBox="0 0 120 40"
          aria-hidden="true"
        >
          <path d={`${line} L120 40 L0 40 Z`} className="stat-card__area" />
          <path d={line} className="stat-card__line" />
        </svg>
      </div>
    </section>
  );
}
