// LOOPING TECHNIQUE
// 1. for loop
// 2. while loop
// 3. do while --> ignore
// 4. for of --> array loop korar jonno
// 5.for in --> object loop lorar jinno

const friends = ['racho', 'sucho', 'anu', 'farish', 'sabana', 'moni'];

for (const friend of friends) {
      // console.log(friend)
}
// ===========1
// for (let i = 0 ; i < friends.length ; i++){
//       console.log(friends[i])
// }
// ===========2
for (let n = 0 ; n < friends.length ; n++){
      // console.log(friends[n])
}

//+++++++++++while loop diye practice++++++++++++++++

const numbers = [12, 2324, 342, 5435, 3463, 42341, 334];
let n = 0;
while (n < numbers.length){
      // console.log(numbers[n]);
      n++;
}

// for loop
for(let i = 0 ; i < numbers.length ; i++){
      console.log(numbers[i])
}