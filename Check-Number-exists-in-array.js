function checkNumberExists(arr, num) {
    var exists = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            exists = true;
        }
    }
    return exists;
}
var numbers = [1, 2, 3, 4, 5];
var result = checkNumberExists(numbers, 3);
console.log(result); 
