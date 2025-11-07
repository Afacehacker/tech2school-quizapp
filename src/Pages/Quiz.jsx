import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { mathQuestions } from "../data/mathQuestions";
import { csQuestions } from "../data/csQuestions";

export default function Quiz() {
    const { subject } = useParams(); // 'math' or 'cs'
    const navigate = useNavigate();

    const questions = subject === "math" ? mathQuestions : csQuestions;

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    if (!questions) return <p>Subject not found</p>;

    const handleAnswer = (option) => {
        const correct = questions[current].answer;
        setUserAnswers([...userAnswers, { question: questions[current].question, selected: option, correct }]);
        if (option === correct) setScore(score + 1);

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            // Go to results page with state
            navigate("/results", { state: { score, userAnswers, subject } });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-purple-800 via-indigo-700 to-purple-900 text-white">
            {/* Progress */}
            <div className="w-full max-w-3xl mb-6">
                <div className="text-right mb-1">
                    <span>{`Question ${current + 1} of ${questions.length}`}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                    <motion.div
                        className="bg-green-400 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-3xl p-8 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl text-white"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg">{questions[current].question}</h2>
                <div className="grid gap-4">
                    {["A", "B", "C", "D"].map((opt) => (
                        <motion.button
                            key={opt}
                            whileHover={{ scale: 1.05, backgroundColor: "#6EE7B7" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-4 bg-purple-800 hover:bg-purple-700 rounded-xl shadow-lg font-semibold text-left"
                            onClick={() => handleAnswer(opt)}
                        >
                            <span className="font-bold mr-2">{opt}.</span> {questions[current][`option${opt}`]}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
