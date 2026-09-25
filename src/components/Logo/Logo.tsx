import './logo.css';

export function Logo({ showName = true }: { showName?: boolean }) {
  return (
    <span className="logo">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--primary)" />
        <path
          d="M23.5 8.5C14.5 8.5 8.5 13.5 8.5 23.5c10 0 15-6 15-15Z"
          fill="var(--on-primary)"
        />
        <path
          d="M9.5 22.5 19 13"
          stroke="var(--primary)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
      {showName ? (
        <span className="logo__name">Fernway</span>
      ) : (
        <span className="visually-hidden">Fernway</span>
      )}
    </span>
  );
}
