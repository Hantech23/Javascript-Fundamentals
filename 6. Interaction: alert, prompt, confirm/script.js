let name = prompt('Enter name');
alert(`Alert: The name you entered is ${name}`);

let body = document.querySelector('body');
let output = document.createElement('p');
output.textContent = `Here we have used the (querySelector, createElement, append) method to output the user input onto the page: ${name}`;
body.append(output);