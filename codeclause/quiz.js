const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which technology is primarily responsible for the styling of web pages?",
        options: ["HTML", "CSS", "Javascript", "Java"],
        correctAnswer: "CSS"
    },
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        options: ["HTML", "CSS", "JavaScript", "Java"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which part of web development is responsible for handling data storage and retrieval?",
        options: ["Front-end development", "Back-end development", "Full-stack development", "Middleware development"],
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
        optionButtons[i].style.backgroundColor = "#2196f3";
    }
}

function checkAnswer(btn) {
    const selectedAnswer = btn.innerText;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        btn.style.backgroundColor = "#4caf50";
        console.log("Correct! Well done!");
    } else {
        btn.style.backgroundColor = "#ff0000";
        console.error("Incorrect! Try again.");
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

loadQuestion();
