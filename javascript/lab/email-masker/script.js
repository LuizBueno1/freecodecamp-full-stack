function maskEmail(email){
    const indexAt = email.indexOf("@");
    const lastIndex = email.length;
    const asterisk = "*";
    const maskedEmail = asterisk.repeat(indexAt - 2);
    const afterAt = email.slice(indexAt, lastIndex);

    return email[0] + maskedEmail + email[indexAt - 1] + afterAt;
}

const email = "LuizBueno.dev@gmail.com";

console.log(maskEmail(email));