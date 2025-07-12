// task 1
{
    const nums =[2,5,5,11];
const target = 10 ;
 function toSum (nums, target) {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[i] + nums[j] == target){
                return [i , j]
            }
        }
    }
};
// const result = toSum(nums , target);
// console.log(result)
}
{
    // task 2
// let k = 0 ;
// nums = [3,2,2,3], val = 3
// function (nums , val){
//     for(let num of nums){
//         // console.log(num)
//         if(num !== val){
//             nums[k] = num
//             k++ 
//         }
//     }
// }
}
// task 3
// {  
// var findLucky = function(arr){
//     let freq = {} ;
//     for(let num of arr){
//         if(freq[num]){
//             freq[num] = freq[num] + 1 
//         }else{
//             freq[num] = 1
//         }
//     }
// }
// console.log(freq)
// // const result = findLucky(arr) ;
// // console.log(result)
// }
// task 4
 function intger (num, target) {
    let left = 0 ;
     let right = num.length -1 ;
while(left <= right){
    let mid = Math.floor(left + right) / 2;
    if(num[mid] === target){
        return mid;
    }else if(num[mid] > target){
        right = mid - 1 ;
    }else{
        left = mid + 1;
        // return left ;
    }
}return left ;
};
const result = intger (num, target);
console.log(result)