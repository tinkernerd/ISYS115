/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nick Stull
      Date:   09.14.2024
      
      Github Repo: tinkernerd/ISYS115

      Filename: project02-01.js
 */

// Function to convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
    return (degree - 32) / 1.8;
}

// Function to convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
    return (degree * 1.8) + 32;
}

// Adding onchange event handler to the element with id "cValue"
document.getElementById('cValue').onchange = function() {
    // Get the value of the element with id "cValue"
    var cDegree = parseFloat(document.getElementById('cValue').value);
    
    // Set the value of the element with id "fValue" to the converted temperature
    document.getElementById('fValue').value = CelsiusToFahrenheit(cDegree);
};

// Adding onchange event handler to the element with id "fValue"
document.getElementById('fValue').onchange = function() {
    // Get the value of the element with id "fValue"
    var fDegree = parseFloat(document.getElementById('fValue').value);
    
    // Set the value of the element with id "cValue" to the converted temperature
    document.getElementById('cValue').value = FahrenheitToCelsius(fDegree);
};