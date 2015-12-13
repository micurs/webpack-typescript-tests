// Basic example to bundle withits dependencies in ONE file.
require("./style.css");
var unique = require("./content.js")

var data = [1, 2, 24, 309, 405, 54, 5, 5, 6];

var out = unique(data)

console.log(out);

document.getElementById('out').innerHTML = '<h2>Unique:'+out+'</h2>';
