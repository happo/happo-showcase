import './avatar.css';

const palette = ['green', 'blue', 'violet', 'amber', 'rose', 'teal'] as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function colorFor(name: string) {
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return palette[hash % palette.length];
}

export interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ name, size = 'md' }: AvatarProps) {
  return (
    <span
      className={`avatar avatar--${size} avatar--${colorFor(name)}`}
      role="img"
      aria-label={name}
    >
      {initials(name)}
    </span>
  );
}

export interface AvatarGroupProps {
  names: string[];
  max?: number;
  size?: AvatarProps['size'];
}

export function AvatarGroup({ names, max = 4, size = 'sm' }: AvatarGroupProps) {
  const shown = names.slice(0, max);
  const rest = names.length - shown.length;
  return (
    <span className="avatar-group">
      {shown.map(name => (
        <Avatar key={name} name={name} size={size} />
      ))}
      {rest > 0 && (
        <span
          className={`avatar avatar--${size} avatar--more`}
          role="img"
          aria-label={`${rest} more`}
        >
          +{rest}
        </span>
      )}
    </span>
  );
}
