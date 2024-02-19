const questions = [
    {
        question: "What does HTML stands for?",
        options: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language","Hyperlink Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which technology is primarily responsible or the styling of web pages?",
        options: ["HTML", "CSS", "Javascript","Java"],
        correctAnswer: "CSS"
    },
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        options: ["HTML", "CSS", "Javascript","Java"],
        correctAnswer: "Javascript"
    },
    {
        question: "Which part of web devlopment is responsible for handling data storage and retrieval?",
        options: ["Front-end development", "Back-end development", "Full-stack development","Middleware development"],
        correctAnswer: "Back-end development"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionButtons = document.querySelectorAll(".option");
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].innerText = currentQuestion.options[i];
        optionButtons[i].style.backgroundColor = "#2196f3"; // Reset button color
    }
}

function checkAnswer(btn) {
    const selectedAnswer = btn.innerText;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        btn.style.backgroundColor = "#4caf50"; // Change button color to green for correct answer
        console.log("Correct! Well done!");
    } else {
        btn.style.backgroundColor = "#ff0000"; // Change button color to red for incorrect answer

        // Display specific incorrect message for each option
        switch (selectedAnswer) {
            case "Paris":
                console.error("Incorrect! Paris is the capital of France.");
                break;
            case "Mars":
                console.error("Incorrect! Mars is known as the Red Planet.");
                break;
            case "Blue Whale":
                console.error("Incorrect! Blue Whale is the largest mammal.");
                break;
            default:
                console.error("Incorrect answer! Try again.");
        }
    }

    document.getElementById("score").innerText = score;
    toggleOptions(true);
}

function toggleOptions(disabled) {
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(btn => {
        btn.disabled = disabled;
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        toggleOptions(false);
        loadQuestion();
    } else {
        alert(`Quiz completed! Your score is ${score}`);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        toggleOptions(false);
        loadQuestion();
    }
}

// Initial setup
loadQuestion();
