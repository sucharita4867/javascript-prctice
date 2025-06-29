// task 1
{
      let age = 13 ;
if(age > 18){
      // console.log('adult');
}else{
      // console.log('non adult')
}
}
// task 2
{
      let sum = 0;
for(let i = 0 ;i <= 10 ;i++){
      // console.log(i)
      sum += i;
}
// console.log('total sum number :', sum)
}
// task 3
{
      let fruits = ["apple", "banana"];
const fruit = fruits.push('mango');
// console.log(fruits);
// console.log(fruit);
}
// task 4
{
      let colors = ["red", "green", "blue"];
const color = colors.includes('green');
// console.log(color) 

if(color === true){
      // console.log('Green Found!')
}else{
      // console.log('Green is Not Found')
}
}
// task 5
{
      let i = 5 ;
while (i > 0){
      // console.log(i);
      i-- ;
}
}
// task 6
{
      let items = ["pen", "pencil", "eraser", "scale"];
const item = items.splice(2,1);
// console.log(item)
// console.log(items)
}
// task 7
{
      let marks = [80, 45, 60, 30];
for(let i = 0 ; i < marks.length ; i++){
      // console.log(marks[i])
      if(33 > marks[i]){
            // console.log('Fail Found');
      }else{
            // console.log('Passed found');
      }
}
}
// task 8
{
      let letters = ["A", "B", "C", "D", "E"];
const letter = letters.splice(1,3);
// console.log(letter.join('-'))
}
// -------------- 16 | 06 | 2025 ---------------
// task 1
{
      let temp = 38;
if(temp > 37){
      // console.log('You may have fever');
}else{
      // console.log('Normal')
}
}
// task 2
{
      let subjects = ["Math", "English", "Biology"];
const subject = subjects.includes();
// console.log(subject)
if(subject === true){
      // console.log('Found Physics')
}else{
      // console.log('Not Found Physics')
}
}
// task 3
{
      for(let i = 0 ; i <= 20 ; i++){
      // console.log(i)
      if(i % 2 === 0){
            // console.log('even no :' ,i)
      }
}
}
// task 4
{
      let tasks = ["Wake up", "Brush"];
const task = tasks.push('Exercise');
// console.log(tasks.pop( ));
// console.log(tasks)
}
// task 5
{
      let numbers = [12, 5, 7, 20];
for(let i = 0 ; i < numbers.length ; i++){
      if(numbers[i] > 10){
            // console.log('Big Number :' , numbers[i])
      }else{
            // console.log('Small Number :', numbers[i])
      }
}
}
// task 6
{
      let i = 0;
while(i <= 10){
      // console.log(i);
      i++ ;
}
}
// task 7
{
      let words = ["We", "are", "learning", "JavaScript"];
const word = words.slice(1,3);
// console.log(word.join(' '));
}
// task 8
{
      let cities = ["Kolkata", "Delhi", "Mumbai", "Chennai"];
const citiy = cities.splice(1,1)
// console.log(cities)
}
// task 9
{
      let marks = 82;
if(marks > 80){
      // console.log('A+');
}else if(marks > 60 && marks < 79){
      // console.log('A');
}else if(marks > 40 && marks < 59){
      // console.log('B');
}else{
      // console.log('Fail');
}
}
// task 10
{
      let names = ["Rita", "Sita", "Gita"];
for(let i = 0 ; i < names.length ; i++){
      // console.log(names[i] ,'is present');
}
}
// ---------- 17 | 06 | 2025 -----------
// task 1
{
      let age = 39;
let isStudent = true;
if(age > 18 && isStudent === true){
      // console.log('Eligible for student discount')
}else{
      // console.log('Not eligible')
}
}
// task 2
{
      let numbers = [5, 8, 12, 15, 22, 30 , 26 , 16 ,19 ,13];
// console.log(numbers);
let newArray = [];
for(let i = 0 ; i < numbers.length ; i++){
      // console.log(numbers[i])
      if(numbers[i] > 10 && numbers[i] < 20){
            newArray.push(numbers[i]);
      }
}
// console.log(newArray)
}
// task 3
{
      let word = "banana";
let wordRev = [];
for(let i = 0 ; i < word.length ; i++){
      // console.log(word[i]);
      wordRev.unshift(word[i]);
}
// console.log(wordRev.join(''));
}
// task 4{CHATGPT}
{
      {
      let sentence = "Programming is fun";
      let count = 0 ;
      for(let i = 0 ; i < sentence.length ; i++){
      let letter = sentence[i].toLowerCase();
      // console.log(letter)
      if(letter > 'a' && letter < 'z' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u'){
            count++ ;
      }
}
// console.log(count)
}
}
// task 5
{
      let sum = 0 ;
for(let i = 1 ; i <= 50 ; i++){
      // console.log(i)
      if(i % 2 === 1){
            // console.log('odd no :', i);
            sum += i
      }
}
// console.log('sum no :', sum);
}
// task 6
{
      let num = 6;
if(num % 3 === 0 && num % 5 === 0){
      // console.log('FizzBuzz')
}else if(num % 3 === 0){
      // console.log('Fizz')
}else if(num % 5 === 0){
      // console.log('Buzz')
}
}
// task 7 {INCOMPLETE}
{
      let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
let sum = 0 ;
sum += matrix ;

// console.log(matrix)
// console.log('sum no :', sum)
let sumNumber = sum ;
sum += sumNumber;
// console.log('total no :', sumNumber)
}
// task 8
{
      let scores = [12, 55, 32, 75, 64 ,88];
let bigNo = scores[0] ;
for(let i = 0 ; i < scores.length ; i++){
      if(bigNo < scores[i]){
            bigNo = scores[i];
      }
}
// console.log('begest no :' , bigNo)
}
// task 9
{
      let inventory = ["pen", "pencil", "eraser", "scale"];
const cake = inventory.includes('eraser');
// console.log(cake)
if(cake === true){
      // console.log('Item Available');
}else{
      // console.log('Not in stock')
}
}
// task 10
{
      let numbers = [2, 4, 6, 2, 4, 8, 10];
let num = numbers.slice(2,5)
// console.log(num)
// console.log(numbers)
}
// -------------------- 18 | 06 | 2025 ---------------------
// task 1
{
      let numbers = [12 ,34 ,32 ,45, 67, 89, 68, 99, 56];
for(let i = 0 ; i < numbers.length ; i++){
      // console.log(numbers[i])
      if(numbers[i] % 2 === 0){
            // console.log('even no :', numbers[i])
      }
}
}
// task 2
{
      let sentence = "Hello JavaScript Learners" ;
// console.log(sentence.toLowerCase)
for(let i = 0 ; i < sentence.length ; i++){
      let total = sentence[i].toLowerCase();
      if(total === 'a' || total === 'e' || total === 'i'|| total === 'o' || total === 'u'){
            // console.log('vowel letter :', total)
      }
}
}
// -------------- 19 | 06 |2025 --------------
// task 4 (vawle and consonent chake)
{
      // console.clear();
let sentence = "Learning JavaScript is really fun and powerful!";
let vowelCount = 0 ;
let consonantCount = 0 ;
for(let i = 0 ; i < sentence.length ; i++){
      let letter = sentence[i].toLowerCase();
      if(letter >= 'a' && letter <= 'z'){
            if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
                  vowelCount++ ;
                  // console.log('vowel no :', letter)
            }else{
                  consonantCount ++ ;
                  // console.log('con no :', letter)
            }
      }
}
// console.log('vowel latter :', vowelCount);
// console.log('consonant latter :',consonantCount);
}
// task 1
{
      let numbers = [2, 5, 8, 11, 14, 17, 20];
for(let i = 0 ; i < numbers.length ; i++){
      if(numbers[i] > 10){
            // console.log('big no :', numbers[i])
      }else{
            // console.log('no :', numbers[i])
      }
}
}
// task 2
{
      let numbers = [3, 6, 9, 12, 15, 18];
let sum = 0 ;
for(let i = 0 ; i < numbers.length ;i++){
      if(numbers[i] % 3 === 0){
            // console.log(numbers[i])
            sum += numbers[i];
      }
}
// console.log(sum)
}
// task 3
{
      let names = ["Rahim", "Karim", "Anik", "Rita", "Asha"];
// console.log(names)
for(let i = 0 ; i< names.length ; i ++){
      // console.log(names[i])
      if(names[i][0] === 'A'){
            // console.log(names[i])
      }
}
}
// task 4
{
      let sentence = "JavaScript is powerful";
let vowelTotal = 0 ;
for(let i = 0 ; i < sentence.length ; i++){
      if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u'){
            vowelTotal ++ ;
      }
}
// console.log('vowel letter :' , vowelTotal)
}
// task 5
{
      let numbers = [5, 10, 15, 20, 25];
let result = [] ;
for(let k = 0 ; k < numbers.length ; k++){
      result.push(numbers[k] * 2);
}
// console.log(result);
}
// --------------- 20 | 06 | 2025 ------------------
// task 1
{
      let numbers = [12, 5, 8, 130, 44];
for(let i = 0 ; i < numbers.length ; i++){
      if(numbers[i] > 10){
            // console.log(numbers[i])
      }
}
}
// task 2
{
      let fruits = ["Apple", "Mango", "Banana", "Orange", "Grape"];
for(let i = 0 ; i < fruits.length ; i++){
      if(fruits[i].startsWith('O')){
            // console.log(fruits[i])
      }
}
}
// task 3
{
      let ages = [3, 17, 22, 10, 8, 30];
let total = [] ;
for(let i = 0 ; i < ages.length ; i++){
      if(ages[i] < 18){
            // console.log(ages[i])
            total.push(ages[i]);
      }
}
// console.log(total)
}
// task 4
{
      let sum = 0 ;
let nums = [2, 4, 5, 7, 9, 11, 14, 15];
for(let i = 0 ; i < nums.length ; i++){
      if(nums[i] % 2 === 1){
            // console.log(nums[i])
            sum += nums[i];
      }
}
// console.log(sum)
}
// task 5
{
      let sentence = "JavaScript is very powerful and fun";
let count = 0 ;
for(let i = 0 ; i < sentence.length ; i++){
      let total = sentence[i].toLowerCase();
      if(total >= 'a' && total <= 'z') {
      count ++ ;
      }
}
// console.log(count)
}
// ----------------------- 24 | 06 | 24 -------------------

