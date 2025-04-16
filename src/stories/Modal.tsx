import React, { useEffect, useRef } from 'react';

import { Button } from './Button';
import './modal.css';

export interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  open?: boolean;
  title?: string;
}

export function Modal({ children, onClose, open = false, title }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} role="presentation" />
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        ref={modalRef}
      >
        <div className="modal-content">
          {onClose && (
            <button
              className="modal-close"
              onClick={onClose}
              ref={closeButtonRef}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
          {title && (
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
