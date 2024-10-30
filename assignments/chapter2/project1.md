---
permalink: /chapter02/project01/
layout: page
title: Temp Conversion
---

# Celsius to Fahrenheit Converter

This project demonstrates a temperature converter that switches between Celsius and Fahrenheit. The header color updates based on the temperature range, making it visually engaging for specific temperature ranges.

## Full Working Example:

<div class="temp-converter">
   <article>
      <h2>Because math is hard, duh.</h2>
      <form>
         <div>
            <h3>Temp in F</h3>
            <input type="number" id="fValue" value="32" />
         </div>
         <div id="arrow">&harr;</div>
         <div>
            <h3>Temp in C</h3>
            <input type="number" id="cValue" value="0" />            
         </div>
      </form>
      <footer>
         Enter a Fahrenheit or Celsius temperature in either input box and press Tab to convert.
         <br> Try going below 30°F / 0°C or above 80°F / 26.7°C to see the color change.
      </footer>
   </article>
</div>
<style>
/* Temperature Converter Styles */

.temp-converter {
   max-width: 600px;
   background: #f9f9f9;
   margin: 20px auto;
   font-family: Arial, Helvetica, sans-serif;
   border: 2px solid #ccc;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   padding: 20px;
}

.temp-converter header {
   background: #ffc340;
   color: #333;
   font-size: 2rem;
   text-align: center;
   padding: 1em;
   border-radius: 8px 8px 0 0;
   transition: background-color 0.3s ease;
}

.temp-converter article {
   text-align: center;
   padding: 20px;
}

.temp-converter h2 {
   margin: 0.5em 0 1.5em;
   font-size: 1.4rem;
   color: #555;
   letter-spacing: 0.05em;
}

.temp-converter form {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1em;
   margin-bottom: 1.5em;
}

.temp-converter div {
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.temp-converter h3 {
   font-size: 1.1rem;
   font-weight: normal;
   color: #444;
   margin-bottom: 0.5em;
}   

.temp-converter input {
   width: 120px;
   padding: 10px;
   font-size: 1.1rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   text-align: right;
   transition: box-shadow 0.3s ease;
}

.temp-converter input:focus {
   outline: none;
   box-shadow: 0 0 6px rgba(0, 153, 255, 0.5);
}

.temp-converter #arrow {
   font-size: 2.5rem;
   color: #888;
}

.temp-converter footer {
   margin-top: 1em;
   font-size: 0.9rem;
   color: #666;
   line-height: 1.5;
}

/* Temperature-based color classes with transitions */
.temp-converter .blue {
   background: #007bff;
   color: #fff;
}

.temp-converter .yellow {
   background: #ffc340;
   color: #333;
}

.temp-converter .red {
   background: #ff6347;
   color: #fff;
}

.temp-converter header.blue,
.temp-converter header.yellow,
.temp-converter header.red {
   transition: background-color 0.5s ease, color 0.5s ease;
}

</style>
<script>
   // Convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
  return parseFloat(((degree - 32) / 1.8).toFixed(2));
}

// Convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
  return parseFloat((degree * 1.8 + 32).toFixed(2));
}

// Event listener for Celsius input
document.getElementById("cValue").onchange = function () {
  const cDegree = parseFloat(document.getElementById("cValue").value);
  document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
  updateHeaderColor();
};

// Event listener for Fahrenheit input
document.getElementById("fValue").onchange = function () {
  const fDegree = parseFloat(document.getElementById("fValue").value);
  document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
  updateHeaderColor();
};

// Color update function
function updateHeaderColor() {
  const fValue = parseFloat(document.getElementById("fValue").value);
  const header = document.querySelector("header");
  
  if (fValue < 32) {
    header.classList.add("blue");
    header.classList.remove("yellow", "red");
  } else if (fValue > 80) {
    header.classList.add("red");
    header.classList.remove("yellow", "blue");
  } else {
    header.classList.add("yellow");
    header.classList.remove("blue", "red");
  }
}
</script>

## Explanation:

### HTML Structure

The HTML layout defines the temperature converter, with `input` fields for Celsius and Fahrenheit values. JavaScript handles the conversion and updates the display dynamically.

```html
<!-- HTML structure for Temperature Converter -->
<div class="temp-converter">
   <article>
      <h2>Because math is hard, duh.</h2>
      <form>
         <div>
            <h3>Temp in F</h3>
            <input type="number" id="fValue" value="32" />
         </div>
         <div id="arrow">&harr;</div>
         <div>
            <h3>Temp in C</h3>
            <input type="number" id="cValue" value="0" />            
         </div>
      </form>
      <footer>
         Enter a Fahrenheit or Celsius temperature in either input box and press Tab to convert.
      </footer>
   </article>
</div>
```

### JavaScript Code Explanation

This JavaScript handles temperature conversion and header color updates based on the temperature range:

```javascript
// Convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
  return parseFloat(((degree - 32) / 1.8).toFixed(2));
}

// Convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
  return parseFloat((degree * 1.8 + 32).toFixed(2));
}

// Event listener for Celsius input
document.getElementById("cValue").onchange = function () {
  const cDegree = parseFloat(document.getElementById("cValue").value);
  document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
  updateHeaderColor();
};

// Event listener for Fahrenheit input
document.getElementById("fValue").onchange = function () {
  const fDegree = parseFloat(document.getElementById("fValue").value);
  document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
  updateHeaderColor();
};

// Color update function
function updateHeaderColor() {
  const fValue = parseFloat(document.getElementById("fValue").value);
  const header = document.querySelector("header");
  
  if (fValue < 32) {
    header.classList.add("blue");
    header.classList.remove("yellow", "red");
  } else if (fValue > 80) {
    header.classList.add("red");
    header.classList.remove("yellow", "blue");
  } else {
    header.classList.add("yellow");
    header.classList.remove("blue", "red");
  }
}
```

