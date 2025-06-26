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
{
      let cart = {
  book: 350,
  pen: 30,
  diary: 120,
  bag: 800
};
let sumNo = 0 ;
const vawle = Object.values(cart)
// console.log(vawle);
for(let key in vawle){
      // console.log(key);
      sumNo += vawle[key];
}
// console.log(sumNo)
}
// ---------------- 22 | 06 | 2025 ---------------------
// task 1
{
      let products = {
  pen: 15,
  notebook: 40,
  bottle: 100,
  bag: 500
};
let total = 0 ;
const vawle = Object.values(products);
for(let key in vawle){
      // console.log(key);
      total += vawle[key]
}
// console.log(total)
}
// task 2
{
      let items = {
  chocolate: 20,
  chips: 30,
  juice: 60,
  cake: 100
};
const vawle = Object.values(items)
// console.log(vawle)
for(let vawle in items){
      // console.log(vawle);
      if(items[vawle] > 50){
            // console.log(vawle)
      }
}
}
// task 3
{
      let studentProfile = {
      name : 'roni roy',
      roll : 10 ,
      class : 11 ,
      subject : ["Math", 'English', 'Science']
}
// console.log(studentProfile.subject)
}
// task 4
{
      let stock = {
  rice: 5,
  oil: 0,
  soap: 1,
  sugar: 3
};
const vawle = Object.values(stock)
// console.log(vawle)
for(let vawle in stock){
      // console.log(key)
      if(stock[vawle] <= 1){
            // console.log(vawle)
      }
}
}
// task 5
{
      let movies = {
  "Inception": 9,
  "Titanic": 8,
  "Joker": 7,
  "Cats": 3
};
const vawle = Object.values(movies)
// console.log(vawle)
for(let vawle in movies){
      if(movies[vawle] >= 8){
            // console.log(vawle)
      }
}
}
// task 6
{
      let student = {
  name: "Rifat",
  class: "Nine",
  subjects: ["Math", "Science", "English"]
};
// console.log(student.subjects.push('bengali'))
// console.log(student.subjects)
}
// task 7
{
      let library = {
  name: "City Library",
  books: ["Physics", "Chemistry", "Biology"]
};
// console.log('Total book :',library.books.length)
for(let i = 0 ; i < library.books.length ; i++){
      // console.log(library.books[i])
}
}
// -------------- 23 | 06 | 25 --------------------
// task 1
{
      let student = {
  name: "Rafiq",
  class: "Ten",
  subjects: ["Math", "English", "Physics", "Chemistry"]
};
// const vawle = Object.values(student.subjects)
// console.log(vawle)
// console.log('total subject :',student.subjects.length)
for(let i = 0 ; i < student.subjects.length ; i++){
      // console.log(student.subjects[i])
}
}
// task 2
{
      let student = {
  name: "Rafiq",
  class: "Ten",
  subjects: ["Math", "English", "Physics", "Chemistry"]
};
student.subjects.push('Biology');
// console.log(student.subjects) 
}
// task 3{INCOMEPLETE}
{
      let school = {
  students: [
    { name: "Asha", age: 18 },
    { name: "Kabir", age: 21 },
    { name: "Sima", age: 22 }
  ]
};
// console.log(school.students.name)
for(let key in school.students){
      // console.log(school.students[key])
      if(school.students[key] > 20){
            // console.log(school.students[key])
      }
}
}
// task 4
{
      let products = {
  pen: 158,
  notebook: 490,
  bottle: 1009,
  bag: 580
};
const vawle = Object.values(products)
// console.log(vawle)
let sum = 0 ;
for(let vawle in products){
      // console.log(products[vawle])
      sum = products[vawle] + sum
}
// console.log('total :',sum)
}
// -------- 24 | 06 | 25 ---------------
// task 1
{
            let school = {
  students: [
    { name: "Asha", age: 18 },
    { name: "Kabir", age: 21 },
    { name: "Sima", age: 22 },
    { name: "Simir", age: 26 }
  ]
};
for(let i = 0 ; i < school.students.length ; i++){
      // console.log(school.students[i])
      let student = school.students[i]
      if(student.age > 20){
            // console.log(student.name)
      }
}
}
// task 2
{
      let store = {
  products: [
    { name: "Pen", quantity: 10 },
    { name: "Pencil", quantity: 0 },
    { name: "Notebook", quantity: 5 },
    { name: "Eraser", quantity: 0 }
  ]
};
for(let i = 0 ; i < store.products.length ; i++){
      // console.log(store.products[i])
      let product = store.products[i];
      if(product.quantity === 0){
            // console.log(product.name)
      }
}
}
// task 3 [INCOMPLETE]
{
      let library = {
  books: [
    { title: "Physics", author: "Newton" },
    { title: "Biology", author: "Darwin" },
    { title: "Math", author: "Euclid" }
  ]
};
for(let i = 0 ; i < library.books.length ; i++){
      // console.log(library.books[i])
}
}
// -------------- 25 | 06 | 2025 ------------
// task 1
{
      let mobile = {
  brand: "Samsung",
  model: "Galaxy A52",
  price: 25000,
  color: "black"
};
// console.log(mobile)
const vawle = Object.values(mobile);
// console.log(vawle);
const key = Object.keys(mobile);
// console.log(key)
}
// task 2
{
      let user = {
  name: "Tanvir",
  age: 22,
  hobbies: ["reading", "travelling", "coding"]
};
const vawle = Object.values(user.hobbies);
// console.log(vawle)
}
// task 3
{
      let shop = {
  products: [
    { name: "Pen", price: 10 },
    { name: "Pencil", price: 5 },
    { name: "Notebook", price: 50 }
  ]
};
for(let items of shop.products){
      // console.log(items.name + '-' + items.price)
}
}
// task 4
{
      let order = {
  items: [
    { name: "Shirt", qty: 2, price: 500 },
    { name: "Pant", qty: 1, price: 800 }
  ]
};
let grandTotal = 0 ;
for(let item of order.items){
      let itemTotal = item.qty * item.price;
      // console.log(item.name + 'Total :'+ itemTotal);
      grandTotal += itemTotal; 
}
// console.log('GrandTotal :', grandTotal)
}
// task 5
{
      let students = [
  { name: "Rita", marks: 85 },
  { name: "Anik", marks: 72 },
  { name: "Salma", marks: 60 }
];
for(let student of students){
      if(student.marks > 75){
            // console.log(student.name)
      }
}
}
// ----------------- 26 | 06 | 25 -----------------
// task 1
{
      let student = {
  name: "Tanvir",
  age: 20,
  subjects: ["Math", "English", "Science"]
};
// console.log('total subject :',student.subjects.length)
for(let i = 0 ; i < student.subjects.length ; i++){
      // console.log(student.subjects[i])
}
}
// task 2
{
      let employee = {
  name: "Rahim",
  salary: 15000,
  bonus: 3000,
  fine: 500
};
let totalPayment = employee.salary + employee.bonus + employee.fine ;
// console.log('total Payment :', totalPayment)
}
// task 3
{
      let students = [
  { name: "Rita", marks: 85 },
  { name: "Anik", marks: 72 },
  { name: "Salma", marks: 60 },
  { name: "Mita", marks: 90 }
];
for(let student of students){
      if(student.marks > 80){
            // console.log(student.name)
      }
}
}
// task 4
{
      let books = [
  { title: "Math", pages: 120 },
  { title: "English", pages: 100 },
  { title: "Bangla", pages: 80 }
];
let totalPages = 0 ;
for(let book of books){
      // console.log(book.title + '-' + book.pages + ' pages')
      totalPages += book.pages;
}
// console.log('total Pages :' , totalPages)
}
// task 5
{
      let person = {
  name: "Anik",
  age: 22
};
const vawle = Object.values(person);
// console.log(vawle)
}
// task 6
{
      let car = {
  brand: "Toyota",
  color: "Red"
};
car.color='blue';
// console.log(car)
}
// task 7
let fruit = {
  name: "Mango",
  price: 30
};
fruit.quantity = 5;
console.log(fruit)