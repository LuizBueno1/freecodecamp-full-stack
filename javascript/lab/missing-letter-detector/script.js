function fearNotLetter(alphabeticalOrder){

    for(let i = 0; i < alphabeticalOrder.length - 1; i++){
        if(alphabeticalOrder[i+1].charCodeAt(0) - alphabeticalOrder[i].charCodeAt(0) === 1){
            continue;
        } 

        const missingLetter = String.fromCharCode(alphabeticalOrder[i].charCodeAt(0) + 1);
        return missingLetter;
    }

    return undefined;
}

console.log(fearNotLetter("abcdefghjklmno"));