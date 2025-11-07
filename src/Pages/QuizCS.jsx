// src/Pages/QuizCS.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { csQuestions } from "../data/csQuestions";
import { motion } from "framer-motion";

const QuizCS = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (!selectedOption) return;

        const currentQ = csQuestions[currentQuestion];

        if (selectedOption === currentQ.answer) {
            setScore((prev) => prev + 1);
        } else {
            setWrongAnswers((prev) => [
                ...prev,
                { question: currentQ.question, selected: selectedOption, correct: currentQ.answer },
            ]);
        }

        setSelectedOption("");

        if (currentQuestion + 1 < csQuestions.length) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleFinish = () => {
        // Navigate to results page or dashboard if needed
        navigate("/dashboard", { state: { score, wrongAnswers, subject: "Computer Science" } });
    };

    if (showResults) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-700 via-blue-600 to-indigo-500 text-white p-6">
                <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    Quiz Completed!
                </motion.h2>
                <p className="text-xl mb-4">Your Score: {score} / {csQuestions.length}</p>
                {wrongAnswers.length > 0 && (
                    <div className="bg-white/10 rounded-xl p-4 max-w-2xl w-full mb-4">
                        <h3 className="font-bold mb-2">Review Wrong Answers:</h3>
                        {wrongAnswers.map((wa, idx) => (
                            <div key={idx} className="mb-2 p-2 border border-white/30 rounded-lg">
                                <p className="font-semibold">{wa.question}</p>
                                <p>Your Answer: {wa.selected}</p>
                                <p>Correct Answer: {wa.correct}</p>
                            </div>
                        ))}
                    </div>
                )}
                <motion.button
                    className="px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    onClick={handleFinish}
                >
                    Go to Dashboard
                </motion.button>
            </div>
        );
    }

    const question = csQuestions[currentQuestion];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-700 via-blue-600 to-indigo-500 text-white p-6">
            {/* Progress Bar */}
            <div className="w-full max-w-3xl mb-6">
                <div className="h-4 bg-white/30 rounded-full">
                    <div
                        className="h-4 bg-green-400 rounded-full transition-all"
                        style={{ width: `${((currentQuestion + 1) / csQuestions.length) * 100}%` }}
                    />
                </div>
                <p className="mt-1 text-sm">
                    Question {currentQuestion + 1} of {csQuestions.length}
                </p>
            </div>

            {/* Question Card */}
            <motion.div
                className="bg-white/10 p-6 rounded-xl shadow-lg w-full max-w-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-semibold mb-4">{question.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["A", "B", "C", "D"].map((opt) => (
                        <motion.button
                            key={opt}
                            className={`p-4 rounded-lg border border-white/30 hover:bg-white/20 transition-colors text-left ${selectedOption === opt ? "bg-green-400/50" : ""
                                }`}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => handleOptionSelect(opt)}
                        >
                            {opt}. {question[`option${opt}`]}
                        </motion.button>
                    ))}
                </div>
                <motion.button
                    className="mt-6 px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    onClick={handleNext}
                >
                    {currentQuestion + 1 === csQuestions.length ? "Finish Quiz" : "Next Question"}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default QuizCS;
