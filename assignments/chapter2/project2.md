---
permalink: /chapter02/project02/
layout: page
title: Shape Hover Interaction
---

# Shape Hover Interaction

This project demonstrates shape hover interactions, where hovering over each shape triggers a message. The project uses JavaScript to detect mouse events and update the feedback dynamically.

## Full Working Example:

<div class="shape-interaction">
   <header>
      <h1>Maximum Effort, Minimal Shapes</h1>
   </header>

   <article>
      <h2>Pick a Shape</h2>
      <div id="square" class="shape"></div>
      <div id="triangle" class="shape"></div>
      <div id="circle" class="shape"></div>
   </article>
   
   <p id="feedback"></p>
</div>
<style>
/* Styles for Shape Hover Interaction Project */

.shape-interaction {
   max-width: 600px;
   margin: 20px auto;
   font-family: Arial, Helvetica, sans-serif;
   text-align: center;
}


.shape {
   display: inline-block;
   margin: 10px;
   cursor: pointer;
   transition: transform 0.3s, box-shadow 0.3s;
}

.shape:hover {
   transform: scale(1.1);
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Individual Shapes */
#square {
   width: 120px;
   height: 120px;
   background: red;
   border-radius: 8px;
}

#triangle {
   width: 0;
   height: 0;
   border-left: 70px solid transparent;
   border-right: 70px solid transparent;
   border-bottom: 120px solid yellow;
}

#circle {
   width: 120px;
   height: 120px;
   background: blue;
   border-radius: 50%;
}

#feedback {
   font-size: 1.2rem;
   color: #666;
   margin-top: 20px;
   letter-spacing: 0.05em;
   transition: color 0.3s ease;
}
</style>
<script>
// Array of phrases with placeholder for shape
const phrases = [
  "How’re ya now? That’s a mighty fine {shape} you got there.",
  "Look at this beauty of a {shape}. Get after it, bud!",
  "Well, pitter-patter, you hovered on the {shape}.",
  "Hooo, big shoots! You found the {shape}, eh?",
  "There ya go. Hoverin’ on the ol’ {shape}. Good on ya.",
  "Wow, you found the {shape}? Maximum effort!",
  "Oh, you’re getting touchy-feely with the {shape}. Classic!",
  "Nice {shape} hover! Are you trying to impress me?",
  "You're just one hover away from saving the world, starting with that {shape}.",
  "Look at you, hovering over the {shape}. Didn’t see that coming."
];

// Function to get a random phrase and replace placeholder with the shape name
function getRandomPhrase(shape) {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex].replace("{shape}", shape);
}

// Event listener to display random phrase on hover
["square", "triangle", "circle"].forEach(function(shape) {
    document.getElementById(shape).addEventListener("mouseover", function() {
        document.getElementById("feedback").innerHTML = getRandomPhrase(shape);
    });
    document.getElementById(shape).addEventListener("mouseout", function() {
        document.getElementById("feedback").innerHTML = "";
    });
});

</script>

---

## Explanation:

### HTML Structure

The HTML layout defines three shapes (square, triangle, and circle) within `div` elements. Each shape has an ID used to apply specific styles and add event listeners via JavaScript.

```html
<div class="shape-interaction">
   <header>
      <h1>Maximum Effort, Minimal Shapes</h1>
   </header>

   <article>
      <h2>Pick a Shape</h2>
      <div id="square" class="shape"></div>
      <div id="triangle" class="shape"></div>
      <div id="circle" class="shape"></div>
   </article>
   
   <p id="feedback"></p>
</div>
```

### JavaScript Code Explanation

JavaScript assigns mouseover and mouseout event listeners to each shape. When the mouse hovers over a shape, it updates the `#feedback` paragraph with a custom message.

```javascript
// Array of phrases
const phrases = [
  `How’re ya now? That’s a mighty fine ${shape} you got there.`,
  `Look at this beauty of a ${shape}. Get after it, bud!`,
  `Well, pitter-patter, you hovered on the ${shape}.`,
  `Hooo, big shoots! You found the ${shape}, eh?`,
  `There ya go. Hoverin’ on the ol’ ${shape}. Good on ya.`,
  `Wow, you found the ${shape}? Maximum effort!`,
  `Oh, you’re getting touchy-feely with the ${shape}. Classic!`,
  `Nice ${shape} hover! Are you trying to impress me?`,
  `You're just one hover away from saving the world, starting with that ${shape}.`,
  `Look at you, hovering over the ${shape}. Didn’t see that coming.`
];

// Function to get a random phrase
function getRandomPhrase(shape) {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex].replace("${shape}", shape);
}

// Event listener with random phrase
["square", "triangle", "circle"].forEach(function(shape) {
    document.getElementById(shape).addEventListener("mouseover", function() {
        document.getElementById("feedback").innerHTML = getRandomPhrase(shape);
    });
    document.getElementById(shape).addEventListener("mouseout", function() {
        document.getElementById("feedback").innerHTML = "";
    });
});
```