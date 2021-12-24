import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function UniversalModal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
      return;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
    return;
  };

  return createPortal(
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={s.Modal__content}>{children}</div>
    </div>,
    modalRoot,
  );
}
