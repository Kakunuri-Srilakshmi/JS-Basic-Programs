let arr = [2, 9, -2, 6, -4, 8, -3, 3];

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOfPositiveNumbers(arr));  // Output should be 28
