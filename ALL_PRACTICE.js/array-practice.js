// task 1 (incomplete)
{
//       // minimum & Maximum 
      // let arr  = [6, 9, 45, 24, 76, 14, 89];
      // let min = arr[0];
      // let max = arr[0];
      // for (let i = 1 ; i < arr.length ; i++){
      //       if(i < min){
      //             console.log('min :', i)
      //       }
      //       else if(i > max){
      //             console.log('max :', i)
      //       }
      // }

}
// task 2
// {
//       // reverse task
//       let num = [1, 2, 3];
//       console.log(num)
//       num.reverse()
//       console.log(num)
// }


// {
//       let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//       for(let i = 1 ; i < array.length ; i++){
//             console.log(i)
//       }
// }
// -------------------------- 29 |05 | 2025 --------------------------------
// task 1
{let numbers = [1,2,5,6,7,3,4,9,8,10];
// console.log(numbers);
}
// task 2
{
      let numbers = [55 ,3, 9 ,10,20];
let sum = 0 ;
for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log('sum numbers :', sum);
// ===================================
let number = [30, 45, 22, 53,12];
let sumNum = 0 ;
for(let o = 0 ; o < number.length ; o++){
      sum += number[o];
}
// console.log('sum numbers :' , sum);
}
// --------------------------- 30 | 05 | 2025 ----------------------------
// task 1
{
      let numbers = [17,15,29,65,27,48];
let sum = 0 ;
for(let sumS of numbers){
      sum += sumS;
}
// console.log(sum);
}
// task 2
// let evenNos = [2,4,3,7,9,8,12,43,45,66,46,14,34,43];
// const result = maxInArray(evenNos);
// console.log('big no :', result)
// task 3
{
      let numbers = [17,15,29,65,27,48];
const revNumbers = [];
for(const revs of numbers){
      // console.log(revs);
      revNumbers.unshift(revs)
}
// console.log(revNumbers);
const revf = numbers.reverse();
// console.log(revf)
}
// task 4
{
      let evenNos = [2,4,3,7,9,8,12,43,45,66,46,14,34,43];
for (const evenNumber of evenNos){
      if(evenNumber % 2 === 0){
            // console.log('even', evenNumber)
      }

}
}
// task 5
{
      let evenNos = [2,4,3,7,9,8,12,43,45,66,46,14,34,43];
let number = 34 ;
if(evenNos.includes(number)){
      // console.log('true');
}else{
      // console.log('false');
}

// console.log(evenNos.includes(number));
}
// task 6
{
      let evenNos = [2,4,3,7,9,8,12,43,45,66,46,14,34,43];
// console.log(evenNos.length);
}
// ----------------------------02 | 06 | 2025 ------------------------------------
// task 1
{
      let numbers = [5 , 10, 15, 20, 25, 30, 35, 40];
let sum = 0 ;
for(let i = 0 ; i < numbers.length ; i++){
      sum += numbers[i];
}
// console.log('sum numbers :', sum)
}
// task 2
{
      let fruits = ["apple", "banana", "mango"];
fruits.push('orange');
// console.log(fruits);
}
// task 3
{
      let data = [1, 3, 5, 7, 9 ,20 ,59, 69];
const newArray = [] ;
for(let o = 0 ; o < data.length ; o++){
      newArray.push(data[o] * 2);
}
// console.log('2 gun number :', newArray)
}