// task 1
{
      let number = 90 ;
if(number % 2 === 0){
      // console.log('EVEN NO ')
}else{
      // console.log('ODD NO')
}
}
// task 2
{
      let nums = [10, 5, 7, 20, 12]
for(let num of nums){
      // console.log(num)
      if(num > 10){
            // console.log('big no :', num)
      }
}
}
// task 3
{
      // let numbers = [4, 7, 10, 15, 20, 9];
// console.log(numbers)
let evenCount = 0 ;
// for(let num of numbers){
      // console.log(num)
      // if(num % 2 === 0){
      //       evenCount ++ ;
      // }
// }
// console.log('even no count : ', evenCount)
}
// task 4
{
      let marks = 35 ;
if(marks >= 80){
      // console.log('A+')
}else if(marks >= 70){
      // console.log('A')
}else if(marks >= 60){
      // console.log('B')
}else if(marks >= 50){
      // console.log('C')
}else{
      // console.log('Fail')
}
}
// task 5
{
      let frout = ["apple", "banana", "mango", "orange"];
let chake = frout.includes('mango')
// console.log(chake)
if(chake === true){
      // console.log('Found Mango!')
}else{
      // console.log('Not Found Mango!')
}
}
// task 6
{
      let number =[5, 8, 3, 12, 7] ;
let sum = 0 ;
for(let num of number){
      // console.log(num)
      sum = num + sum ;
}
// console.log(sum);
}
// task 7
{
      // let n = [1,2,3,4,5] ;
// for(let num of n){
//       console.log(num)
// }
// let n = 5;
// for(let n = 1 ; n <= 5 ; n++){
//       console.log(n)
// }
}
// task 8
{
      
let numbers = [12, 3, 25, 7, 18];
let big = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > big) {
    big = numbers[i];
  }
}

