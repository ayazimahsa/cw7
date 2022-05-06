function destructure(array) {
    const [a, b, ...rest] = array;
    return rest;
}
console.log(destructure([1, 2, 3, 4, 5, 6, 7]));