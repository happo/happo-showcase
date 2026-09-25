import { useId, type InputHTMLAttributes } from 'react';

import { Icon } from '../Icon/Icon';
import './text-field.css';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function TextField({ label, hint, error, ...props }: TextFieldProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error || hint;
  return (
    <div className={`text-field${error ? ' text-field--error' : ''}`}>
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="text-field__input"
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
        {...props}
      />
      {message && (
        <p id={messageId} className="text-field__message">
          {error && <Icon name="alert" size={14} />}
          {message}
        </p>
      )}
    </div>
  );
}
