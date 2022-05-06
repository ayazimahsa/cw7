function removeZeros(nums) {
    // for (let i = nums.length - 1; i >= 0; i--) 
    nums.map(function(i) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    })
    return nums;
}

console.log(removeZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(removeZeros([0, 1, null, 2, false, 1, 0]));
console.log(removeZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));