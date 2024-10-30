    document.addEventListener("DOMContentLoaded", function() {
      const excuseTextElement = document.querySelector(".excuse-text");

      fetch("https://meyerweb.com/feeds/excuse/rss20.xml")
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, "application/xml");
          const excuse = xml.querySelector("item > description").textContent;
          excuseTextElement.textContent = excuse;
        })
        .catch(error => {
          excuseTextElement.textContent = "Unable to fetch excuse.";
        });
    });