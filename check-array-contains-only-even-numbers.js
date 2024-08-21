function allEvenNumbers(arr) {
    var allEven = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            allEven = false;
        }
    }
    return allEven;
}
var numbers = [2, 4, 6, 8];
var allEven = allEvenNumbers(numbers);
console.log(allEven); 
