// main.js
import { fancyLog } from './module.js';

fancyLog();

// --------
// Toggle theme
// --------
document.querySelector('.js-bs-theme-toggle').addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }
});

// --------