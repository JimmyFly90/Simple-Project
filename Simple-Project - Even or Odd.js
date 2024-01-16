function even_or_odd(number) {
    if (number % 2) {
        return ('Odd');
    } else {
        return ('Even');
    }
}
;

console.log(even_or_odd(0)); 
console.log(even_or_odd(2)); 
console.log(even_or_odd(3)); 
console.log(even_or_odd(-3)); 
console.log(even_or_odd(24));