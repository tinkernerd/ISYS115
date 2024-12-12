export function cookieMonster() {

    // Fun messages
    const messages = [
        "Learning is fun!",
        "Yay! You came back for more JavaScript!",
        "Debugging: because every programmer needs a challenge!",
        "Computers are fast; programmers keep them slow.",
        "Code like there's no tomorrow!",
        "Let's make the web great... again?"
    ];

    // Function to create, read, and erase cookies
    function createCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value}${expires}; path=/`;
    }

    function readCookie(name) {
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(";").map((c) => c.trim());
        for (let c of cookies) {
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    // Show/hide elements based on cookies
    if (readCookie("cookie-notice-dismissed") === "true") {
        showPopup();
    } else {
        document.getElementById("cookie-notice").style.display = "block";
    }

    // Event listener for accepting cookies
    document.getElementById("cookie-notice-accept").addEventListener("click", function () {
        createCookie("cookie-notice-dismissed", "true", 31);
        document.getElementById("cookie-notice").style.display = "none";
        showPopup();
    });

    // Fun popup functionality
    function showPopup() {
        if (!readCookie("fun-popup-dismissed")) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            document.getElementById("popup-message").innerText = messages[randomIndex];
            document.getElementById("fun-popup").style.display = "block";
        }
    }

    // Event listeners for popup buttons
    document.getElementById("popup-close").addEventListener("click", function () {
        document.getElementById("fun-popup").style.display = "none";
    });

    document.getElementById("popup-stop").addEventListener("click", function () {
        createCookie("fun-popup-dismissed", "true", 365);
        document.getElementById("fun-popup").style.display = "none";
    });

    // Ensure popup displays only after cookies are approved
    window.onload = function () {
        if (readCookie("cookie-notice-dismissed") === "true") {
            showPopup();
        }
    };
}