function evenNumbers (numbers){
      let even = [];
      for(const number of numbers){
            // console.log(number);
            if(number % 2 === 0){
                  console.log(number);
                  even.push(number);
            }
      }
      return even;
}
const nums = [2, 43, 34, 4, 56, 67];
// const even = evenNumbers(nums);
// console.log('even no :', even)

function sumOfEvenNumbers (numbers){
      let sum = 0 ;
      for(const number of numbers){
            // console.log(number)
            if(number % 2 === 0){
                  console.log(number);
                  sum = sum + number ;
            }
      }
      return sum ;
}
const numb = [23, 42, 56, 52, 675, 678,];
const sum = sumOfEvenNumbers (numb);
console.log('sum of numbers is :', sum);