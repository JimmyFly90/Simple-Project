function isDivisible(n, x, y) {
    if ((n % x) || (n % y) ) {
        return ("false"); 
    }   else {
        return ("true");
    }
  };


  
  console.log(isDivisible(3, 3, 4)); 
  console.log(isDivisible(12, 3, 4)); 
  console.log(isDivisible(8, 3, 4)); 
  console.log(isDivisible(48, 3, 4)); 