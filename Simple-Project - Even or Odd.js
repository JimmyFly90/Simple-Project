// create function to show if number is even or odd
// link input number to work with the Go button
// when number and Go button pressed, show Even or Odd

function even_or_odd(number) {
    if (number % 2) {
        return ('Odd');
    } else { 
        return ('Even');   
    }
}
;

function generate() {
    let x = document.getElementById("typedNumber").value;
    document.getElementById("answer").innerHTML = (even_or_odd(x));
};

console.log(even_or_odd(0)); 
console.log(even_or_odd(2)); 
console.log(even_or_odd(3)); 
console.log(even_or_odd(-3)); 
console.log(even_or_odd("trifle"));