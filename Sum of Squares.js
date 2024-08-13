let arr = [2, 9, -2, 6, -4, 8, -3, 3];

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];  
    }
    return sum;
}

console.log(sumOfSquares(arr));  
