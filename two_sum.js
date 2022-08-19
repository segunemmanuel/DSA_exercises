// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order



function TwoSum(nums){
    let target=5;
    const num_sum_indices=[];
    let number=nums[0];
    if(nums.length>0){
      console.log('yes');
    }
  
  for(let i=0;i<nums.length;i++){
    let numbers=nums[i];
    console.log(numbers)
  }
  
    return num_sum_indices
  }
  
  TwoSum([8,9,2,3]);
  
  
  