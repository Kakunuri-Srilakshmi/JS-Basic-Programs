let arr = [2, 9, -2, 6, -4, 8, -3, 3];

function sumOfIndexOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {  
            sum += i;  
        }
    }
    return sum;
}

console.log(sumOfIndexOfEvenNumbers(arr)); 

