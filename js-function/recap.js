function price (num1 , num2){
      const total = num1 + num2 ;
      return total ;
}

const all = price(20, 10);
// console.log(all);
// ---------------short cut ------------------
function price1 (num4 , num5){
      return num4 + num5 ;
}
const store = price1(50 ,80);
// console.log(store);
// ===================================================================
function doMath (number1 , number2){
      const sum = number1 + number2 ;
      const diff = number1 - number2 ;
      const multiply = sum * diff ;
      const result = multiply / 2 ;
      return result ;
}
const outPut = doMath(2 , 8);
console.log(outPut);