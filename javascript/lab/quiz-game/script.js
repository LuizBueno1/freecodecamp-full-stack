const question1 = {
    category: "Programming Basics",
    question: "What does \"HTML\" stand for?",
    choices: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HighText Machine Language"],
    answer: "HyperText Markup Language"
};

const question2 = {
    category: "JavaScript",
    question: "Which symbol is used for single-line comments in JavaScript?",
    choices: ["<!--", "//", "#"],
    answer: "//"
};

const question3 = {
    category: "Python",
    question: "How do you print something to the console in Python?",
    choices: ["echo \"Hello\"", "print(\"Hello\")", "console.log(\"Hello\")"],
    answer: "print(\"Hello\")"
};

const question4 = {
    category: "Variables",
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["var", "let", "Both A and B"],
    answer: "Both A and B"
};

const question5 = {
    category: "Logic",
    question: "What does \"==\" mean in most programming languages?",
    choices: ["Assignment", "Comparison", "Addition"],
    answer: "Comparison"
};

const questions = [question1, question2, question3, question4, question5];

function getRandomQuestion(questions){
    const randomQuestion = Math.floor(Math.random() * questions.length);
    return questions[randomQuestion];
}

function getRandomComputerChoice(choices){
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getResults(question, choice){
    if(choice === question.answer){
        return "The computer's choice is correct!";
    } else{
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}