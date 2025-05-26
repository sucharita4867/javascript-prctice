function doubleAndTriple (number , double ,triple){
      if(double === true){
            const total = number * 1 ;
            return total ;
      }
      else if(double === false){
            const total = number * 2 ;
            return total ;
      }
      else(triple === 0);{
            const total = number * 3 ;
            return total ;
      }
}
console.log(doubleAndTriple(4 , true));
console.log(doubleAndTriple(4 , false));
console.log(doubleAndTriple(4 , 0));