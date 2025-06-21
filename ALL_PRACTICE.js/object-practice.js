// -------------- 20 | 06 | 25 ----------------
// task 1
{
      let person = {
      name : 'rajib' ,
      age : 25 ,
      city : 'kolkata'
};
{
      // console.log(person.name)
// console.log(person.age)
// console.log(person.city)
}
{
      // console.log(person['name'])
// console.log(person['age'])
// console.log(person['city'])
}
}
// task 2
{
      let student = {
  name: "Rahim",
  age: 20
};
student.hobby='singing';
student.dreamplece = 'malesiye';
student.stadyWith = 'mograhut collage';
// console.log(student)
// console.log(student.dreamplece)
// console.log(student['hobby']);
}
// task 3
{
      let user = {
  name: "Karim",
  age: 22
};
user.age = 30 ;
// console.log(user)
}
// task 4
{
      let book = {
      Title : 'My Life',
      Author : 'Johan',
      Page : 500 ,
};
// console.log(book)
}
// task 5
{
      let info = {
  brand: "Samsung",
  price: 25000,
  color: "black"
};
info.malik = 'raj' ;
info.price = 15000 ;
info.color = 'Sky';
for(let key in info){
      // console.log(key + ":" + info[key])
}
}
// --------------- 21| 06 | 25 -------------------
// task 1
{
      let person = {
  name: "Tanisha",
  age: 23,
  city: "Kolkata",
  phone: "9876543210"
};
// console.log(person.city)
// console.log(person.phone)
}
// task 2
{
      let user = {
  name: "Hasib",
  age: 18
};
user.isStudent = true ;
// console.log(user)
}
// task 3
{
      let result = {
  name: "Puja",
  subject: "Math",
  marks: 75
};
result.marks = 90 ;
// console.log(result)
}
// task 4
{
      let device = {
  brand: "Redmi",
  model: "Note 10",
  price: 15000
};
for(let key in device){
      // console.log(key + ':' + device[key]);
}
}
// task 5
{
      let movie = {
      Title : 'The Dream Girl' ,
      Director : 'Rajsing' ,
      ReleaseYear : 2025 ,
      IsHit : true
}
// console.log(movie)
}
// task 6
{
      let car = {
  name: "Honda",
  color: "White",
  speed: "200km/h"
};
const vawle = Object.values(car)
// console.log(vawle)
const keys = Object.keys(car)
// console.log(keys)
}
// task 7
{
      let products = {
  shirt: 500,
  pant: 800,
  shoe: 1200
};
let totalValue = 0 ;
const vawle = Object.values(products);
// console.log(vawle)
for(let key in vawle){
      // console.log(key)
       totalValue += vawle[key] ;
      }
      // console.log(totalValue)
}
// task 8
{
      let user = {
  name: "Farhana",
  age: 22,
  city: "Dhaka"
};
// console.log(user.name);    
// console.log(user.city); 
} 
// task 9
{
          let products = {
  shirt: 500,
  pant: 800,
  shoe: 1200,
  tshirt : 300,
  saree : 15000 ,
  pedicod : 500
};
const vawle = Object.values(products);
// console.log(vawle);
let sumNo = 0 ;
for(let key in vawle){
      // console.log(key);
      sumNo += vawle[key];
}
// console.log(sumNo)
}
// task 10
{    
       let phone = {
  brand: "Realme",
  model: "C35",
  price: 12000
};
for(let key in phone){
      // console.log(key + ':' + phone[key])
}
}
// task 11
{
      let laptop = {
  brand: "HP",
  price: 8000,
  color: "Silver"
};
for(let key in laptop){
      // console.log(key + ':' + laptop[key])
}
}
// task 12
let cart = {
  book: 350,
  pen: 30,
  diary: 120,
  bag: 800
};
let sumNo = 0 ;
const vawle = Object.values(cart)
console.log(vawle);
for(let key in vawle){
      console.log(key);
      sumNo += vawle[key];
}
console.log(sumNo)
