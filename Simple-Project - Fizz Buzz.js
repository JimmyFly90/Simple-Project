// User can enter a number and press a Go button 
// then the website shows 1 to the number that was entered 
// along with the correct fizz or buzz words

function generate() {
    let x = document.getElementById("typedNumber").value;
    document.getElementById("answer").innerHTML = (FizzBuzz(x))
    ;
};

function FizzBuzz(number) {
    for (let i = 0; i < number; i++) {
    if (number % 15 == 0) {
        return ("FizzBuzz")
    }
    else if (number % 3 == 0) {
        return ("Fizz")
    } else if (number % 5 == 0) {
        return ("Buzz")
    }
    else {
        return(number);
    }
}
}

