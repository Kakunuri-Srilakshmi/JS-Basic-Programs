let str = "JFSEOFSfefsffrsfssGKGdjgKg";
let vowelCount = countVowels(str);

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels:", vowelCount); 
