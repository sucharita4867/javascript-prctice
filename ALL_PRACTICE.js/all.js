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
let names = ["Rita", "Sita", "Gita"];
for(let i = 0 ; i < names.length ; i++){
      console.log(names[i] ,'is present');
}
