const sentence = 'I am learning web dev.';
// const result = '.ved bew gninrael ma I' ;

// -------------------
// rouls-1
let reverse = ''
for(const letter of sentence){
      // console.log(letter)
      reverse = letter + reverse;
}
// console.log(reverse);

// --------------------------------
// rouls-2
const reversed = sentence.split('').reverse().join('');
console.log(reversed)

