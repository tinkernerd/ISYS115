---
permalink: /chapter03/project01/
layout: page
title: Lunch Order Cost Calculator
---
This project demonstrates a simple lunch ordering system where users select items, and the total cost updates in real-time based on their choices.
### Full Working Example:
<div class="order-example"> 
    <article> 
        <h2>Lunch selections</h2> 
        <form> 
            <input type="checkbox" class="menuItem" id="item1" value="11.95" /> 
            <label for="item1">Fried chicken ($11.95)</label> 
            <input type="checkbox" class="menuItem" id="item2" value="13.95" /> 
            <label for="item2">Fried halibut ($13.95)</label> 
            <input type="checkbox" class="menuItem" id="item3" value="10.95" /> 
            <label for="item3">Hamburger ($10.95)</label> 
            <input type="checkbox" class="menuItem" id="item4" value="17.95" /> 
            <label for="item4">Grilled salmon ($17.95)</label> 
            <input type="checkbox" class="menuItem" id="item5" value="8.95" /> 
            <label for="item5">Side salad ($8.95)</label> 
        </form> 
        <aside> 
            Total Order Cost: <span id="billTotal">$0</span> 
        </aside> 
    </article> 
    <script> 
        var menuItems = document.getElementsByClassName("menuItem"); 
        for (var i = 0; i < menuItems.length; i++) { 
            menuItems[i].addEventListener("click", calcTotal, false); 
        } 
        function calcTotal() { 
            var orderTotal = 0; 
            for (var i = 0; i < menuItems.length; i++) { 
                if (menuItems[i].checked) { 
                    orderTotal += Number(menuItems[i].value); 
                } 
            } 
            document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal); 
        } 
        function formatCurrency(value) { 
            return "$" + value.toFixed(2); 
        } 
    </script> 
    <style> 
       /* Order Example Specific Styles */
        .order-example {
            max-width: 800px;
            padding: 20px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .order-example h2 {
            font-size: 1.5em;
            font-weight: 400;
            margin-bottom: 15px;
            color: #333;
        }
        .order-example form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .order-example input[type="checkbox"] {
            margin-right: 10px;
            transform: scale(1.2);
            accent-color: #2a7ae2;
        }
        .order-example label {
            font-size: 1em;
            font-weight: 300;
            color: #333;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .order-example aside {
            margin-top: 20px;
            font-size: 1.2em;
            color: #08A;
        }
        .order-example .menuItem:checked + label {
            color: #2a7ae2;
        }
    </style> 
</div>
## Explanation:

### HTML Structure

The HTML structure consists of checkboxes representing menu items, each with a price value. The total order cost is displayed in real time based on selections.

```html
<!DOCTYPE html>
<html>
<head>
    <!--
        JavaScript 7th Edition
        Chapter 3 - Hands-on Project 3-1
        Author: Nick Stull
        Date: 09.24.2024
        Github Repo: tinkernerd/ISYS115
        Filename: project03-01.html
    -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Lunch Order Cost Calculator</title>
    <link rel="stylesheet" href="styles.css">
    <script src="project03-01.js" defer></script>
</head>

<body>
    <header>
        <h1>Lunch Order Cost Calculator</h1>
    </header>
    <article>
        <h2>Lunch selections</h2>
        <form>
            <input type="checkbox" class="menuItem" id="item1" value="11.95" />
            <label for="item1">Fried chicken ($11.95)</label>
            <input type="checkbox" class="menuItem" id="item2" value="13.95" />
            <label for="item2">Fried halibut ($13.95)</label>
            <input type="checkbox" class="menuItem" id="item3" value="10.95" />
            <label for="item3">Hamburger ($10.95)</label>
            <input type="checkbox" class="menuItem" id="item4" value="17.95" />
            <label for="item4">Grilled salmon ($17.95)</label>
            <input type="checkbox" class="menuItem" id="item5" value="8.95" />
            <label for="item5">Side salad ($8.95)</label>
        </form>
        <aside>
            Total Order Cost: <span id="billTotal">$0</span>
        </aside>
    </article>
</body>
</html>
```

### JavaScript Code Explanation

The JavaScript code calculates the total cost based on selected menu items. Each checkbox is linked to the `calcTotal` function through an event listener. The total is formatted as currency and displayed in real time.

### JavaScript Functions

The JavaScript functions handle item selection and total cost calculation:

```javascript
/*    JavaScript 7th Edition
        Chapter 3
        Project 03-01

        Application to calculate total order cost
        Author: Nick Stull
        Date:   2024.09.24
        
        Github Repo: tinkernerd/ISYS115 

        Filename: project03-01.js
*/

// Get all elements with the class "menuItem"
var menuItems = document.getElementsByClassName("menuItem");

// Add an event listener to each menu item to call calcTotal() when clicked
for (var i = 0; i < menuItems.length; i++) {
     menuItems[i].addEventListener("click", calcTotal, false);
}

// Function to calculate the total order cost
function calcTotal() {
     var orderTotal = 0;
     for (var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].checked) {
                orderTotal += Number(menuItems[i].value);
          }
     }
     document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}
     
// Function to format the total as currency
function formatCurrency(value) {
     return "$" + value.toFixed(2);
}
```

