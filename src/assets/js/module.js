export const fancyLog = () => {
    console.log('%c Wow! ', 'font-size: 100px; color: white; background-color: black; border-radius: 5px;');
    console.log('Looks like you must like code!');
    console.log('You should look at the source for this website: https://github.com/tinkernerd/tinkerdev/');
};

// Theme Switcher
export const themeSwitch = () => {
function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('light-theme');
        console.log('Waking Up'); // Log message for light mode
    } else {
        document.body.classList.remove('light-theme');
        console.log('Going Dark'); // Log message for dark mode
    }
}

// Detect system theme and apply it initially
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
applyTheme(!prefersDark.matches); // Apply opposite for "light-theme"

// Listen for changes in the system theme
prefersDark.addEventListener('change', (e) => {
    applyTheme(!e.matches); // Apply opposite for "light-theme"
});

// Add event listener for the theme-switch button
document.querySelector('.theme-switch').addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    if (isLight) {
        console.log('Waking Up'); // Log message for light mode
    } else {
        console.log('Going Dark'); // Log message for dark mode
    }
});
};
