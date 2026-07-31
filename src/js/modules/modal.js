export function initModal() {
  const modal = document.getElementById('lead-modal');
  if (!modal) return;

  let lastFocusedElement = null;

  const openModal = (trigger) => {
    lastFocusedElement = trigger;
    modal.setAttribute('data-open', 'true');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('input, select')?.focus();
  };

  const closeModal = () => {
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocusedElement?.focus();
  };

  document.addEventListener('click', (event) => {
    const openTrigger = event.target.closest('[data-modal-open]');
    if (openTrigger) {
      openModal(openTrigger);
      return;
    }
    if (event.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.getAttribute('data-open') === 'true') {
      closeModal();
    }
  });
}
