// task 1
{
      let fruits = ["mango", "banana"];
fruits.push('apple');
fruits.shift();
// console.log(fruits)
}
// task 2
{
      let devices = ["laptop", "tablet", "phone",];
// devices.includes('phone');
// devices.push('computer')
// console.log(devices.includes('computer'))
// console.log(devices)
}
// task 3
{
//       let nums = [10, 20, 30, 40];
// nums.pop();
// nums.push(99);
// console.log(nums)
}
// task 4
{
      // let letters = ["a", "b", "c", "d", "e"];
// let part = letters.slice(1,4);
// console.log(part)
}
// task 5
{
      let names = ["Rina", "Mina", "Tina"];
// names.join("-");
// console.log(names.join("-"));
}
// task 6
{
      let animals = ["cat", "dog", "cow", "goat"];
      const animal = animals.splice(2 , 1 ,"lion");
      // console.log(animals);
      // console.log(animal);
}
// task 7
{
      let numbers = [3, 6, 9, 12];
numbers.unshift(0);
numbers.push(15);
// console.log(numbers)
}
// task 8
{
      let letters = ["a", "b", "c", "d", "e"];
letters.reverse();
// console.log(letters.join('*'));
}
// task 9
{
      let tools = ["pen", "eraser", "scale", "pencil"];
      let tool = tools.splice(1 , 1);
      // console.log(tools);
}
// task 10
{
      let food = ["rice", "dal", "egg", "fish"];
const foods = food.splice(2,1,"paneer");
// console.log(foods)
// console.log(food)
}
// task 11
{
      let prices = [100, 200, 300, 400, 500];
const price = prices.slice(0 , 3);
// console.log(price);
// console.log(prices);
}
// task 12
{
      let numbers = [5, 10, 15, 20];
let sum = 0;
for(let i = 0 ; i < numbers.length ; i++){
     sum = sum + numbers[i];
//      sum += numbers[i];
}
// console.log(sum);
//----------------- using reduce ----------------------
let inetial = 0 ;
// console.log(numbers.reduce(
//       (prev , curr)=> prev + curr, 0
// ))
}
// task 13
{
      let chars = ["x", "y", "z"];
let char = chars.indexOf('y')
// console.log("Yes, found in middle")
}
// task 14
{
      let colors = ["red", "green", "blue", "yellow"];
let firstNo = colors[0];
let lastNo = colors[colors.length - 1];
const result = firstNo + "-" + lastNo ;
// console.log(result);
}
// task 15
{
      let items = ["milk", "bread", "butter"];
let result = items.join(',');
// console.log(result);
}
 //delete all friend after anu
{
      const friends = ['sucho','anu','riya','sana','mona','kahna']
const deleted = friends.splice(1,2)
// console.log(`we are died now ${deleted}`)
// console.log(friends)
}
// --------------------------------- 15 | 06 | 2025 -----------------------
// task 1
let names = ["Rita", "Sita", "Gita"];
const addAnita = names.push('anita');
console.log(addAnita)
console.log(names);
