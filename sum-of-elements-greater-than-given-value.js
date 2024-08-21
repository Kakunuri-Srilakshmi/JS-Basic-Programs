function sumElementsGreaterThan(arr, value) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
var numbers = [1, 2, 3, 4, 5];
var sum = sumElementsGreaterThan(numbers, 3);
console.log(sum); 
