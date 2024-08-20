let array = [3,4,45,2,43,66,32,54,1,7,33,643];
let smallestElement = findSmallestElement(array);

function findSmallestElement(arr) {
    let smallest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log("Smallest element:", smallestElement);
