var a = 3;
var b = 7;
var result;

function raiseToPower(a,b)
{
  console.log(a + ' raised to the power of ' + b);
  
  if(b === 0){
   console.log("Result is 1.")
   return 1; 
  }
  
  result = a;
  
  while(b>1){
    result *= a;
    b--;
    console.log(result);
  }
  
  console.log("Result is " + result);
}


raiseToPower(a,b);