// console.log("Biggest number:", big);
}
// ------------------------ 25 | 06 | 2025 ----------------------
// task 1
{
      let n = 7 ;
for(let i = 1 ; i <= n ; i++){
      // console.log(i)
}
}
// task 2
{
      let nums = [5, 8, 12, 3, 9,1];
let smallNo = nums[0];
for(let num of nums){
      // console.log(num)
      if(num < smallNo){
            smallNo = num;
      }
}
// console.log('small number :', smallNo)
}
// task 3
{
      let number = 90 ;
if(number % 5 === 0){
      // console.log('Divisible by 5')
}else{
      // console.log('divisible by not 5')
}
}
// task 4
{
      let items = ["mango", "apple", "banana", "orange"];
let frout = items.includes('banana')
if(frout === true){
      // console.log('Found Banana')
}else{
      // console.log('Not Found Banana')
}
}
// task 5
{
      let numbers = [4, 7, 10, 15, 22];
for(let i = 0 ; i < numbers.length ; i ++){
      if(numbers[i] % 2 === 0){
            // console.log('Even no:',numbers[i])
      }else{
            // console.log('Odd no:',numbers[i])
      }
}
}
// --------- 28 | 06 | 25--------
// task 1
{
      let numbers = [5, 8, 11, 22, 15, 30];
for(let number of numbers){
      if(number % 2 === 0){
            // console.log('even no :', number) 
      }
}
}
// task 2
{
      let nums = [4, 10, 12, 7, 15];
let newArray = [ ];
for(let num of nums){
      // console.log(num)
      if(num > 10){
            newArray = num  + newArray;
      }
}
// console.log(newArray)
}
// task 3
{
      let names = ["Sima", "Rita", "Salma", "Anik"];
for(let name of names){
      // console.log(name)
      if(name.startsWith('S')){
            // console.log(name)
      }
}
}
// task 4
{
      let numbers = [12, 45, 3, 78, 22];
let heiggestNo = numbers[0] ;
for(let number of numbers){
      // console.log(number)
      if(number > heiggestNo){
            heiggestNo = number
      }
}
// console.log('big no :', heiggestNo)
}
// ----------- 29 | 06 | 25 ------------
// task 1
let nums = [6, 8, 9, 13, 15];
for(let i = 0 ; i < nums.length ; i++){
      // console.log(nums[i])
}
// task 2
let friends = ["Anu", "Rita", "Salman", "Puja"];