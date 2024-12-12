export function setupFooter() {
    const footer = document.getElementById('footer');
    const apiKey = "Replace API KEY HERE";  // Replace with your Tomorrow.io API key

    // Function to update date and time
    function updateDateTime() {
        const now = new Date();
        const formattedDateTime = `${now.toLocaleTimeString('en-GB', { hour12: false })}, ${now.toLocaleDateString('en-GB')}`;
        document.getElementById('current-datetime').innerText = formattedDateTime;
    }

    // Function to fetch weather data
    async function updateWeather() {
        try {
            const position = await getUserLocation();
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const weather = await fetchWeather(lat, lon);
            document.getElementById('weather-info').innerText = `${weather.temperature}°C, ${weather.description}`;
        } catch (error) {
            console.error('Failed to fetch weather:', error);
            document.getElementById('weather-info').innerText = 'Unable to fetch weather.';
        }
    }

    // Helper function to get user's location
    function getUserLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
            }
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    // Helper function to fetch weather from Tomorrow.io API
    async function fetchWeather(lat, lon) {
        const url = `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&apikey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.statusText}`);
        }
        const data = await response.json();

        // Extract temperature and weather description
        const currentWeather = data.timelines.daily[0].values;
        return {
            temperature: currentWeather.temperatureAvg, // Average temperature for the day
            description: currentWeather.weatherCodeDescription, // Description of weather conditions
        };
    }

    // Initialize footer
    footer.style.display = 'block';
    document.getElementById('current-year').innerText = new Date().getFullYear();
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update time every second
    updateWeather();
}
