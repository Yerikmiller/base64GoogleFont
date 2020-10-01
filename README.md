# EMBED BASE64 GOOGLE FONT
## USAGE
``` 
@link the js file and start using it
<script src="https://cdn.jsdelivr.net/gh/Yerikmiller/base64GoogleFont@master/core.js"></script>
```
Instance the class base64GoogleFont and pass two parameters -> (url, readystate)
#### new base64GoogleFont(url, readystate)
### URL PARAMETER
``` 
This is the parameter where you will place a google font url for example
https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900
```
### READY STATE
Define a function to execute when the font is loaded.
### EXAMPLE CODE
``` 
new base64GoogleFont("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900", function(cssText){
  console.log(cssText)
})
```
### EXAMPLE RESPONSE
``` 
@font-face {
  font-family: 'Nanum Brush Script';
  font-style: normal;
  font-weight: 400;
  src: local('Nanum Brush Script'), local('NanumBrush'), url(data:font/woff2;base64,${base64Data}...);
}
```
NOTE: ready state will return the base64 css text


Inpired in: https://amio.github.io/embedded-google-fonts/
License MIT
