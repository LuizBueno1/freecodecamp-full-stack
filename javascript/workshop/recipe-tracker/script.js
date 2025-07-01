const recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4, 5, 4, 5],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: '',
    averageRating: null
}

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4, 5, 5, 5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: '',
    averageRating: null
}

const recipe3 = {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrot', 'bell pepper'],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [4, 3, 4, 5],
    averageRating: null,
};

/*const recipe1Name = recipe1.name;
console.log(recipe1Name);

const recipe2Name = recipe2.name;
console.log(recipe2Name);

const recipe1CookingTime = recipe1.cookingTime;
console.log(recipe1CookingTime);

const recipe2CookingTime = recipe2.cookingTime;
console.log(recipe2CookingTime);*/

recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

function getAverageRating(ratings){
    const average = (ratings[0] + ratings[1] + ratings[2] + ratings[3]) / 4;
    return average;
}

function getTotalIngredients(ingredients){
    return ingredients.length;
}

function getDifficultyLevel(time){
    if(time <= 30){
        return "easy";
    } else if(time <= 60){
        return "medium";
    } else{
        return "hard";
    }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

console.log(recipe1AverageRating);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = recipe1AverageRating;
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

const recipe2AverageRating = getAverageRating(recipe2.ratings);
const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);

console.log(recipe2AverageRating);
console.log(recipe2TotalIngredients);
console.log(recipe2DifficultyLevel);

recipe2.averageRating = recipe2AverageRating;
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;

const recipe3AverageRating = getAverageRating(recipe3.ratings);
const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipe3AverageRating);
console.log(recipe3TotalIngredients);
console.log(recipe3DifficultyLevel);

recipe3.averageRating = recipe3AverageRating;
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

console.log(recipes);