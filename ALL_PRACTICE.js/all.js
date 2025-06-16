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
let temp = 38;
if(temp > 37){
      console.log('You may have fever');
}else{
      console.log('Normal')
}