// task 4(incomplete)
{
      let numbers = [2, 4, 6, 8, 10];
if(numbers.includes(6)){
      // console.log('6 is found :', numbers);
}
else{
      console.log('6 id not found :', numbers)
}
}
// task 5
{
      let mixed = [1, 2, 3, 4, 5, 6, 9,8];
let even = [];
for(let i = 0 ; i < mixed.length ; i++){
      if(mixed[i] % 2 === 0){
            even.push(mixed[i]);
      }
}
// console.log('even no :', even)
}
// --------------- 05 | 06 | 2025 -------------------
// task 1
{
      let fruits = ["apple", "banana", "mango"];
for(let i = 0; i < fruits.length ; i++){
      // console.log(fruits[i]);
}
}
// task 2
{
      let numbers = [5, 8, 2, 17, 3] ;
let k = numbers[0];
// console.log('before loop :', k);
for(let o = 1 ;o < numbers.length ; o++){
      // console.log(numbers[o]);
      if(numbers[o] > k){
            k = numbers[o]
      }
}
// console.log('after loop :', k);
}
// ------------------- 07 | 06 | 2025 ---------------------
// task 1
{
      let numbers = [2, 5, 8, 11, 14, 17, 23, 28];
let evenNo = numbers[0];
for (let k = 0 ; k < numbers.length ; k++){
      // console.log(numbers[k]);
      if(numbers[k] % 2 === 0){
            // console.log('even no :', numbers[k]);
      }
}
}
// task 2
{
      let fruits = ["apple", "banana", "cherry", "mango"];
for(let i = 0 ; i < fruits.length ; i++){
      // console.log(fruits[i])
}
}
// task 3
{
      let marks = [85, 42, 77, 90, 61, 20, 50];
      for(let i = 0 ; i < marks.length ; i++){
      // console.log(marks[i]);
      if(marks[i] >= 50){
            // console.log('passed')
      }
      else{
            // console.log('failed')
      }
}
}
// task 4
{
      let colors = ["red", "green", "blue", "yellow"];
// console.log(colors)
for(let i = 0 ; i < colors.length ; i++){
      // console.log(colors[i])
}
}
// task 5
{
      let numbers = [10, 25, 30, 45, 60, 89 ,56 ,40];
let sum = 0;
for(let i = 0 ; i < numbers.length ; i++){
      // console.log(numbers[i])
      sum = sum + numbers[i];
}
// console.log(sum)
}
// -------------------------- 08 |06 | 2025 ------------------------
// task 1
{
      let names = ["Rina", "Mina", "Tina", "Sina"];
      for(const name of names){
            // console.log(name,'has',name.length,'latter')
      }
}
// task 2
{
      let prices = [200, 300, 150, 500, 100,50];
      for(const price of prices){
            // console.log(price);
            if(price < 200){
                  // console.log(price)
            }
      }
}
// --------------mixed question Array or loop or if else-------------------
// task 1
{
      let marks = [90, 45, 77, 30, 60, 26];
for(let k = 0 ; k < marks.length ; k++){
      // console.log(marks[k])
      if(marks[k] < 33){
            // console.log('fail')
      }else{
            // console.log('passed')
      }
}
}
// task 2
{
      let ages = [5, 15, 25,18, 65, 80];
for(let i = 0 ; i < ages.length ; i++){
      // console.log(ages[i]);
      if(ages[i] < 18){
            // console.log('child')
      }else if(ages[i] >= 18 && ages[i] < 60){
            // console.log('adult')
      }else{
            // console.log('senior')
      }
}
}
// task 3
{
      let scores = [75, 40, 95, 22, 88];
for(let o = 0 ; o < scores.length ; o++){
      // console.log(scores[o]);
      if(scores[o] < 50){
            // console.log('fail')
      }else{
            // console.log('passed')
      }
}
}
// task 4
{
//       let numbers = [5, 12, 18, 25, 40];
// for(let i = 0 ; i < numbers.length ; i++){
//       console.log(numbers[i]);
//       if(numbers[i] % 2 === 0){
//             console.log("Even number: X")
//       }else{
//             console.log("Odd number: X");
//       }
// }
}
// ------------------- 11 | 06 | 2025 --------------------
// task 1
{
      // const find = 'Rina';
// let users = ["Tina", "Rina", "Mina", "Bina"];
//       for(let i = 0 ; i < users.length; i++){
//             // console.log(users[i])
//             if(users[i] === find){
//                   console.log(find)
//             }
//             // else{
//             //       console.log('Not Found Rina')
//             // }
// }
}
// task 2
// -------------------------------------
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let rev = fruits.split().reverse().join('');
// console.log(rev);
// -----------------------------
// task 3
let marks = [85, 42, 30, 66, 90];
for(let i = 0 ; i < marks.length ; i++){
      console.log(marks[i])
      if(marks[i] >= 40){
            console.log('pass')
      }else{
            console.log('fail')
      }
}