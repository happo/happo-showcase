import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import './pricing-card.css';

export interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <section
      className={`pricing-card${featured ? ' pricing-card--featured' : ''}`}
    >
      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{name}</h3>
        {featured && <span className="pricing-card__tag">Most popular</span>}
      </div>
      <p className="pricing-card__description">{description}</p>
      <p className="pricing-card__price">
        <span className="pricing-card__amount">${price}</span>
        <span className="pricing-card__period">per user / month</span>
      </p>
      <Button variant={featured ? 'primary' : 'secondary'} fullWidth>
        {cta}
      </Button>
      <ul className="pricing-card__features">
        {features.map(feature => (
          <li key={feature}>
            <Icon name="check" size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
