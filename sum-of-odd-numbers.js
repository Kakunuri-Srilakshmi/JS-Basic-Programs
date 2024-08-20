let array = [3,4,45,2,43,66,32,54,1,7,33,643];
let sumOfOdds = sumOddNumbers(array);
function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log("Sum of odd numbers:", sumOfOdds);
