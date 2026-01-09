function findLongestWordLength(sentence){
    const words = sentence.split(" ");
    let longestLength = 0;
    for(const word of words){
        if(word.length > longestLength){
            longestLength = word.length;
        }
    }
    return longestLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));