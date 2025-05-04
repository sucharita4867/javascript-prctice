const person = {
      name : 'Rabi',
      age : 23 ,
      profession : 'developer',
      salary : 20000,
      married : true,
      'family member' : ['bou', 'chele', 'ma', 'baba'] 
};
// console.log(person);

// dot notation
// dot symbol diye object er property er value access kora
// console.log(person.age)
// const boyos = person.age;
// console.log(boyos)
// -----------------------------------------
// bracket notation
// third bracket diye access kora
console.log(person['salary'])
const income = person['salary'];
console.log(income)


console.log(person['family member'])
const barirLok = person['family member'];
console.log(barirLok)