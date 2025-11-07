// src/data/mathQuestions.js
export const mathQuestions = [
    { id: 1, question: "If a train travels 60 km in 1 hour, how far does it travel in 3 hours?", optionA: "120 km", optionB: "180 km", optionC: "200 km", optionD: "150 km", answer: "B" },
    { id: 2, question: "Solve for x: 2x + 5 = 15", optionA: "5", optionB: "10", optionC: "2.5", optionD: "7", answer: "A" },
    { id: 3, question: "The angles of a triangle are in the ratio 2:3:4. Find the largest angle.", optionA: "60°", optionB: "80°", optionC: "100°", optionD: "90°", answer: "C" },
    { id: 4, question: "If the area of a rectangle is 48 cm² and its length is 8 cm, find the width.", optionA: "6 cm", optionB: "8 cm", optionC: "5 cm", optionD: "12 cm", answer: "A" },
    { id: 5, question: "Simplify: 3(2x - 4) + 5", optionA: "6x - 7", optionB: "6x - 12", optionC: "6x - 7", optionD: "6x + 5", answer: "A" },
    { id: 6, question: "Factorize: x² + 5x + 6", optionA: "(x+2)(x+3)", optionB: "(x+1)(x+6)", optionC: "(x-2)(x-3)", optionD: "(x-1)(x-6)", answer: "A" },
    { id: 7, question: "What is 25% of 200?", optionA: "25", optionB: "40", optionC: "50", optionD: "60", answer: "C" },
    { id: 8, question: "If f(x) = 2x + 3, find f(5)", optionA: "13", optionB: "15", optionC: "10", optionD: "12", answer: "A" },
    { id: 9, question: "Solve: 5x - 7 = 18", optionA: "3", optionB: "4", optionC: "5", optionD: "6", answer: "D" },
    { id: 10, question: "The perimeter of a square is 36 cm. Find its side.", optionA: "6 cm", optionB: "9 cm", optionC: "12 cm", optionD: "8 cm", answer: "B" },
    { id: 11, question: "What is the next number in the sequence: 2, 4, 8, 16, ...?", optionA: "18", optionB: "24", optionC: "32", optionD: "20", answer: "C" },
    { id: 12, question: "A shop sells pencils at 5 for $2. How much for 20 pencils?", optionA: "$6", optionB: "$8", optionC: "$10", optionD: "$5", answer: "B" },
    { id: 13, question: "If a car goes 90 km in 1.5 hours, what is its speed?", optionA: "60 km/h", optionB: "50 km/h", optionC: "45 km/h", optionD: "55 km/h", answer: "A" },
    { id: 14, question: "Solve: 3x + 4 = 19", optionA: "5", optionB: "6", optionC: "7", optionD: "8", answer: "C" },
    { id: 15, question: "The sum of angles in a pentagon is:", optionA: "540°", optionB: "360°", optionC: "720°", optionD: "450°", answer: "A" },
    { id: 16, question: "Simplify: 5(x + 2) - 3x", optionA: "2x + 10", optionB: "2x + 7", optionC: "8x + 10", optionD: "5x + 7", answer: "A" },
    { id: 17, question: "If y = 3x + 2, find y when x = 4", optionA: "12", optionB: "14", optionC: "10", optionD: "16", answer: "B" },
    { id: 18, question: "A triangle has sides 3 cm, 4 cm, 5 cm. Its perimeter is:", optionA: "10 cm", optionB: "12 cm", optionC: "11 cm", optionD: "9 cm", answer: "B" },
    { id: 19, question: "What is the median of the numbers 5, 8, 12, 20, 3?", optionA: "8", optionB: "12", optionC: "10", optionD: "5", answer: "A" },
    { id: 20, question: "Simplify: (x²y)(3xy²)", optionA: "3x³y³", optionB: "3x²y³", optionC: "x³y³", optionD: "3xy³", answer: "A" },
    // Continue this pattern up to 150
];

for (let i = 21; i <= 150; i++) {
    mathQuestions.push({
        id: i,
        question: `Math Question ${i}: Solve this real-world problem?`,
        optionA: "Option A",
        optionB: "Option B",
        optionC: "Option C",
        optionD: "Option D",
        answer: "A",
    });
}
