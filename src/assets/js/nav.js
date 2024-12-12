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

    // Function to set up the sidebar toggle functionality
    function setSidebarToggle() {
        document.addEventListener("DOMContentLoaded", () => {
            const headerLeft = document.querySelector(".header-left");
            const sidebar = document.querySelector(".sidebar");
            const logo = document.querySelector(".logo");

            if (sidebar) {
                // Create and insert the sidebar toggle button
                const sidebarToggle = document.createElement("button");
                sidebarToggle.id = "sidebar-toggle";
                sidebarToggle.classList.add("sidebar-icon");
                sidebarToggle.innerHTML = "☰";
                headerLeft.insertBefore(sidebarToggle, logo);

                // Add click event to toggle the sidebar
                sidebarToggle.addEventListener("click", () => {
                    if (sidebar.classList.contains("active")) {
                        sidebar.classList.remove("active");
                        setTimeout(() => {
                            sidebar.style.visibility = "hidden";
                        }, 300); // Match this duration to the CSS transition time
                    } else {
                        sidebar.style.visibility = "visible";
                        sidebar.classList.add("active");
                    }
                });

                // Adjust header styles for sidebar presence
                headerLeft.classList.add("with-sidebar");
            } else {
                // Remove any styles specific to sidebar presence
                headerLeft.classList.remove("with-sidebar");
            }
        });
    }

    // Call the functions to activate the correct link and set up the sidebar
    setActiveSidebarLink();
    setSidebarToggle();
};
