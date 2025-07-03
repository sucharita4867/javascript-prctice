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
const result = toSum(nums , target);
console.log(result)