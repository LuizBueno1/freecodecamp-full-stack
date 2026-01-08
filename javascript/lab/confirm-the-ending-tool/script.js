function confirmEnding(word, ending){
    let length = ending.length;
    let wordEnding = word.slice(-length);

    if(wordEnding === ending){
        return true;
    } else{
        return false;
    }
}

console.log(confirmEnding("FreeCodeCamp", "Camp"));