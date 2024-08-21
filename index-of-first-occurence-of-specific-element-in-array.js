function findFirstOccurrence(arr, element) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element && index === -1) {
            index = i;
        }
    }
    return index;
}
var numbers = [1, 2, 3, 4, 5];
var index = findFirstOccurrence(numbers, 3);
console.log(index);
