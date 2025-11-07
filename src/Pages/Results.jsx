// src/Pages/Results.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // The location.state should contain the quiz data passed from Quiz pages
    const { score, totalQuestions, userAnswers, questions } = location.state || {};

    if (!questions || !userAnswers) {
        return (
            <div className="flex justify-center items-center h-screen text-white">
                <p>No results to display. Please take a quiz first.</p>
            </div>
        );
    }

    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl text-white">
                <motion.h1
                    className="text-4xl font-bold text-yellow-300 mb-6 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Quiz Results
                </motion.h1>

                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-xl mb-2">Score: <span className="font-bold">{score}/{totalQuestions}</span></p>
                    <p className="text-lg">Percentage: <span className="font-semibold">{percentage}%</span></p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Review Answers:</h2>
                    <div className="space-y-4">
                        {questions.map((q, idx) => {
                            const userAnswer = userAnswers[idx];
                            const isCorrect = userAnswer === q.answer;

                            return (
                                <motion.div
                                    key={idx}
                                    className={`p-4 rounded-xl shadow-lg border-l-4 ${isCorrect ? "border-green-400 bg-green-500/20" : "border-red-500 bg-red-500/20"
                                        }`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <p className="font-semibold">
                                        Q{idx + 1}: {q.question}
                                    </p>
                                    <p>
                                        Your answer: <span className={`${isCorrect ? "text-green-200" : "text-red-200"}`}>{userAnswer}</span>
                                    </p>
                                    {!isCorrect && (
                                        <p>
                                            Correct answer: <span className="text-green-200">{q.answer}</span>
                                        </p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                <div className="flex justify-center mt-8">
                    <button
                        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-white font-bold rounded-full transition-all"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Results;
