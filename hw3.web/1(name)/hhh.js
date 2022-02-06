var name = prompt("Enter your name: ");
var nameup= name.charAt(0).toUpperCase();
var namedown= name.toLowerCase();  
var namelower= namedown.slice(1);
alert("Hello " + nameup+namelower);
