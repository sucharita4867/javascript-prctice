// task 1
{
      function number (num1 , num2){
      const num = num1 + num2 ;
      return num ;
}
const result = number(3 ,5);
// console.log('return valu :' , result);
// ----------------------
function numbers ( numFirst , numSecond){
      const number = numFirst + numSecond ;
      return number ;
}
const output = numbers(20 ,30);
// console.log('final look :' , output);
}
// task 2
{function name(fullname){
      console.log('hello ,' + fullname + "!");
}
// name('suhana');
}
// task 3
{function checkOddEven (num){
      if(num % 2 === 0){
            return 'even'
      }
      else{
            return 'odd'
      }
      
}
// const result1 = checkOddEven (32);
// console.log(result1);

// const result2 = checkOddEven(90);
// console.log(result2)
// --------------------------------
function oddAndEven (numbers){
      if (numbers % 2 === 0){
            return 'even';
      }
      else{
            return 'odd';
      }
}
// const total1 = oddAndEven(90);
// console.log(total1);

// const total2 = oddAndEven(40);
// console.log(total2)
}
// task 6
// {function numbers (n) {
//       const result = [];
//       for(let i = 0 ; i < n ; i++){
//            result.push(i);
//       }
//       return result;
// }
// const loop = numbers (50);
// console.log(loop);}
// ------------------------------------------------------
// task 1 
{// function names(num){
//       console.log('"hello, ' + num)
// }
// names('<sucharita>!"')
}
// task 2
{
      function sumNumber (num1 , num2){
      const sum = num1 + num2 ;
      return sum ;
}
// const result = sumNumber (44, 12);
// console.log(result);
}
// ---------------------------------------------------------
// task 1
{
      function oddEven (number){
if(number % 2 === 0){
      return 'even';
}
else if(number % 2 === 1){
      return 'odd';
}
}
// const output = oddEven(909);
// console.log(output)
}
// task 2
{
      function Square (numbers){
      return numbers * numbers 
}
// const total = Square(61);
// console.log(total)

function Squares (SquareNumber){
      return SquareNumber * SquareNumber ;
}
// const result = Squares(9);
// console.log(result)
}
// tesk 3
{
      function bigNumbers (a, b , c){
      if(a > b || a > c && b > a || b > c && c > a || c > b){
            return b , a ,c ;
      }
}
// const bignum = bigNumbers(93, 96, 99);
// console.log('this is big number :',bignum);
}
// task 4 
{
      function leapYear (year){
      if(year % 4 === 0 && (year % 100 !== 1 || year % 400 === 0)){
            return true;
      }
      else{
            return false;
      }
}
// const allyear = leapYear(2028);
// console.log('is leap year :', allyear)
}
// ---------------------------------------
// task 1
{
      function sumNumbers (a , b){
      return a + b;
}
// const total = sumNumbers(47 , 13);
// console.log('sum numbers :', total)
}
// task 2
{
      function Squares (squ){
      return squ * squ ;
}
// const output = Squares(6);
// console.log('Square numbers :', output)
}
// task 3
{
      function nameD (i){
      console.log(i + 'hello');
      }
      // nameD('moni ')
}
// -------------------29 | 05 | 2025 ---------------------------
// task 9
{
      function oddEven (number){
      if(number % 2 === 0){
            // return 'even no'
      }
      else{
            // return 'odd no'
      }
}
// const result = oddEven(43);
// console.log(result);
}
// task 1

{
      function sum (x , y){
      const sumNumber = x + y;
      return sumNumber ;
}
// const returnNo = sum(4 , 5);
// console.log(returnNo);
}
// task 2
{
      function fullName(names){
      // console.log('hello' + names)
}
// fullName(' sani');
}
// task 3
{
      function odd_even (x){
      if(x % 2 === 0 ){
            return 'even'
      }
      else{
            return 'odd'
      }
}
// const output = odd_even(9);
// console.log(output)
}
// task 4
{
      // function biggestNo (array){
//       let bigNumber = array[0];
//       for(let i = 1 ; i < array.length ; i++){
//             if(array[i] > bigNumber){
//                   bigNumber = array[i]
//             }
//       }
//       return bigNumber;

// }
// const numberS = [2,5,8,9,14,57,79];
// const result = biggestNo(numberS);
// console.log(result)
}