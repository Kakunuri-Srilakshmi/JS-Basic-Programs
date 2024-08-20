let array = [3,4,45,2,1,43,66,1,32,54,1,7,33,643];
let elementToCount = 1;
let occurrences = countOccurrences(array, elementToCount);

function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
console.log("Occurrences of", elementToCount, ":", occurrences);
