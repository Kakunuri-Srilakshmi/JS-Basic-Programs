function allElementsPositive(arr) {
    var allPositive = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            allPositive = false;
        }
    }
    return allPositive;
}
var numbers = [1, 2, 3, 4, 5];
var allPositive = allElementsPositive(numbers);
console.log(allPositive); 
