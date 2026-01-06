const value = false;

function booWho(isBooleanPrimitive){
    if(isBooleanPrimitive === true || isBooleanPrimitive === false){
        return true;
    } else{
        return false;
    }
}

console.log(booWho(value));