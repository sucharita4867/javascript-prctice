// TERNARY --> three 



//    ?    :

// condition ? do something when true : do something when false
const age = 112;

// normal if else

// if (age >= 18) {
//       console.log('vhote dau')
// }
// else{
//       console.log('ghumai thako')
// }

// simple ternary

// age >= 18 ? console.log('vhote dau') : console.log('ghumai thako')

if(isLeader === true){
      price = 0;
}
else{
      price = price + 100;
}
console.log(price)

price = isLeader === true ? 0: price + 100;

// optional : semi-advanced ternary

if(isLeader === true) {
      if (price > 1000){
            price = price /2;
      }
      else{
            price = 0;
      }
}
else{
      price = price + 1000;
}