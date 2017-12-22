# Introduction
This is a light-weight search animation plugin that is insipired by a .GIF image that I saw long time ago.

# Demo
[Click Here](https://xxxzeus.github.io/zSearchAnim/example.html)

# Importing in document
Paste this in the <head> section of your HTML document
```html
<link rel="stylesheet" type="text/css" href="/zSearchAnim.css">
<script src='./zSearchAnim.js'></script>
```
Change the path above according to your folder structure.

# Usage
Initializing the element with the magifying glass:
```javascript
var mySearchAnim = new zSearchAnim("targetID", {
    //optional, default values are mentioned below along with options
    dimension: '250px', // diameter of the circle
    color: '#000', // color of circle and arms
    circleWidth: '5px', // circle border width
    armWidth: '5%' // magnifying glass and clock's arm's width, the percent width is relative to the dimension option.
}
```
Starting the animation:
```javascript
mySearchAnim.searchStart();
```

# License 
This project is licensed under the terms of the [MIT license](https://en.wikipedia.org/wiki/MIT_License)