import type { ReactNode } from 'react';

import { Icon, type IconName } from '../Icon/Icon';
import './toast.css';

// Read by the animated Happo story, so the capture window always matches the
// animation.
export const ENTER_DURATION_MS = 450;

const icons: Record<ToastProps['tone'] & string, IconName> = {
  success: 'checkCircle',
  error: 'alert',
  info: 'info',
};

export interface ToastProps {
  tone?: 'success' | 'error' | 'info';
  title: string;
  children?: ReactNode;
  action?: ReactNode;
  onDismiss?: () => void;
}

export function Toast({
  tone = 'success',
  title,
  children,
  action,
  onDismiss,
}: ToastProps) {
  return (
    <div
      className={`toast toast--${tone}`}
      role={tone === 'error' ? 'alert' : 'status'}
      style={{ animationDuration: `${ENTER_DURATION_MS}ms` }}
    >
      <span className="toast__icon">
        <Icon name={icons[tone]} size={20} />
      </span>
      <div className="toast__content">
        <p className="toast__title">{title}</p>
        {children && <p className="toast__body">{children}</p>}
        {action && <div className="toast__action">{action}</div>}
      </div>
      {onDismiss && (
        <button
          className="toast__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}

export function ToastStack({ children }: { children: ReactNode }) {
  return <div className="toast-stack">{children}</div>;
}
