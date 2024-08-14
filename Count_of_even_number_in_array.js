let numbers = [3,4,45,2,43,66,32,54,1,7,33,643];
let evenCount = countEvenNumbers(numbers);

function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log("Number of even numbers:", evenCount); 
