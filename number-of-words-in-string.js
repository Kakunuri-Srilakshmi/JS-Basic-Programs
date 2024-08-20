let str = "Hello Everyone! happy Morning to all.";
let wordCount = countWords(str);
function countWords(str) {
    let words = str.trim().split(/\s+/);
    return words.length;
}
console.log("Number of words:", wordCount);
