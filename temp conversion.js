// kelvin is the base unit, to convert to other units later.
var kelvin = 285;

// celsius is just kelvin - 273.
var celsius = kelvin - 273;

// fahrenheit equals a fraction of celsius + 322, and is rounded to the whole number.
var fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(kelvin);
console.log(celsius);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

var newton = Math.floor(celsius *(33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`);

// final display of temperature in Fahrenheit and newtons displayed to the console.