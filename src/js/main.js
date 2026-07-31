import { initModal } from './modules/modal.js';
import { initFormValidator } from './modules/form-validator.js';
import { initNavbarScroll } from './modules/navbar-scroll.js';
import { initMirrorScore } from './modules/mirror-score.js';

document.addEventListener('DOMContentLoaded', () => {
  initModal();
  initFormValidator();
  initNavbarScroll();
  initMirrorScore();
});
