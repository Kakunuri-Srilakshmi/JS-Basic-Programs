let str = "JFSEOFSfefsffrsfssGKGdjgKg";
let lowercaseCount = countlowercase(str);

function countlowercase(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            count++;
        }
    }
    return count;
}

console.log("Number of lowercase letters:", lowercaseCount); 
