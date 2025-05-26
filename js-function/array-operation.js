/*Object :Write a function to give me the sum of all numbers in an array
* step-1 :declare a function
*step-2 :call check whether the function is called properly
*step-3 :set a parameter(s)
*step-4 :pas the parameter(s), check whether parameter is passed in a proper format
*step-5 :do the function tasks(step by step)
*/ 

{
      function sumNumber(numbers){
      let sum = 0 ;
      for(const number of numbers){
            console.log(number);
            sum = sum + number ;
      }
      // return sum;
}
const num = [2, 4, 4, 6, 8];
const sum = sumNumber(num);
// console.log('sum of numbers :' , sum)
}
// ---------------------------------------------
{
      function sumOfNumbers (numbers){
            let sum = 0 ;
      for(const number of numbers){
            console.log(number);
            sum = sum + number ;
      }
      return sum ;
}
const num = [ 23, 34, 54, 76, 78];
const sum = sumOfNumbers(num);
console.log('sum of numbers :', sum)
}
// ----------------------------------------------------
function sumInNumber (sonkhas){
      let sum = 0 ;
      for(const sonkha of sonkhas){
            // console.log(sonkha);
            sum = sum + sonkha ;
      }
      return sum ;
}
const son = [3 , 4 , 3, 5,];
const sum = sumInNumber(son);
// console.log('sum numbers :', sum);