# ISYS 115

## Get Started
Either download and run or view the link at isys115.nicholasstull.com - currently api functions are not working until I learn about secrets. 
What can I say ¯\\_(ツ)_//¯


## Local Dev

1. ```git clone https://github.com/tinkernerd/isys115.git```
2. ```cd isys115```
3. ```npm install```
4. Replace API Keys if you so please ¯\\_(ツ)_//¯
5. run ```npm run watch``` to view the with changes
    - Run ```npm run go``` to build and serve the page.

## Replace API Keys
1. Live Metar 
    1. Go to https://account.avwx.rest/getting-started
    2. select register in the bottom left - it will walk you through on how to make an account.
    3. Select New Token
    4. return back and go to ```/src/views/projects/live-metar.html```
    5. enter you api key in ```const apiKey = "Replace with your actual API key";``` - Line 36
2. Weather - Footer
    1. go to https://www.tomorrow.io/weather-api/
    2. Select the blue "Sign up for free" button
    3. sign in/sign up with an account
    4. Once signed in your api key is on the top of the page. 
    5. Return and go to ```/src/assets/js/footer.js```
    6. Replace API Key in line 3. 

## File Structure

/src - source files
- assets/
    - js/ - javascript files
    - img/ - images
    - scss/ - gets converted into /dist/assets/css
- views
    - components/
    - notes/
    - projects/
    - 404.html
    - about.html
    - contact.html
    - index.html
