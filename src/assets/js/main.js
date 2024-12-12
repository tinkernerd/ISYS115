// module.js
import { fancyLog, themeSwitch } from './module.js';
fancyLog();
themeSwitch();

/* nav.js*/
import { PageLine, sidebar } from './nav.js';
// Nav Functions
PageLine();
sidebar();


/* docs.js */
import { collapseDocs } from './docs.js';
collapseDocs();

// copy-button.js
import { initializeCopyButtons } from './copy-button.js';
// Initialize copy buttons when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeCopyButtons();
});
// cookie-monster.js
import { cookieMonster } from './cookie-monster.js';
document.addEventListener('DOMContentLoaded', () => {
    cookieMonster();
});


import { setupFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    setupFooter();
});

import { sendContact } from './feedback.js';

document.getElementById('feedbackForm').addEventListener('submit', sendContact);
