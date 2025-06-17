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
      if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
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
let scores = [12, 55, 32, 75, 64];
let bigNo = 1 ;
for(let i = 1 ; i < scores.length ; i++){
      if(bigNo < scores[i]){
            console.log('bigest no :', scores[i])
      }
}