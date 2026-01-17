function repeatStringNumTimes(str, num){
    let text = "";

    if(num > 0){
        for(let i = 0; i < num; i++){
            text += str;
        }
    }

    return text;
}

console.log(repeatStringNumTimes("code", 8));