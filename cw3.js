function removeZeros(nums) {
    let zeroIsTrue = nums.filter((item) => item === 0);
    let zeroIsFalse = nums.filter((item) => item !== 0);
    let result = zeroIsFalse.concat(zeroIsTrue);
    return result;

}

console.log(removeZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(removeZeros([0, 1, null, 2, false, 1, 0]));
console.log(removeZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));
