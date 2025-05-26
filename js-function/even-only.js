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
const even = evenNumbers(nums);
console.log('even no :', even)