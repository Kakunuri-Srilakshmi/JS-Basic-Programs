let array = [3,4,-45,-2,43,66,-32,54,1,7,-33,643];
let firstNegative = findFirstNegative(array);
function findFirstNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
    return null; 
}
console.log("First negative number:", firstNegative);
