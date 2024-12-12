# ISYS 115

Welcome to the **ISYS 115** project! This repository contains the source code for my course project, which includes multiple interactive features and showcases modern web development techniques. Dive into the code, contribute, or simply explore the live site to see it in action.

---

## 🚀 Get Started

You can either download and run the project locally or view the live site. Note that API functionalities are currently under construction (I'm learning how to handle secrets properly 😅). 

[**View the Live Site on Vercel**](https://isys-115.vercel.app/)

- Live site: [isys115.nicholasstull.com](https://isys115.nicholasstull.com) *(API functions may not be fully operational)*  
What can I say, ¯\\\_(ツ)_/¯ I'm learning!

---

## 💻 Local Development

Follow these steps to set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/tinkernerd/isys115.git
    ```
2. Navigate to the project directory:
    ```bash
    cd isys115
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Optional: Replace API keys to enable external services (instructions below).  
   What can I say, ¯\\\_(ツ)_/¯ secrets are important.
5. Start the development server with live changes:
    ```bash
    npm run watch
    ```
6. To build and serve the project:
    ```bash
    npm run go
    ```

---

## 🔑 Replacing API Keys

Certain features require API keys. Follow these steps to set them up:

### 1. Live METAR Data
This feature fetches live aviation weather data.

1. Visit [AVWX REST API Getting Started](https://account.avwx.rest/getting-started).
2. Click **Register** (bottom left) and follow the steps to create an account.
3. Generate a new token under **New Token**.
4. Replace the placeholder API key in the file:
   - Path: `/src/views/projects/live-metar.html`
   - Line 36: 
     ```javascript
     const apiKey = "Replace with your actual API key";
     ```

### 2. Weather API (Footer)
This feature provides real-time weather data in the site's footer.

1. Visit [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/).
2. Click **Sign up for free** and create an account.
3. Once logged in, your API key is displayed at the top of the dashboard.
4. Replace the placeholder API key in the file:
   - Path: `/src/assets/js/footer.js`
   - Line 3:
     ```javascript
     const apiKey = "Replace with your actual API key";
     ```

---

## 🗂️ File Structure

The project is organized as follows:

```
/src/                # Source files
├── assets/          # Static assets
│   ├── js/          # JavaScript files
│   ├── img/         # Images
│   └── scss/        # SCSS stylesheets (compiled to /dist/assets/css)
├── views/           # HTML views
│   ├── components/  # Reusable components
│   ├── notes/       # Notes for chapters
│   ├── projects/    # Project-specific HTML files
│   ├── 404.html     # Custom 404 page
│   ├── about.html   # About page
│   ├── contact.html # Contact page
│   └── index.html   # Homepage
```

---

## 🌟 Features

- **Interactive Projects**: Explore interactive projects in `/views/projects/`.
- **Modern SCSS Styling**: Easily customizable styles using SCSS, compiled into clean CSS.
- **Dynamic APIs**: Includes integrations for real-time data (METAR and Weather).
- **Organized File Structure**: Clear and logical separation of assets, views, and components.

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests for bug fixes, new features, or improvements.

---

## 📜 License

This project is licensed under [MIT License](LICENSE). Feel free to use, modify, and distribute it.

---

## 🛠️ To-Do List

- [ ] Integrate API secrets securely.
- [ ] Add more interactivity and features to the live site.
- [ ] Optimize SCSS and JavaScript for better performance.
- [ ] Improve documentation for contributors.

---

If you have any questions or suggestions, feel free to reach out or open an issue.  
Thanks for checking out my project! 😄 