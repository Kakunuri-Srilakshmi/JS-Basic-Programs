function findMaxElement(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var numbers = [1, 2, 3, 4, 5];
var maxNumber = findMaxElement(numbers);
console.log(maxNumber); 
