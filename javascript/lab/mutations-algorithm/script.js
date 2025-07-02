function mutation(arr){
    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1].toLowerCase();

    const letters = secondWord.split("");
    
    for(const letter of letters){
        if(firstWord.includes(letter)){
            continue;
        } else{
            return false;
        }
    }
    
    return true;
}

console.log(mutation(["hello", "hey"]) === false);         // false
console.log(mutation(["hello", "Hello"]) === true);        // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true);  // true
console.log(mutation(["Mary", "Army"]) === true);          // true
console.log(mutation(["Mary", "Aarmy"]) === true);         // true
console.log(mutation(["Alien", "line"]) === true);         // true
console.log(mutation(["floor", "for"]) === true);          // true
console.log(mutation(["hello", "neo"]) === false);         // false
console.log(mutation(["voodoo", "no"]) === false);         // false
console.log(mutation(["ate", "date"]) === false);          // false
console.log(mutation(["Tiger", "Zebra"]) === false);       // false
console.log(mutation(["Noel", "Ole"]) === true);           // true