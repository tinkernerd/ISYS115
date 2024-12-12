// Header Nav Active Page Line
export const PageLine = () => {
    // Get the current URL path
    const currentPath = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
    const navLinks = document.querySelectorAll('.navigation ul a');

    // Loop through all navigation links
    navLinks.forEach(link => {
        // Extract the href path of each link
        const linkPath = new URL(link.href).pathname.replace(/\/$/, ''); // Normalize the href

        // Compare the href path with the current path
        if (linkPath === currentPath) {
            link.classList.add('active'); // Add the active class to the current page link
        } else {
            link.classList.remove('active'); // Ensure other links are not active
        }
    });
};

export const sidebar = () => {
    // Function to set the active link in the sidebar
    function setActiveSidebarLink() {
        const currentPath = window.location.pathname.replace(/\/$/, ''); // Normalize path
        const sidebarLinks = document.querySelectorAll('.sidebar nav ul a');

        sidebarLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname.replace(/\/$/, ''); // Normalize link href

            if (linkPath === currentPath) {
                link.classList.add('active'); // Add active class to the matching link
            } else {
                link.classList.remove('active'); // Remove active class from others
            }
        });
    }

    // Call the function to activate the correct link
    setActiveSidebarLink();
};
