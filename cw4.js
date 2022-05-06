function deNest(array) {
    return array.reduce(function (a, b) {
        if (Array.isArray(b)) {
            return a.concat(deNest(b))
        }
        return a.concat(b)
    }, [])[0];
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));
console.log(deNest([[[[[[[true]]]]]]]));
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));



