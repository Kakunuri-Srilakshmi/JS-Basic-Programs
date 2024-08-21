function countDivisibleBy(arr, divisor) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            count = count + 1;
        }
    }
    return count;
}
var numbers = [1, 2, 3, 4, 5];
var count = countDivisibleBy(numbers, 2);
console.log(count); 
