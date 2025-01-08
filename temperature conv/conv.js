let celsius = document.getElementById("Celsius"); // Fixed the case issue here
let Fahrenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.oninput = function() {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));

    let k = parseFloat(celsius.value) + 273.15; // Corrected the assignment to use '+' instead of '='
    kelvin.value = parseFloat(k.toFixed(2));
}

Fahrenheit.oninput = function() {
    let c = ((parseFloat(Fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2)); // Corrected variable reference to 'c'

    let k = ((parseFloat(Fahrenheit.value) - 32) * 5) / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}

kelvin.oninput = function() {
    let f = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));

    let c = parseFloat(kelvin.value) - 273.15;
    celsius.value = parseFloat(c.toFixed(2));
}
