let count = 0;

function cardCounter(card){
    if(card>=2 && card<=6){
        count++;
    }
    
    switch(card){
        case 10:
            count--;
            break;
        case "J":
            count--;
            break;
        case "Q":
            count--;
            break;
        case "K":
            count--;
            break;
        case "A":
            count--;
            break;
    }

    if(count>0){
        return count + " Bet";
    } else{
        return count + " Hold";
    }
}

console.log(cardCounter(2));