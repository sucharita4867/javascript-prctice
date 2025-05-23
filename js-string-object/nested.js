const college = {
      name : 'mograhut college',
      class : ['B.A', 'B.com', 'B.sc'],
      events : ['15 aug', '21 feb', '16 dec'],
      unique :{
            color : 'skyBlue',
            result : {
                  gpa : 5,
                  merit :'top',
            }
      }
}
{
      // console.log(college.unique.color)
// college.unique.result.merit = 'top good college'
// console.log(college.unique.result.merit)

// college.events[2] = '1 may'
// console.log(college.events[2])

// delete college.events;
// console.log(college)
}
// --------------------------------------
// console.log(college.unique.result.merit)
college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit)
college.events[2] = 'happy birthday'
console.log(college.events[1])

delete college.events;
console.log(college)