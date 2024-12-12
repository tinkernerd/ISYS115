export const collapseDocs = () => {
    document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(button => {
        const content = button.nextElementSibling;

        // Set initial state based on the 'open' class
        if (button.classList.contains('open')) {
        button.classList.add('active');
        content.classList.add('expanded');
        }

        // Toggle functionality
        button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');
        
        // Toggle the button state
        button.classList.toggle('active', !isActive);

        // Toggle the content state
        content.classList.toggle('expanded', !isActive);
        });
    });
    });

};