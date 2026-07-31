export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const updateState = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
  };

  updateState();
  window.addEventListener('scroll', updateState, { passive: true });
}
