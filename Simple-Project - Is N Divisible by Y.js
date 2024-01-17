function isDivisible(n, x, y) {
    if ((n % x) || (n % y) ) {
        return ("false"); 
    }   else {
        return ("true");
    }
  };

  function generate() {
    let x = document.getElementById("firstNumber").value;
    let y = document.getElementById("secondNumber").value;
    document.getElementById("answer").innerHTML = (isDivisible(x, y));
};
  
  console.log(isDivisible(3, 3, 4)); 
  console.log(isDivisible(12, 3, 4)); 
  console.log(isDivisible(8, 3, 4)); 
  console.log(isDivisible(48, 3, 4)); 