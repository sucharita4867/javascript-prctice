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