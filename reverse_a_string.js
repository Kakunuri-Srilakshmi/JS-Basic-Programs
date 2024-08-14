let str = "JFSEOFSfefsffrsfssGKGdjgKg";
let reversedStr = reverseString(str);

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("Reversed string:", reversedStr);
