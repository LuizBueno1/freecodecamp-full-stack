const lunches = [];

function addLunchToEnd(arr, str){
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

function addLunchToStart(arr, str){
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr;
}

function removeLastLunch(arr){
    if(arr.length === 0){
        console.log("No lunches to remove.");
    } else{
        const removedItem = arr.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
    }

    return arr;
}

function removeFirstLunch(arr){
    if(arr.length === 0){
        console.log("No lunches to remove.");
    } else{
        const removedItem = arr.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
    }

    return arr;
}

function getRandomLunch(arr){

    if(arr.length === 0){
        console.log("No lunches available.");
    } else{
        const randomIndex = Math.floor(Math.random() * arr.length);
        console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
    }
}

function showLunchMenu(arr){
    if(arr.length === 0){
        console.log("The menu is empty.");
    } else{
        console.log(`Menu items: ${arr.join(", ")}`);
    }
}

addLunchToEnd(lunches, "Tacos"); // "Tacos added to the end of the lunch menu."

console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger")); // ["Pizza", "Tacos", "Burger"]

addLunchToStart(lunches, "Sushi"); // "Sushi added to the start of the lunch menu."

console.log(addLunchToStart(["Burger", "Sushi"], "Pizza")); // ["Pizza", "Burger", "Sushi"]

removeLastLunch([]); // "No lunches to remove."

removeLastLunch(["Stew", "Soup", "Toast"]); // "Toast removed..."

const test1 = removeLastLunch(["Sushi", "Pizza", "Noodles"]);
console.log(test1); // ["Sushi", "Pizza"]

removeFirstLunch([]); // "No lunches to remove."

removeFirstLunch(["Salad", "Eggs", "Cheese"]); // "Salad removed..."

const test2 = removeFirstLunch(["Sushi", "Pizza", "Burger"]);
console.log(test2); // ["Pizza", "Burger"]

getRandomLunch([]); // "No lunches available."

const testArray = ["Taco", "Burrito", "Quesadilla"];
const copy = [...testArray];
getRandomLunch(testArray);

showLunchMenu([]); // "The menu is empty."

showLunchMenu(["Greens", "Corns", "Beans"]); // "Menu items: Greens, Corns, Beans"

showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]); // "Menu items: Pizza, Burger, Fries, Salad"