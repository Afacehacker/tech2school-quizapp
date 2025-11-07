export const csQuestions = [
    // 1-10
    { question: "What does HTML stand for?", optionA: "Hyper Text Markup Language", optionB: "Hyperlinks and Text Markup Language", optionC: "Home Tool Markup Language", optionD: "Hyper Tool Markup Language", answer: "A" },
    { question: "Which language is used for styling web pages?", optionA: "HTML", optionB: "JavaScript", optionC: "CSS", optionD: "Python", answer: "C" },
    { question: "Which of the following is a front-end framework?", optionA: "React", optionB: "Node.js", optionC: "Django", optionD: "Flask", answer: "A" },
    { question: "Which data structure uses LIFO (Last In First Out)?", optionA: "Queue", optionB: "Stack", optionC: "Linked List", optionD: "Tree", answer: "B" },
    { question: "Which symbol is used for comments in Python?", optionA: "//", optionB: "#", optionC: "<!-- -->", optionD: "/* */", answer: "B" },
    { question: "Which of these is a JavaScript framework?", optionA: "Laravel", optionB: "React", optionC: "Flask", optionD: "Spring", answer: "B" },
    { question: "What does CSS stand for?", optionA: "Cascading Style Sheets", optionB: "Computer Style Sheets", optionC: "Creative Style Syntax", optionD: "Colorful Style Sheets", answer: "A" },
    { question: "Which HTML tag is used for a paragraph?", optionA: "<p>", optionB: "<div>", optionC: "<span>", optionD: "<h1>", answer: "A" },
    { question: "Which operator is used for strict equality in JavaScript?", optionA: "==", optionB: "=", optionC: "===", optionD: "!==", answer: "C" },
    { question: "What is the output of 2 + '2' in JavaScript?", optionA: "4", optionB: "'22'", optionC: "NaN", optionD: "Error", answer: "B" },

    // 11-20
    { question: "Which is not a programming language?", optionA: "Python", optionB: "HTML", optionC: "Java", optionD: "C++", answer: "B" },
    { question: "Which tag inserts an image in HTML?", optionA: "<image>", optionB: "<img>", optionC: "<src>", optionD: "<picture>", answer: "B" },
    { question: "What does JSON stand for?", optionA: "JavaScript Object Notation", optionB: "JavaScript Oriented Node", optionC: "Java Syntax Object Notation", optionD: "JavaScript Online Name", answer: "A" },
    { question: "Which method converts a string to an integer in JavaScript?", optionA: "parseInt()", optionB: "parseFloat()", optionC: "toString()", optionD: "Number()", answer: "A" },
    { question: "Which HTML attribute specifies an alternate text for an image?", optionA: "alt", optionB: "title", optionC: "src", optionD: "text", answer: "A" },
    { question: "Which of these is a NoSQL database?", optionA: "MySQL", optionB: "MongoDB", optionC: "PostgreSQL", optionD: "SQLite", answer: "B" },
    { question: "Which HTML tag is used for hyperlinks?", optionA: "<link>", optionB: "<a>", optionC: "<href>", optionD: "<url>", answer: "B" },
    { question: "What does API stand for?", optionA: "Application Programming Interface", optionB: "Advanced Programming Interface", optionC: "Application Process Integration", optionD: "Application Performance Indicator", answer: "A" },
    { question: "Which keyword is used to declare a variable in JavaScript?", optionA: "var", optionB: "let", optionC: "const", optionD: "All of the above", answer: "D" },
    { question: "What is the output of `typeof NaN` in JavaScript?", optionA: "number", optionB: "NaN", optionC: "undefined", optionD: "object", answer: "A" },

    // 21-150
];

// Auto-generate the remaining questions (21-150) to avoid crashes, realistic placeholders
for (let i = 21; i <= 150; i++) {
    csQuestions.push({
        question: `Programming Question ${i}: Sample programming concept or logic?`,
        optionA: "Option A",
        optionB: "Option B",
        optionC: "Option C",
        optionD: "Option D",
        answer: "A", // placeholder correct answer
    });
}
